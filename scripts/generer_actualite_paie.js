// -*- coding: utf-8 -*-
/*
 * Génère le support "Actualité paie juin – septembre 2026" (PowerPoint 16:9).
 *
 * Usage :
 *   node scripts/generer_actualite_paie.js [dossier_sortie]
 *
 * Le contenu pédagogique est isolé dans scripts/contenu_actualite_paie.js.
 * Dépendance : pptxgenjs (npm install pptxgenjs).
 *
 * Charte : couleurs du thème du support "Les essentiels du BTP" (ardoise 435369,
 * terre cuite 8C3A27, pêche F2E5D8 / FFF6F4, vert 183F1E), titres Cambria,
 * texte Calibri.
 */

const path = require("path");
const pptxgen = require("pptxgenjs");
const { SLIDES, FOOTER } = require("./contenu_actualite_paie");

// ---------------------------------------------------------------- charte
const C = {
  ink: "435369", // ardoise (fond des intercalaires, titres)
  inkDark: "2F3B4C",
  terra: "8C3A27", // accent
  terraSoft: "D9A390",
  rose: "F0C8BC",
  peach: "F2E5D8",
  cream: "FFF6F4",
  grey: "E7E5E5",
  green: "183F1E",
  greenSoft: "DCE8DD",
  text: "2B2B2B",
  muted: "6B7280",
  white: "FFFFFF",
};
const FONT_T = "Cambria";
const FONT_B = "Calibri";

const W = 13.333;
const H = 7.5;
const MX = 0.6; // marge horizontale
const TITLE_Y = 0.42;
const BODY_Y = 1.45;
const BODY_H = 5.4; // jusqu'à 6.85
const FOOT_Y = 7.02;

// Typographie française : espace insécable avant : ; ? ! % € et après «
function fr(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(/ ([:;?!%€])/g, " $1")
    .replace(/« /g, "« ")
    .replace(/ »/g, " »")
    .replace(/(\d) (\d{3})/g, "$1 $2");
}

// ---------------------------------------------------------------- outils
let slideNo = 0;

function footer(slide, dark) {
  slideNo += 1;
  slide.addText(FOOTER, {
    x: MX, y: FOOT_Y, w: 8, h: 0.3, fontFace: FONT_B, fontSize: 9,
    color: dark ? C.terraSoft : C.muted, margin: 0, isTextBox: true,
  });
  slide.addText(String(slideNo), {
    x: W - MX - 1, y: FOOT_Y, w: 1, h: 0.3, fontFace: FONT_B, fontSize: 9,
    color: dark ? C.terraSoft : C.muted, align: "right", margin: 0, isTextBox: true,
  });
}

function title(slide, text, opts = {}) {
  slide.addText(fr(text), {
    x: MX, y: TITLE_Y, w: opts.w || W - 2 * MX, h: 0.85, fontFace: FONT_T, fontSize: opts.size || 28,
    bold: true, color: C.ink, valign: "middle", margin: 0, isTextBox: true, fit: "shrink",
  });
}

function pill(slide, text, x, y, color, w = 1.9) {
  slide.addShape("roundRect", {
    x, y, w, h: 0.34, fill: { color }, line: { color }, rectRadius: 0.17,
  });
  slide.addText(fr(text), {
    x, y, w, h: 0.34, fontFace: FONT_B, fontSize: 10, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0, isTextBox: true, charSpacing: 1,
  });
}

function circleNum(slide, n, x, y, d = 0.5, color = C.terra, size = 14) {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color }, line: { color } });
  slide.addText(String(n), {
    x, y, w: d, h: d, fontFace: FONT_T, fontSize: size, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0, isTextBox: true,
  });
}

// Estimation grossière du nombre de lignes pour choisir une taille de police.
function estLines(paragraphs, widthIn, sizePt) {
  const cpl = (widthIn * 72) / (sizePt * 0.5);
  return paragraphs.reduce((n, p) => n + Math.max(1, Math.ceil(p.length / cpl)), 0);
}
function fitSize(paragraphs, widthIn, heightIn, candidates, lineGap = 1.25, paraGap = 0.35) {
  for (const s of candidates) {
    const lines = estLines(paragraphs, widthIn, s);
    const hPt = lines * s * lineGap + paragraphs.length * s * paraGap;
    if (hPt <= heightIn * 72) return s;
  }
  return candidates[candidates.length - 1];
}

