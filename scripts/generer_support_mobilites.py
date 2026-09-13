# -*- coding: utf-8 -*-
"""Genere le support autonome "Prime carburant 2026 et dispositifs de mobilite".

Les diapositives sont construites a partir des gabarits (slideLayouts) du support
"Les essentiels du BTP", avec les memes briques que le module "La conclusion du
contrat de travail" (scripts/generer_module_contrats.py) : la charte graphique,
les polices, les couleurs et les tableaux sont donc identiques.

Un seul fichier est produit : le support complet, autonome, avec les notes de
l'animateur sur chaque diapositive.

Usage :
    python3 generer_support_mobilites.py SOURCE.pptx DOSSIER_SORTIE
"""

import glob
import shutil
import sys
import zipfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from contenu_mobilites import SLIDES  # noqa: E402
from generer_module_contrats import ALERT_IMAGE, Deck, build_slide_xml  # noqa: E402

OUTPUT_NAME = "PRIME_CARBURANT_ET_MOBILITES_2026.pptx"


def _skill_scripts():
    """Repertoire des scripts de l'outillage pptx (clean.py), s'il est installe."""
    for candidate in glob.glob("/root/.claude/skills/synced/*/pptx/scripts"):
        if (Path(candidate) / "clean.py").exists():
            return Path(candidate)
    return None


def _clean(work):
    """Retire les diapositives ecartees, les medias orphelins et le [trash]."""
    skill = _skill_scripts()
    if skill is None:
        shutil.rmtree(work / "[trash]", ignore_errors=True)
        return
    sys.path.insert(0, str(skill))
    from clean import clean_unused_files  # noqa: E402
    removed = clean_unused_files(work)
    print("  nettoyage : %d fichiers retirés" % len(removed))


def build(source, out_path):
    work = out_path.parent / (".work_" + out_path.stem)
    if work.exists():
        shutil.rmtree(work)
    work.mkdir(parents=True)
    with zipfile.ZipFile(source) as z:
        z.extractall(work)

    deck = Deck(work)
    added = []
    after = None
    for spec in SLIDES:
        xml, layout, needs_image = build_slide_xml(spec, alert_rid="rId3")
        after = deck.add(xml, layout, spec.get("notes", ""), after_rid=after,
                         image_rid_target=ALERT_IMAGE if needs_image else None)
        added.append(after)

    deck.keep_only(added)
    deck.save()
    _clean(work)

    if out_path.exists():
        out_path.unlink()
    with zipfile.ZipFile(out_path, "w", zipfile.ZIP_DEFLATED) as z:
        # [Content_Types].xml en premiere position, comme dans un fichier PowerPoint
        ct = work / "[Content_Types].xml"
        z.write(ct, "[Content_Types].xml")
        for f in sorted(work.rglob("*")):
            if f.is_file() and f != ct:
                z.write(f, f.relative_to(work).as_posix())
    shutil.rmtree(work)
    return len(added)


def main():
    source = Path(sys.argv[1])
    outdir = Path(sys.argv[2])
    outdir.mkdir(parents=True, exist_ok=True)
    out = outdir / OUTPUT_NAME
    n = build(source, out)
    print("%-45s %2d diapositives" % (out.name, n))


if __name__ == "__main__":
    main()
