# -*- coding: utf-8 -*-
"""Genere les diapositives de la sequence "La conclusion du contrat de travail".

Les diapositives sont construites a partir des gabarits (slideLayouts) du support
"Les essentiels du BTP" lui-meme, afin que la charte graphique, les polices et les
couleurs soient rigoureusement identiques a celles du support existant.

Deux fichiers sont produits :
  - le module seul, a inserer dans le support (Accueil > Nouvelle diapositive >
    Reutiliser les diapositives) ;
  - le support complet, sequence deja inseree apres la sequence 2.

Usage :
    python3 generer_module_contrats.py SOURCE.pptx DOSSIER_SORTIE
"""

import math
import re
import shutil
import sys
import zipfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from contenu_contrats import SLIDES  # noqa: E402

# --- gabarits du support d'origine -------------------------------------------
LAYOUT_SEQUENCE = "slideLayout17.xml"   # intercalaire de sequence
LAYOUT_SOMMAIRE = "slideLayout14.xml"   # sommaire simple
LAYOUT_CONTENU = "slideLayout16.xml"    # titre et contenu
ALERT_IMAGE = "../media/image12.png"    # pictogramme "attention" de la charte

SKILL_SCRIPTS = "/root/.claude/skills/synced/a5742139-7401-47c0-8d6f-99690d10382b_997a7ae2-bfad-410c-be33-0bb104c89f39/pptx/scripts"

# geometrie reprise du gabarit "Titre et contenu"
BODY_X, BODY_Y = 431800, 1748813
BODY_CX, BODY_CY = 11269133, 4400000
EMU_PER_INCH = 914400

NS = ('xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
      'xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"')

SPTREE_HEAD = (
    "<p:cSld><p:spTree><p:nvGrpSpPr><p:cNvPr id=\"1\" name=\"\"/><p:cNvGrpSpPr/>"
    "<p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x=\"0\" y=\"0\"/>"
    "<a:ext cx=\"0\" cy=\"0\"/><a:chOff x=\"0\" y=\"0\"/><a:chExt cx=\"0\" cy=\"0\"/>"
    "</a:xfrm></p:grpSpPr>"
)
SPTREE_TAIL = "</p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>"