function bulletBox(slide, items, x, y, w, h, opts = {}) {
  const size = opts.size || fitSize(items, w - 0.35, h, [17, 16, 15, 14, 13, 12, 11]);
  const runs = items.map((t, i) => ({
    text: fr(t),
    options: {
      bullet: { code: "25A0", indent: 18 }, // carré plein
      breakLine: i < items.length - 1,
      paraSpaceAfter: Math.max(4, size * 0.5),
    },
  }));
  slide.addText(runs, {
    x, y, w, h, fontFace: FONT_B, fontSize: size, color: C.text, valign: "top",
    margin: 0.05, isTextBox: true, lineSpacingMultiple: 1.05,
  });
}

// ---------------------------------------------------------------- gabarits
function slideTitle(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.ink };
  // motif : cercles
  s.addShape("ellipse", { x: 9.2, y: -1.6, w: 5.6, h: 5.6, fill: { color: C.terra }, line: { color: C.terra } });
  s.addShape("ellipse", { x: 11.2, y: 3.2, w: 3.4, h: 3.4, fill: { color: C.terraSoft }, line: { color: C.terraSoft } });
  s.addShape("ellipse", { x: -0.9, y: 5.6, w: 2.6, h: 2.6, fill: { color: C.inkDark }, line: { color: C.inkDark } });
  s.addText(fr(d.title), {
    x: MX, y: 1.5, w: 8.4, h: 2.4, fontFace: FONT_T, fontSize: 44, bold: true, color: C.white,
    valign: "bottom", margin: 0, isTextBox: true,
  });
  s.addText(fr(d.subtitle), {
    x: MX, y: 4.05, w: 8.4, h: 0.6, fontFace: FONT_B, fontSize: 22, color: C.peach, margin: 0, isTextBox: true,
  });
  s.addText(fr(d.meta), {
    x: MX, y: 4.75, w: 8.4, h: 0.9, fontFace: FONT_B, fontSize: 14, color: C.terraSoft, margin: 0, isTextBox: true,
  });
  s.addText("Situation au 12 septembre 2026", {
    x: MX, y: 6.2, w: 6, h: 0.4, fontFace: FONT_B, fontSize: 12, italic: true, color: C.rose, margin: 0, isTextBox: true,
  });
  footer(s, true);
  return s;
}

function slideClosing(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.ink };
  s.addShape("ellipse", { x: -1.8, y: -2.2, w: 5.2, h: 5.2, fill: { color: C.terra }, line: { color: C.terra } });
  s.addShape("ellipse", { x: 10.9, y: 4.9, w: 3.6, h: 3.6, fill: { color: C.terraSoft }, line: { color: C.terraSoft } });
  s.addText(fr(d.title), {
    x: MX, y: 2.4, w: 12, h: 1.4, fontFace: FONT_T, fontSize: 54, bold: true, color: C.white, align: "center",
    margin: 0, isTextBox: true,
  });
  s.addText(fr(d.subtitle), {
    x: 1.5, y: 3.9, w: 10.3, h: 0.6, fontFace: FONT_B, fontSize: 20, color: C.peach, align: "center", margin: 0, isTextBox: true,
  });
  s.addText(fr(d.meta), {
    x: 1.5, y: 4.6, w: 10.3, h: 0.6, fontFace: FONT_B, fontSize: 14, color: C.terraSoft, align: "center", margin: 0, isTextBox: true,
  });
  footer(s, true);
  return s;
}

function slideSection(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.ink };
  s.addShape("ellipse", { x: 10.1, y: 0.9, w: 4.6, h: 4.6, fill: { color: C.terra }, line: { color: C.terra } });
  s.addText(d.num, {
    x: 10.1, y: 0.9, w: 4.6, h: 4.6, fontFace: FONT_T, fontSize: 96, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0, isTextBox: true,
  });
  s.addText("Séquence", {
    x: MX, y: 1.7, w: 6, h: 0.5, fontFace: FONT_B, fontSize: 16, color: C.terraSoft, margin: 0, isTextBox: true, charSpacing: 3,
  });
  s.addText(fr(d.title), {
    x: MX, y: 2.2, w: 8.8, h: 1.7, fontFace: FONT_T, fontSize: 38, bold: true, color: C.white, valign: "middle",
    margin: 0, isTextBox: true, fit: "shrink",
  });
  s.addText(fr(d.subtitle), {
    x: MX, y: 4.0, w: 8.8, h: 1.1, fontFace: FONT_B, fontSize: 17, color: C.peach, margin: 0, isTextBox: true, valign: "top",
  });
  pill(s, d.duration, MX, 5.5, C.terra, 4.2);
  footer(s, true);
  return s;
}

function slideAgenda(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title);
  const rows = d.rows;
  const rowH = Math.min(0.47, BODY_H / rows.length);
  const y0 = BODY_Y;
  // ligne verticale du parcours
  s.addShape("line", { x: 2.02, y: y0 + 0.2, w: 0, h: rowH * (rows.length - 1), line: { color: C.rose, width: 2 } });
  rows.forEach((r, i) => {
    const y = y0 + i * rowH;
    const isBreak = /Pause|Déjeuner|Fin de/.test(r[1]);
    const col = isBreak ? C.terraSoft : C.terra;
    s.addText(r[0], {
      x: MX, y, w: 1.2, h: rowH, fontFace: FONT_T, fontSize: 16, bold: true, color: C.ink, valign: "middle",
      margin: 0, isTextBox: true,
    });
    s.addShape("ellipse", { x: 1.9, y: y + rowH / 2 - 0.12, w: 0.24, h: 0.24, fill: { color: col }, line: { color: C.white, width: 1.5 } });
    s.addText(fr(r[1]), {
      x: 2.4, y, w: 10, h: rowH, fontFace: FONT_B, fontSize: isBreak ? 14 : 16, italic: isBreak,
      color: isBreak ? C.muted : C.text, valign: "middle", margin: 0, isTextBox: true,
    });
  });
  footer(s);
  return s;
}

function slideBullets(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title);
  const hasSide = !!d.side;
  const mainW = hasSide ? 8.0 : W - 2 * MX;
  bulletBox(s, d.bullets, MX, BODY_Y, mainW, BODY_H);
  if (hasSide) {
    const x = MX + mainW + 0.4;
    const w = W - MX - x;
    const n = d.side.lines.length;
    const h = Math.min(BODY_H, 1.0 + n * 0.62);
    s.addShape("roundRect", { x, y: BODY_Y, w, h, fill: { color: C.cream }, line: { color: C.cream }, rectRadius: 0.15 });
    s.addText(fr(d.side.heading), {
      x: x + 0.25, y: BODY_Y + 0.2, w: w - 0.5, h: 0.45, fontFace: FONT_T, fontSize: 16, bold: true, color: C.terra,
      margin: 0, isTextBox: true,
    });
    const runs = d.side.lines.map((t, i) => ({
      text: fr(t), options: { breakLine: i < n - 1, paraSpaceAfter: 6 },
    }));
    s.addText(runs, {
      x: x + 0.25, y: BODY_Y + 0.75, w: w - 0.5, h: h - 0.95, fontFace: FONT_B, fontSize: 13, color: C.text,
      valign: "top", margin: 0, isTextBox: true,
    });
  }
  footer(s);
  return s;
}