def esc(text):
    return (text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


# --- estimation d'encombrement ------------------------------------------------
# Calibree sur les diapositives du support d'origine : police du theme, interligne
# 90 %, espace avant paragraphe 10 pt, largeur moyenne de glyphe 0,48 em.
CHAR_WIDTH_RATIO = 0.48
LINE_SPACING = 0.90
SPACE_BEFORE_PT = 10.0


def text_height_pt(paragraphs, size_pt, width_emu, indent_emu=228600):
    usable_pt = (width_emu - indent_emu - 91440) / EMU_PER_INCH * 72
    chars_per_line = max(10, usable_pt / (CHAR_WIDTH_RATIO * size_pt))
    total = 0.0
    for para in paragraphs:
        lines = max(1, math.ceil(len(para) / chars_per_line))
        total += lines * size_pt * 1.2 * LINE_SPACING + SPACE_BEFORE_PT
    return total


def fit_size(paragraphs, height_emu, width_emu, candidates=(2800, 2400, 2200, 2000, 1800, 1600)):
    """Plus grande taille de police (en centiemes de point) qui tient dans la zone.

    Le budget retenu est volontairement inferieur a la hauteur reelle : la police du
    theme n'etant pas mesurable ici, on conserve une marge d'environ 15 %.
    """
    budget = height_emu / EMU_PER_INCH * 72 * 0.85
    for hundredths in candidates:
        if text_height_pt(paragraphs, hundredths / 100, width_emu) <= budget:
            return hundredths
    return candidates[-1]


# --- fabrication des formes ---------------------------------------------------
def title_sp(shape_id, text, size=None):
    sz = ' sz="%d"' % size if size else ""
    return (
        '<p:sp><p:nvSpPr><p:cNvPr id="%d" name="Titre %d"/><p:cNvSpPr>'
        '<a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="title"/></p:nvPr>'
        '</p:nvSpPr><p:spPr/><p:txBody><a:bodyPr><a:normAutofit/></a:bodyPr>'
        '<a:lstStyle/><a:p><a:r><a:rPr lang="fr-FR"%s dirty="0"/><a:t>%s</a:t></a:r>'
        '</a:p></p:txBody></p:sp>' % (shape_id, shape_id - 1, sz, esc(text))
    )


def body_sp(shape_id, idx, bullets, size, x=BODY_X, y=BODY_Y, cx=BODY_CX, cy=BODY_CY,
            justify=True, ph_type=None):
    algn = '<a:pPr algn="just"/>' if justify else ""
    paras = "".join(
        '<a:p>%s<a:r><a:rPr lang="fr-FR" sz="%d" dirty="0"/><a:t>%s</a:t></a:r></a:p>'
        % (algn, size, esc(b)) for b in bullets
    )
    ph = '<p:ph%s sz="quarter" idx="%d"/>' % (
        ' type="%s"' % ph_type if ph_type else "", idx)
    return (
        '<p:sp><p:nvSpPr><p:cNvPr id="%d" name="Espace réservé du contenu %d"/>'
        '<p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr>%s</p:nvPr></p:nvSpPr>'
        '<p:spPr><a:xfrm><a:off x="%d" y="%d"/><a:ext cx="%d" cy="%d"/></a:xfrm></p:spPr>'
        '<p:txBody><a:bodyPr><a:normAutofit/></a:bodyPr><a:lstStyle/>%s</p:txBody></p:sp>'
        % (shape_id, shape_id - 1, ph, x, y, cx, cy, paras)
    )


# Diapositive d'alerte : pictogramme au bord gauche, comme dans le support d'origine,
# et zone de texte decalee a droite pour qu'aucune puce ne passe derriere le picto.
ALERT_PIC_X, ALERT_PIC_Y, ALERT_PIC_SIZE = -84687, 2700000, 1440160
ALERT_BODY_X = 1550000
ALERT_BODY_CX = BODY_X + BODY_CX - ALERT_BODY_X


def alert_pic(shape_id, rid):
    """Pictogramme 'attention' de la charte, positionne comme dans le support."""
    return (
        '<p:pic><p:nvPicPr><p:cNvPr id="%d" name="Picture %d" descr="alerte-attention"/>'
        '<p:cNvPicPr><a:picLocks noChangeAspect="1" noChangeArrowheads="1"/></p:cNvPicPr>'
        '<p:nvPr/></p:nvPicPr><p:blipFill><a:blip r:embed="%s" cstate="print"/>'
        '<a:srcRect/><a:stretch><a:fillRect/></a:stretch></p:blipFill>'
        '<p:spPr bwMode="auto"><a:xfrm><a:off x="%d" y="%d"/>'
        '<a:ext cx="%d" cy="%d"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/>'
        '</a:prstGeom><a:noFill/></p:spPr></p:pic>'
        % (shape_id, shape_id - 1, rid, ALERT_PIC_X, ALERT_PIC_Y,
           ALERT_PIC_SIZE, ALERT_PIC_SIZE)
    )


def cell(text, size, align_center=False, span=None, hmerge=False, bold=False):
    if hmerge:
        return ('<a:tc hMerge="1"><a:txBody><a:bodyPr/><a:lstStyle/><a:p>'
                '<a:endParaRPr lang="fr-FR"/></a:p></a:txBody><a:tcPr/></a:tc>')
    attrs = ' gridSpan="%d"' % span if span else ""
    pPr = '<a:pPr algn="ctr"/>' if align_center else ""
    b = ' b="1"' if bold else ""
    run = ('<a:r><a:rPr lang="fr-FR" sz="%d"%s dirty="0"/><a:t>%s</a:t></a:r>'
           % (size, b, esc(text))) if text else '<a:endParaRPr lang="fr-FR" sz="%d"/>' % size
    return ('<a:tc%s><a:txBody><a:bodyPr/><a:lstStyle/><a:p>%s%s</a:p></a:txBody>'
            '<a:tcPr marL="121920" marR="121920" marT="60960" marB="60960" anchor="ctr"/>'
            '</a:tc>' % (attrs, pPr, run))


# hauteur maximale utilisable par un tableau, sous le titre et au-dessus du pied de page
TABLE_MAX_H = 6858000 - BODY_Y - 460000
CELL_MARGIN_EMU = 243840          # marL + marR appliques a chaque cellule
CELL_PADDING_PT = 9.6             # marT + marB


def _cell_lines(text, size_pt, col_emu):
    usable_pt = max(24.0, (col_emu - CELL_MARGIN_EMU) / EMU_PER_INCH * 72)
    chars_per_line = max(4, usable_pt / (CHAR_WIDTH_RATIO * size_pt))
    return max(1, math.ceil(len(text) / chars_per_line))


def _table_height_pt(cols, header, rows, merge_last, size_pt):
    """Hauteur estimee du tableau : chaque ligne suit sa cellule la plus haute."""
    total_w = sum(cols)
    height = 0.0
    for ri, row in enumerate([header] + rows):
        merged = merge_last and ri == len(rows)
        if merged:
            lines = _cell_lines(row[0], size_pt, total_w)
        else:
            lines = max(_cell_lines(c, size_pt, cols[i])
                        for i, c in enumerate(row[:len(cols)]))
        height += lines * size_pt * 1.2 + CELL_PADDING_PT
    return height


def fit_table_size(cols, header, rows, merge_last,
                   candidates=(2200, 2000, 1800, 1600, 1400)):
    budget = TABLE_MAX_H / EMU_PER_INCH * 72 * 0.90
    for hundredths in candidates:
        if _table_height_pt(cols, header, rows, merge_last, hundredths / 100) <= budget:
            return hundredths
    return candidates[-1]


def table_frame(shape_id, idx, cols, header, rows, merge_last=False):
    n = len(cols)
    size = fit_table_size(cols, header, rows, merge_last)
    size_pt = size / 100
    total_w = sum(cols)

    grid = "".join('<a:gridCol w="%d"/>' % w for w in cols)
    trs, total_h = [], 0
    for ri, row in enumerate([header] + rows):
        is_header = ri == 0
        merged = merge_last and ri == len(rows)
        if merged:
            lines = _cell_lines(row[0], size_pt, total_w)
            cells = (cell(row[0], size, span=n)
                     + "".join(cell("", size, hmerge=True) for _ in range(n - 1)))
        else:
            lines = max(_cell_lines(c, size_pt, cols[i])
                        for i, c in enumerate(row[:n]))
            cells = "".join(cell(c, size, align_center=(i > 0), bold=is_header)
                            for i, c in enumerate(row[:n]))
        h = int((lines * size_pt * 1.2 + CELL_PADDING_PT) / 72 * EMU_PER_INCH)
        total_h += h
        trs.append('<a:tr h="%d">%s</a:tr>' % (h, cells))

    return (
        '<p:graphicFrame><p:nvGraphicFramePr><p:cNvPr id="%d" name="Tableau %d"/>'
        '<p:cNvGraphicFramePr><a:graphicFrameLocks noGrp="1"/></p:cNvGraphicFramePr>'
        '<p:nvPr><p:ph sz="quarter" idx="%d"/></p:nvPr></p:nvGraphicFramePr>'
        '<p:xfrm><a:off x="%d" y="%d"/><a:ext cx="%d" cy="%d"/></p:xfrm>'
        '<a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/table">'
        '<a:tbl><a:tblPr firstRow="1" bandRow="1"><a:tableStyleId>'
        '{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}</a:tableStyleId></a:tblPr>'
        '<a:tblGrid>%s</a:tblGrid>%s</a:tbl></a:graphicData></a:graphic></p:graphicFrame>'
        % (shape_id, shape_id - 1, idx, BODY_X, BODY_Y, total_w, total_h, grid, "".join(trs))
    )


def sequence_slide(title, subtitle):
    return (
        '<p:sp><p:nvSpPr><p:cNvPr id="4" name="Titre 3"/><p:cNvSpPr>'
        '<a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr><p:ph type="title"/></p:nvPr>'
        '</p:nvSpPr><p:spPr/><p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:r>'
        '<a:rPr lang="fr-FR" dirty="0"/><a:t>%s</a:t></a:r></a:p></p:txBody></p:sp>'
        '<p:sp><p:nvSpPr><p:cNvPr id="5" name="Espace réservé du texte 4"/>'
        '<p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr>'
        '<p:ph type="body" idx="1"/></p:nvPr></p:nvSpPr><p:spPr/><p:txBody>'
        '<a:bodyPr><a:normAutofit/></a:bodyPr><a:lstStyle/><a:p><a:r>'
        '<a:rPr lang="fr-FR" dirty="0"/><a:t>%s</a:t></a:r></a:p></p:txBody></p:sp>'
        '<p:sp><p:nvSpPr><p:cNvPr id="6" name="Espace réservé du contenu 5"/>'
        '<p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr>'
        '<p:ph sz="quarter" idx="10"/></p:nvPr></p:nvSpPr><p:spPr/><p:txBody>'
        '<a:bodyPr/><a:lstStyle/><a:p><a:endParaRPr lang="fr-FR"/></a:p></p:txBody></p:sp>'
        % (esc(title), esc(subtitle))
    )


def build_slide_xml(spec, alert_rid=None):
    """Retourne (xml de la diapositive, gabarit utilise, image requise)."""
    kind = spec["kind"]
    if kind == "sequence":
        return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<p:sld %s>%s%s%s</p:sld>'
                % (NS, SPTREE_HEAD, sequence_slide(spec["title"], spec["subtitle"]),
                   SPTREE_TAIL), LAYOUT_SEQUENCE, False)

    if kind == "sommaire":
        size = fit_size(spec["body"], 4800464, 8784548)
        shapes = (
            body_sp(2, 13, spec["body"], size, x=431799, y=1208755,
                    cx=8784548, cy=4800464, justify=False, ph_type="body")
            + body_sp(4, 14, [spec["title"]], 2200, x=431800, y=308654,
                      cx=11269133, cy=780087, justify=False, ph_type="body")
        )
        return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<p:sld %s>%s%s%s</p:sld>' % (NS, SPTREE_HEAD, shapes, SPTREE_TAIL),
                LAYOUT_SOMMAIRE, False)

    alert = spec.get("alert", False)
    title_size = 3067 if len(spec["title"]) > 46 else None

    if kind == "table":
        content = table_frame(4, 14, spec["cols"], spec["header"], spec["rows"],
                              spec.get("merge_last", False))
    else:
        cx = ALERT_BODY_CX if alert else BODY_CX
        x = ALERT_BODY_X if alert else BODY_X
        size = fit_size(spec["body"], BODY_CY, cx)
        content = body_sp(5, 14, spec["body"], size, x=x, cx=cx)

    shapes = content + title_sp(3, spec["title"], title_size)
    if alert:
        shapes += alert_pic(9, alert_rid)
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<p:sld %s>%s%s%s</p:sld>' % (NS, SPTREE_HEAD, shapes, SPTREE_TAIL),
            LAYOUT_CONTENU, alert)