function slideCards(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title);
  const cols = d.cols || 3;
  const n = d.cards.length;
  const rowsN = Math.ceil(n / cols);
  const gap = 0.3;
  const kickerH = d.kicker ? 0.55 : 0;
  const availH = BODY_H - kickerH;
  const cw = (W - 2 * MX - gap * (cols - 1)) / cols;
  const ch = (availH - gap * (rowsN - 1)) / rowsN;
  d.cards.forEach((c, i) => {
    const r = Math.floor(i / cols);
    const col = i % cols;
    const x = MX + col * (cw + gap);
    const y = BODY_Y + r * (ch + gap);
    s.addShape("roundRect", { x, y, w: cw, h: ch, fill: { color: C.cream }, line: { color: C.cream }, rectRadius: 0.15 });
    circleNum(s, i + 1, x + 0.25, y + 0.25, 0.46, C.terra, 13);
    s.addText(fr(c.head), {
      x: x + 0.85, y: y + 0.22, w: cw - 1.05, h: 0.52, fontFace: FONT_T, fontSize: 15, bold: true, color: C.ink,
      valign: "middle", margin: 0, isTextBox: true, fit: "shrink",
    });
    const textH = ch - 1.0;
    const size = fitSize([c.text], cw - 0.5, textH, rowsN === 1 ? [17, 16, 15, 14, 13, 12] : [13, 12, 11, 10.5, 10]);
    s.addText(fr(c.text), {
      x: x + 0.25, y: y + 0.85, w: cw - 0.5, h: textH, fontFace: FONT_B, fontSize: size, color: C.text,
      valign: "top", margin: 0, isTextBox: true, lineSpacingMultiple: 1.05,
    });
  });
  if (d.kicker) {
    s.addText(fr(d.kicker), {
      x: MX, y: BODY_Y + availH + 0.12, w: W - 2 * MX, h: 0.45, fontFace: FONT_B, fontSize: 13, italic: true,
      color: C.terra, valign: "middle", margin: 0, isTextBox: true,
    });
  }
  footer(s);
  return s;
}

function slideStats(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title);
  const n = d.stats.length;
  const gap = 0.3;
  const cw = (W - 2 * MX - gap * (n - 1)) / n;
  const ch = 1.9;
  d.stats.forEach((st, i) => {
    const x = MX + i * (cw + gap);
    s.addShape("roundRect", { x, y: BODY_Y, w: cw, h: ch, fill: { color: C.ink }, line: { color: C.ink }, rectRadius: 0.15 });
    s.addText(fr(st.value), {
      x: x + 0.2, y: BODY_Y + 0.2, w: cw - 0.4, h: 0.95, fontFace: FONT_T, fontSize: 34, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0, isTextBox: true, fit: "shrink",
    });
    s.addText(fr(st.label), {
      x: x + 0.2, y: BODY_Y + 1.15, w: cw - 0.4, h: 0.65, fontFace: FONT_B, fontSize: 12, color: C.peach,
      align: "center", valign: "top", margin: 0, isTextBox: true,
    });
  });
  bulletBox(s, d.bullets, MX, BODY_Y + ch + 0.4, W - 2 * MX, BODY_H - ch - 0.4, { size: 15 });
  footer(s);
  return s;
}

function slideTable(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title);
  const totalW = W - 2 * MX;
  const sumW = d.colW.reduce((a, b) => a + b, 0);
  const colW = d.colW.map((w) => (w / sumW) * totalW);
  const nRows = d.rows.length + 1;
  // taille de police : estimer la hauteur
  const allRows = [d.header, ...d.rows];
  let size = 13;
  for (const cand of [13, 12, 11, 10.5, 10, 9.5, 9]) {
    let hIn = 0;
    for (const row of allRows) {
      const lines = Math.max(...row.map((cell, ci) => Math.max(1, Math.ceil(fr(cell).length / ((colW[ci] - 0.2) * 72 / (cand * 0.5))))));
      hIn += (lines * cand * 1.2) / 72 + 0.14;
    }
    if (hIn <= BODY_H - (d.note ? 0.5 : 0)) { size = cand; break; }
    size = cand;
  }
  const rows = allRows.map((row, ri) =>
    row.map((cell, ci) => ({
      text: fr(cell),
      options: {
        fontFace: FONT_B, fontSize: ri === 0 ? size : size, bold: ri === 0 || ci === 0,
        color: ri === 0 ? C.white : (ci === 0 ? C.ink : C.text),
        fill: { color: ri === 0 ? C.ink : (ri % 2 === 0 ? C.cream : C.white) },
        valign: "middle", align: "left", margin: [4, 6, 4, 6],
      },
    }))
  );
  s.addTable(rows, {
    x: MX, y: BODY_Y, w: totalW, colW, border: { type: "solid", color: C.grey, pt: 0.75 }, autoPage: false,
  });
  if (d.note) {
    s.addText(fr(d.note), {
      x: MX, y: BODY_Y + BODY_H - 0.4, w: totalW, h: 0.4, fontFace: FONT_B, fontSize: 11, italic: true, color: C.muted,
      margin: 0, isTextBox: true,
    });
  }
  void nRows;
  footer(s);
  return s;
}

function slideTimeline(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title);
  const n = d.items.length;
  const rowH = BODY_H / n;
  const xLine = MX + 2.35;
  s.addShape("line", { x: xLine, y: BODY_Y + 0.25, w: 0, h: rowH * (n - 1) + 0.1, line: { color: C.rose, width: 3 } });
  d.items.forEach((it, i) => {
    const y = BODY_Y + i * rowH;
    s.addText(fr(it.date), {
      x: MX, y, w: 2.1, h: rowH, fontFace: FONT_T, fontSize: 14, bold: true, color: C.terra, valign: "top",
      margin: 0, isTextBox: true, paraSpaceBefore: 2,
    });
    s.addShape("ellipse", { x: xLine - 0.16, y: y + 0.1, w: 0.32, h: 0.32, fill: { color: C.terra }, line: { color: C.white, width: 2 } });
    const size = fitSize([it.text], W - MX - xLine - 0.5, rowH - 0.1, [14, 13, 12, 11, 10]);
    s.addText(fr(it.text), {
      x: xLine + 0.4, y, w: W - MX - xLine - 0.4, h: rowH, fontFace: FONT_B, fontSize: size, color: C.text, valign: "top",
      margin: 0, isTextBox: true, paraSpaceBefore: 2,
    });
  });
  footer(s);
  return s;
}

function slideExercise(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title, { w: W - 2 * MX - 3.9 });
  pill(s, "CAS PRATIQUE " + d.num, W - MX - 3.6, 0.5, C.green, 1.9);
  pill(s, d.time, W - MX - 1.5, 0.5, C.terra, 1.5);
  // contexte
  const ctxSize = fitSize([d.context], W - 2 * MX - 0.5, 1.3, [15, 14, 13, 12, 11]);
  const ctxLines = estLines([d.context], W - 2 * MX - 0.5, ctxSize);
  const ctxH = Math.max(0.8, Math.min(1.7, (ctxLines * ctxSize * 1.25) / 72 + 0.4));
  s.addShape("roundRect", { x: MX, y: BODY_Y, w: W - 2 * MX, h: ctxH, fill: { color: C.greenSoft }, line: { color: C.greenSoft }, rectRadius: 0.12 });
  s.addText(fr(d.context), {
    x: MX + 0.25, y: BODY_Y, w: W - 2 * MX - 0.5, h: ctxH, fontFace: FONT_B, fontSize: ctxSize, color: C.text,
    valign: "middle", margin: 0, isTextBox: true,
  });
  // questions
  const qy = BODY_Y + ctxH + 0.3;
  const qh = BODY_H - ctxH - 0.3;
  const n = d.questions.length;
  const rowH = qh / n;
  d.questions.forEach((q, i) => {
    const y = qy + i * rowH;
    circleNum(s, i + 1, MX, y + 0.05, 0.42, C.green, 12);
    const size = fitSize([q], W - 2 * MX - 0.7, rowH - 0.1, [17, 16, 15, 14, 13, 12, 11]);
    s.addText(fr(q), {
      x: MX + 0.65, y, w: W - 2 * MX - 0.65, h: rowH, fontFace: FONT_B, fontSize: size, color: C.text, valign: "top",
      margin: 0, isTextBox: true, paraSpaceBefore: 3,
    });
  });
  footer(s);
  return s;
}