def notes_xml(text):
    paras = "".join(
        '<a:p><a:r><a:rPr lang="fr-FR" dirty="0"/><a:t>%s</a:t></a:r></a:p>' % esc(line)
        if line.strip() else '<a:p><a:endParaRPr lang="fr-FR"/></a:p>'
        for line in (text or "").split("\n")
    ) or '<a:p><a:endParaRPr lang="fr-FR"/></a:p>'
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:notes %s><p:cSld>'
        '<p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/>'
        '</p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/>'
        '<a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>'
        '<p:sp><p:nvSpPr><p:cNvPr id="2" name="Espace réservé de l\'image des diapositives 1"/>'
        '<p:cNvSpPr><a:spLocks noGrp="1" noRot="1" noChangeAspect="1"/></p:cNvSpPr>'
        '<p:nvPr><p:ph type="sldImg"/></p:nvPr></p:nvSpPr><p:spPr/></p:sp>'
        '<p:sp><p:nvSpPr><p:cNvPr id="3" name="Espace réservé des commentaires 2"/>'
        '<p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr>'
        '<p:ph type="body" idx="1"/></p:nvPr></p:nvSpPr><p:spPr/><p:txBody>'
        '<a:bodyPr/><a:lstStyle/>%s</p:txBody></p:sp>'
        '<p:sp><p:nvSpPr><p:cNvPr id="4" name="Espace réservé du numéro de diapositive 3"/>'
        '<p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr>'
        '<p:ph type="sldNum" sz="quarter" idx="10"/></p:nvPr></p:nvSpPr><p:spPr/>'
        '<p:txBody><a:bodyPr/><a:lstStyle/><a:p>'
        '<a:fld id="{B51BB447-EFEE-48E8-B629-A973210D776F}" type="slidenum">'
        '<a:rPr lang="fr-FR" smtClean="0"/><a:pPr/><a:t>1</a:t></a:fld>'
        '<a:endParaRPr lang="fr-FR" dirty="0"/></a:p></p:txBody></p:sp></p:spTree>'
        '</p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:notes>'
        % (NS, paras)
    )