function slideSolution(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title, { w: W - 2 * MX - 2.2 });
  pill(s, "CORRIGÉ", W - MX - 1.9, 0.5, C.green, 1.9);
  const n = d.items.length;
  const gap = 0.18;
  const rowH = (BODY_H - gap * (n - 1)) / n;
  d.items.forEach((it, i) => {
    const y = BODY_Y + i * (rowH + gap);
    s.addShape("roundRect", { x: MX, y, w: W - 2 * MX, h: rowH, fill: { color: C.cream }, line: { color: C.cream }, rectRadius: 0.1 });
    circleNum(s, i + 1, MX + 0.15, y + 0.15, 0.42, C.green, 12);
    s.addText(fr(it.q), {
      x: MX + 0.7, y: y + 0.08, w: 2.3, h: rowH - 0.16, fontFace: FONT_T, fontSize: 14, bold: true, color: C.green,
      valign: "top", margin: 0, isTextBox: true, paraSpaceBefore: 4,
    });
    const tw = W - 2 * MX - 3.3;
    const size = fitSize([it.a], tw, rowH - 0.2, [15, 14, 13, 12.5, 12, 11.5, 11, 10.5, 10]);
    s.addText(fr(it.a), {
      x: MX + 3.1, y: y + 0.08, w: tw, h: rowH - 0.16, fontFace: FONT_B, fontSize: size, color: C.text,
      valign: "top", margin: 0, isTextBox: true, paraSpaceBefore: 4, lineSpacingMultiple: 1.05,
    });
  });
  footer(s);
  return s;
}

function slideQuiz(pres, d) {
  // diapositive des questions
  const s = pres.addSlide();
  s.background = { color: C.peach };
  title(s, d.title, { w: W - 2 * MX - 2.2 });
  pill(s, "QUIZ " + d.num, W - MX - 1.9, 0.5, C.terra, 1.9);
  const n = d.questions.length;
  const gap = 0.15;
  const rowH = (BODY_H - gap * (n - 1)) / n;
  const letters = ["A", "B", "C", "D"];
  d.questions.forEach((q, i) => {
    const y = BODY_Y + i * (rowH + gap);
    s.addShape("roundRect", { x: MX, y, w: W - 2 * MX, h: rowH, fill: { color: C.white }, line: { color: C.white }, rectRadius: 0.1 });
    circleNum(s, i + 1, MX + 0.15, y + 0.13, 0.42, C.terra, 12);
    const qW = W - 2 * MX - 0.9;
    const qSize = fitSize([q.q], qW, rowH * 0.45, [14, 13, 12, 11, 10.5]);
    const qLines = estLines([q.q], qW, qSize);
    const qH = Math.min(rowH * 0.55, (qLines * qSize * 1.2) / 72 + 0.12);
    s.addText(fr(q.q), {
      x: MX + 0.7, y: y + 0.08, w: qW, h: qH, fontFace: FONT_B, fontSize: qSize, bold: true, color: C.ink, valign: "top",
      margin: 0, isTextBox: true,
    });
    const oy = y + qH + 0.12;
    const oh = rowH - qH - 0.2;
    const ow = (qW - 0.2 * (q.options.length - 1)) / q.options.length;
    q.options.forEach((o, k) => {
      const ox = MX + 0.7 + k * (ow + 0.2);
      const oSize = fitSize([o], ow - 0.55, oh - 0.05, [12, 11, 10.5, 10, 9.5, 9], 1.1, 0);
      s.addShape("roundRect", { x: ox, y: oy, w: ow, h: oh, fill: { color: C.cream }, line: { color: C.rose, width: 0.75 }, rectRadius: 0.08 });
      s.addText(letters[k], {
        x: ox + 0.08, y: oy, w: 0.35, h: oh, fontFace: FONT_T, fontSize: 13, bold: true, color: C.terra, valign: "middle",
        margin: 0, isTextBox: true,
      });
      s.addText(fr(o), {
        x: ox + 0.42, y: oy, w: ow - 0.5, h: oh, fontFace: FONT_B, fontSize: oSize, color: C.text, valign: "middle",
        margin: 0, isTextBox: true,
      });
    });
  });
  footer(s);

  // diapositive des réponses
  const r = pres.addSlide();
  r.background = { color: C.white };
  title(r, d.title.replace("Quiz", "Réponses du quiz"), { w: W - 2 * MX - 2.2 });
  pill(r, "RÉPONSES", W - MX - 1.9, 0.5, C.terra, 1.9);
  const rowH2 = (BODY_H - gap * (n - 1)) / n;
  d.questions.forEach((q, i) => {
    const y = BODY_Y + i * (rowH2 + gap);
    r.addShape("roundRect", { x: MX, y, w: W - 2 * MX, h: rowH2, fill: { color: C.cream }, line: { color: C.cream }, rectRadius: 0.1 });
    circleNum(r, i + 1, MX + 0.15, y + 0.13, 0.42, C.terra, 12);
    const label = letters[q.answer] + " · " + fr(q.options[q.answer]);
    const size = fitSize([label, q.why], W - 2 * MX - 0.9, rowH2 - 0.16, [14, 13, 12.5, 12, 11.5, 11, 10.5, 10]);
    r.addText([
      { text: label, options: { bold: true, color: C.terra, breakLine: true, paraSpaceAfter: 3 } },
      { text: fr(q.why), options: { color: C.text } },
    ], {
      x: MX + 0.7, y: y + 0.06, w: W - 2 * MX - 0.9, h: rowH2 - 0.12, fontFace: FONT_B, fontSize: size,
      valign: "middle", margin: 0, isTextBox: true,
    });
  });
  footer(r);
  return [s, r];
}