# --- assemblage du paquet OOXML ----------------------------------------------
class Deck:
    def __init__(self, root):
        self.root = Path(root)
        self.ct = (self.root / "[Content_Types].xml").read_text(encoding="utf-8")
        self.pres = (self.root / "ppt/presentation.xml").read_text(encoding="utf-8")
        self.rels = (self.root / "ppt/_rels/presentation.xml.rels").read_text(encoding="utf-8")

    def _next(self, folder, prefix):
        nums = [int(m.group(1)) for p in (self.root / folder).glob(prefix + "*.xml")
                for m in [re.match(prefix + r"(\d+)\.xml$", p.name)] if m]
        return max(nums, default=0) + 1

    def _next_rid(self):
        return "rId%d" % (max(int(m) for m in re.findall(r'Id="rId(\d+)"', self.rels)) + 1)

    def _next_sldid(self):
        ids = [int(m) for m in re.findall(r'<p:sldId id="(\d+)"', self.pres)]
        return max(max(ids, default=255), 255) + 1

    def add(self, slide_xml, layout, notes_text, after_rid=None, image_rid_target=None):
        n = self._next("ppt/slides", "slide")
        m = self._next("ppt/notesSlides", "notesSlide")

        srels = ['<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/'
                 'officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/%s"/>'
                 % layout,
                 '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/'
                 'officeDocument/2006/relationships/notesSlide" Target="../notesSlides/notesSlide%d.xml"/>'
                 % m]
        if image_rid_target:
            srels.append('<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/'
                         'officeDocument/2006/relationships/image" Target="%s"/>' % image_rid_target)

        (self.root / ("ppt/slides/slide%d.xml" % n)).write_text(slide_xml, encoding="utf-8")
        (self.root / ("ppt/slides/_rels/slide%d.xml.rels" % n)).write_text(
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships '
            'xmlns="http://schemas.openxmlformats.org/package/2006/relationships">%s'
            '</Relationships>' % "".join(srels), encoding="utf-8")

        (self.root / ("ppt/notesSlides/notesSlide%d.xml" % m)).write_text(
            notes_xml(notes_text), encoding="utf-8")
        (self.root / ("ppt/notesSlides/_rels/notesSlide%d.xml.rels" % m)).write_text(
            '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships '
            'xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/'
            '2006/relationships/notesMaster" Target="../notesMasters/notesMaster1.xml"/>'
            '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/'
            '2006/relationships/slide" Target="../slides/slide%d.xml"/></Relationships>' % n,
            encoding="utf-8")

        for part, ctype in ((("/ppt/slides/slide%d.xml" % n), "slide"),
                            (("/ppt/notesSlides/notesSlide%d.xml" % m), "notesSlide")):
            self.ct = self.ct.replace(
                "</Types>",
                '<Override PartName="%s" ContentType="application/vnd.openxmlformats-'
                'officedocument.presentationml.%s+xml"/></Types>' % (part, ctype))

        rid = self._next_rid()
        self.rels = self.rels.replace(
            "</Relationships>",
            '<Relationship Id="%s" Type="http://schemas.openxmlformats.org/officeDocument/'
            '2006/relationships/slide" Target="slides/slide%d.xml"/></Relationships>' % (rid, n))

        entry = '<p:sldId id="%d" r:id="%s"/>' % (self._next_sldid(), rid)
        if after_rid:
            anchor = re.search(r'<p:sldId id="\d+" r:id="%s"/>' % after_rid, self.pres)
            self.pres = (self.pres[:anchor.end()] + entry + self.pres[anchor.end():])
        else:
            self.pres = self.pres.replace("</p:sldIdLst>", entry + "</p:sldIdLst>")
        return rid

    def rid_of_slide(self, index):
        """rId de la n-ieme diapositive (1-based) dans l'ordre de projection."""
        return re.findall(r'<p:sldId id="\d+" r:id="(rId\d+)"/>', self.pres)[index - 1]

    def keep_only(self, rids):
        keep = set(rids)
        entries = re.findall(r'<p:sldId id="\d+" r:id="rId\d+"/>', self.pres)
        kept = [e for e in entries if re.search(r'r:id="(rId\d+)"', e).group(1) in keep]
        self.pres = re.sub(r'<p:sldIdLst>.*?</p:sldIdLst>',
                           "<p:sldIdLst>%s</p:sldIdLst>" % "".join(kept), self.pres, flags=re.S)

    def save(self):
        (self.root / "[Content_Types].xml").write_text(self.ct, encoding="utf-8")
        (self.root / "ppt/presentation.xml").write_text(self.pres, encoding="utf-8")
        (self.root / "ppt/_rels/presentation.xml.rels").write_text(self.rels, encoding="utf-8")