function slideTrueFalse(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.peach };
  title(s, d.title, { w: W - 2 * MX - 2.2 });
  pill(s, d.num === 99 ? "QUIZ FINAL" : "QUIZ", W - MX - 1.9, 0.5, C.terra, 1.9);
  const n = d.items.length;
  const gap = 0.1;
  const rowH = (BODY_H - gap * (n - 1)) / n;
  d.items.forEach((it, i) => {
    const y = BODY_Y + i * (rowH + gap);
    s.addShape("roundRect", { x: MX, y, w: W - 2 * MX - 1.95, h: rowH, fill: { color: C.white }, line: { color: C.white }, rectRadius: 0.08 });
    circleNum(s, i + 1, MX + 0.12, y + rowH / 2 - 0.19, 0.38, C.terra, 11);
    const size = fitSize([it.s], W - 2 * MX - 2.75, rowH - 0.06, [14, 13, 12.5, 12, 11.5, 11, 10.5, 10], 1.1, 0);
    s.addText(fr(it.s), {
      x: MX + 0.62, y, w: W - 2 * MX - 2.65, h: rowH, fontFace: FONT_B, fontSize: size, color: C.text, valign: "middle",
      margin: 0, isTextBox: true,
    });
    ["VRAI", "FAUX"].forEach((lab, k) => {
      const bx = W - MX - 1.8 + k * 0.92;
      s.addShape("roundRect", { x: bx, y: y + 0.06, w: 0.85, h: rowH - 0.12, fill: { color: C.cream }, line: { color: C.rose, width: 0.75 }, rectRadius: 0.08 });
      s.addText(lab, {
        x: bx, y: y + 0.06, w: 0.85, h: rowH - 0.12, fontFace: FONT_T, fontSize: 11, bold: true, color: C.ink,
        align: "center", valign: "middle", margin: 0, isTextBox: true,
      });
    });
  });
  footer(s);

  const r = pres.addSlide();
  r.background = { color: C.white };
  title(r, "Réponses : " + d.title.replace(/ : .*$/, "").replace("Quiz", "quiz"), { w: W - 2 * MX - 2.2 });
  pill(r, "RÉPONSES", W - MX - 1.9, 0.5, C.terra, 1.9);
  d.items.forEach((it, i) => {
    const y = BODY_Y + i * (rowH + gap);
    r.addShape("roundRect", { x: MX, y, w: W - 2 * MX, h: rowH, fill: { color: C.cream }, line: { color: C.cream }, rectRadius: 0.08 });
    circleNum(r, i + 1, MX + 0.12, y + rowH / 2 - 0.19, 0.38, C.terra, 11);
    const isTrue = it.answer === "VRAI";
    r.addShape("roundRect", { x: MX + 0.62, y: y + 0.08, w: 0.85, h: rowH - 0.16, fill: { color: isTrue ? C.green : C.terra }, line: { color: isTrue ? C.green : C.terra }, rectRadius: 0.08 });
    r.addText(it.answer, {
      x: MX + 0.62, y: y + 0.08, w: 0.85, h: rowH - 0.16, fontFace: FONT_T, fontSize: 11, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0, isTextBox: true,
    });
    const tw = W - 2 * MX - 1.8;
    const size = fitSize([it.why], tw, rowH - 0.1, [13, 12, 11.5, 11, 10.5, 10, 9.5], 1.1, 0);
    r.addText(fr(it.why), {
      x: MX + 1.65, y, w: tw, h: rowH, fontFace: FONT_B, fontSize: size, color: C.text, valign: "middle",
      margin: 0, isTextBox: true,
    });
  });
  footer(r);
  return [s, r];
}

function slideKeypoints(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title);
  const n = d.points.length;
  const cols = 2;
  const rowsN = Math.ceil(n / cols);
  const gap = 0.22;
  const cw = (W - 2 * MX - 0.4) / cols;
  const ch = (BODY_H - gap * (rowsN - 1)) / rowsN;
  d.points.forEach((p, i) => {
    const col = Math.floor(i / rowsN);
    const row = i % rowsN;
    const x = MX + col * (cw + 0.4);
    const y = BODY_Y + row * (ch + gap);
    s.addShape("roundRect", { x, y, w: cw, h: ch, fill: { color: C.cream }, line: { color: C.cream }, rectRadius: 0.1 });
    circleNum(s, i + 1, x + 0.15, y + ch / 2 - 0.21, 0.42, C.terra, 12);
    const size = fitSize([p], cw - 0.95, ch - 0.1, [13.5, 13, 12, 11.5, 11, 10.5]);
    s.addText(fr(p), {
      x: x + 0.72, y, w: cw - 0.9, h: ch, fontFace: FONT_B, fontSize: size, color: C.text, valign: "middle",
      margin: 0, isTextBox: true,
    });
  });
  footer(s);
  return s;
}

function slideSources(pres, d) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  title(s, d.title);
  bulletBox(s, d.items, MX, BODY_Y, W - 2 * MX, BODY_H, { size: fitSize(d.items, W - 2 * MX - 0.4, BODY_H, [13, 12, 11.5, 11, 10.5, 10]) });
  footer(s);
  return s;
}

const RENDER = {
  title: slideTitle,
  closing: slideClosing,
  section: slideSection,
  agenda: slideAgenda,
  bullets: slideBullets,
  cards: slideCards,
  stats: slideStats,
  table: slideTable,
  timeline: slideTimeline,
  exercise: slideExercise,
  solution: slideSolution,
  quiz: slideQuiz,
  truefalse: slideTrueFalse,
  keypoints: slideKeypoints,
  sources: slideSources,
};

// ---------------------------------------------------------------- génération
async function main() {
  const outDir = process.argv[2] || path.join(__dirname, "..", "livrables");
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.author = "Formation paie";
  pres.title = "Actualité paie juin – septembre 2026";
  pres.lang = "fr-FR";

  for (const d of SLIDES) {
    const fn = RENDER[d.kind];
    if (!fn) throw new Error("Gabarit inconnu : " + d.kind);
    const made = fn(pres, d);
    const slides = Array.isArray(made) ? made : [made];
    if (d.notes) slides[0].addNotes(d.notes);
    if (slides.length > 1) slides[1].addNotes("Réponses commentées. " + (d.notes || ""));
  }

  const file = path.join(outDir, "ACTUALITE_PAIE_JUIN_SEPTEMBRE_2026.pptx");
  await pres.writeFile({ fileName: file });
  console.log("Écrit : " + file + " (" + slideNo + " diapositives)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