def build(source, out_path, standalone):
    work = out_path.parent / (".work_" + out_path.stem)
    if work.exists():
        shutil.rmtree(work)
    work.mkdir(parents=True)
    with zipfile.ZipFile(source) as z:
        z.extractall(work)

    deck = Deck(work)
    # inserer juste apres "L'embauche : Exercice" (diapositive 21, fin de la sequence 2)
    after = deck.rid_of_slide(21)
    added = []
    for spec in SLIDES:
        xml, layout, needs_image = build_slide_xml(spec, alert_rid="rId3")
        after = deck.add(xml, layout, spec.get("notes", ""), after_rid=after,
                         image_rid_target=ALERT_IMAGE if needs_image else None)
        added.append(after)

    if standalone:
        deck.keep_only(added)
    else:
        _update_general_summary(work)
    deck.save()

    # supprime les diapositives ecartees, les medias devenus orphelins et le
    # repertoire [trash] herite du fichier source
    _clean(work)

    if out_path.exists():
        out_path.unlink()
    with zipfile.ZipFile(out_path, "w", zipfile.ZIP_DEFLATED) as z:
        for f in sorted(work.rglob("*")):
            if f.is_file():
                z.write(f, f.relative_to(work).as_posix())
    shutil.rmtree(work)
    return len(added)


def _clean(work):
    """Applique le nettoyage du paquet (script clean.py de l'outillage pptx)."""
    skill = Path(SKILL_SCRIPTS)
    if not (skill / "clean.py").exists():
        shutil.rmtree(work / "[trash]", ignore_errors=True)
        return
    sys.path.insert(0, str(skill))
    from clean import clean_unused_files  # noqa: E402
    removed = clean_unused_files(work)
    print("  nettoyage : %d fichiers retirés" % len(removed))


def _update_general_summary(work):
    """Ajoute la sequence 2 bis au sommaire general (diapositive 2)."""
    p = work / "ppt/slides/slide2.xml"
    x = p.read_text(encoding="utf-8")
    anchor = "<a:t>Séquence 2 – L’embauche</a:t>"
    if anchor not in x:
        print("  ! sommaire général : entrée « Séquence 2 » introuvable, non modifié")
        return
    para = re.search(r'<a:p>(?:(?!</a:p>).)*%s(?:(?!</a:p>).)*</a:p>' % re.escape(anchor), x, re.S)
    new = para.group(0).replace(anchor,
                                "<a:t>Séquence 2 bis – La conclusion du contrat de travail</a:t>")
    p.write_text(x[:para.end()] + new + x[para.end():], encoding="utf-8")


def main():
    source = Path(sys.argv[1])
    outdir = Path(sys.argv[2])
    outdir.mkdir(parents=True, exist_ok=True)

    module = outdir / "MODULE_CONTRATS_DE_TRAVAIL_BTP_2026.pptx"
    n = build(source, module, standalone=True)
    print("%-58s %2d diapositives" % (module.name, n))

    complet = outdir / "LES_ESSENTIELS_DU_BTP_2026_avec_contrats.pptx"
    build(source, complet, standalone=False)
    print("%-58s support complet, séquence insérée après la diapositive 21" % complet.name)


if __name__ == "__main__":
    main()
