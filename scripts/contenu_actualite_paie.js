// -*- coding: utf-8 -*-
/*
 * Contenu pédagogique de la journée "Actualité paie juin – septembre 2026".
 *
 * Chaque entrée décrit une diapositive. Le champ `kind` détermine le gabarit
 * utilisé par scripts/generer_actualite_paie.js :
 *   title, agenda, section, bullets, cards, stats, table, timeline,
 *   exercise, solution, quiz, truefalse, keypoints, sources, closing
 * Le champ `notes` alimente le volet "Notes" de PowerPoint (commentaires de
 * l'animateur et sources).
 *
 * Situation au 12 septembre 2026. Les valeurs chiffrées sont à vérifier avant
 * chaque animation (voir README).
 */

const FOOTER = "Actualité paie · juin – septembre 2026";

const SLIDES = [
  // ---------------------------------------------------------------- ouverture
  {
    kind: "title",
    title: "Actualité paie\njuin – septembre 2026",
    subtitle: "Journée de formation des gestionnaires de paie",
    meta: "Actualité, rappels de dispositifs et épargne salariale · 6 heures · cas pratiques et quiz",
    notes:
      "Accueil des participants. Tour de table rapide : logiciel de paie utilisé, secteurs des dossiers, " +
      "attentes particulières (les noter au paperboard pour y revenir en fin de journée).\n" +
      "Annoncer le rythme : 6 séquences, un cas pratique par séquence, un quiz par séquence et un quiz " +
      "final par équipes. Les points sont comptés : l'équipe gagnante est désignée à 16h30.",
  },
  {
    kind: "cards",
    title: "Les objectifs de la journée",
    cols: 3,
    cards: [
      {
        head: "Actualiser",
        text: "Intégrer en paie toutes les mesures entrées en vigueur ou publiées entre le 1er juin et le 12 septembre 2026 : SMIC, congé de naissance, arrêts de travail, retraite, DSN, jurisprudence.",
      },
      {
        head: "Sécuriser",
        text: "Réviser les dispositifs qui génèrent le plus d'erreurs : activité partielle, rupture conventionnelle, IJSS et maintien de salaire, heures supplémentaires, télétravail.",
      },
      {
        head: "Maîtriser l'épargne salariale",
        text: "Participation, intéressement, PEE, PERECO, abondement, PPV : règles, plafonds 2026, régime social et fiscal, traduction en paie et en DSN, calendrier 2027.",
      },
    ],
    kicker: "À la fin de la journée, chaque participant repart avec une check-list de paramétrage de rentrée.",
    notes:
      "Insister sur le troisième objectif : l'épargne salariale est le fil rouge de l'après-midi parce que " +
      "2026 est une année charnière (fin du régime renforcé de la PPV au 31 décembre, obligation de partage de " +
      "la valeur dans les entreprises de 11 à 49 salariés, projet de déblocage exceptionnel).",
  },
  {
    kind: "agenda",
    title: "Le programme",
    rows: [
      ["09h00", "Accueil et quiz d'ouverture"],
      ["09h20", "Séquence 1 – Le SMIC de juin et ses effets en cascade"],
      ["10h15", "Pause"],
      ["10h30", "Séquence 2 – Absences, famille, retraite : ce qui change"],
      ["11h20", "Séquence 3 – Cotisations, DSN et contrôle : la rentrée"],
      ["12h15", "Déjeuner"],
      ["13h30", "Séquence 4 – L'été des juges : jurisprudence et ruptures"],
      ["14h30", "Pause"],
      ["14h45", "Séquence 5 – L'épargne salariale de A à Z"],
      ["16h05", "Séquence 6 – Agenda de rentrée, quiz final et évaluation"],
      ["16h30", "Fin de la journée"],
    ],
    notes:
      "Durée de formation effective : 6 heures (hors pauses et déjeuner). Le programme est indicatif : " +
      "la séquence 5 est la plus longue (1h20), ne pas la compresser.\n" +
      "Chaque séquence se termine par un quiz de 3 à 5 questions : compter les points par équipe.",
  },
  {
    kind: "truefalse",
    title: "Quiz d'ouverture : vrai ou faux ?",
    num: 0,
    items: [
      {
        s: "Le SMIC horaire brut est de 12,31 € depuis le 1er juin 2026.",
        answer: "VRAI",
        why: "Revalorisation automatique de 2,41 % (arrêté du 22 mai 2026) : 12,31 € de l'heure, 1 867,02 € par mois pour 151,67 h.",
      },
      {
        s: "La hausse du SMIC de juin a relevé le plancher de l'allocation d'activité partielle remboursée à l'employeur.",
        answer: "FAUX",
        why: "Le plancher de l'allocation reste gelé à 8,57 € (9,52 € en APLD). Seul le plancher de l'indemnité versée au salarié suit le SMIC net (9,74 €).",
      },
      {
        s: "La contribution patronale sur l'indemnité de rupture conventionnelle est de 30 %.",
        answer: "FAUX",
        why: "Elle est passée à 40 % pour les ruptures intervenues depuis le 1er janvier 2026 (LFSS 2026).",
      },
      {
        s: "Un salarié en télétravail a droit aux titres-restaurant dans les mêmes conditions que ses collègues sur site.",
        answer: "VRAI",
        why: "Cass. soc. 8 octobre 2025 : les télétravailleurs bénéficient des mêmes droits, dès lors que la journée comprend une pause repas.",
      },
      {
        s: "Une PPV versée en 2026 par une entreprise de 40 salariés à un salarié payé 2 SMIC est exonérée d'impôt sur le revenu.",
        answer: "VRAI",
        why: "Régime renforcé des entreprises de moins de 50 salariés (rémunération < 3 SMIC) : exonération de CSG-CRDS et d'IR jusqu'au 31 décembre 2026.",
      },
    ],
    notes:
      "Quiz d'échauffement en équipes, réponses à main levée. Ne pas commenter longuement : chaque affirmation " +
      "sera reprise dans la journée. Noter au tableau les scores.",
  },

  // ---------------------------------------------------------------- séquence 1
  {
    kind: "section",
    num: "01",
    title: "Le SMIC de juin et ses effets en cascade",
    subtitle: "Ce qui a changé sur le bulletin de juin 2026 et ce qui n'a pas bougé",
    duration: "55 min · 1 cas pratique · 1 quiz",
    notes: "Séquence 1 : 09h20 – 10h15.",
  },
  {
    kind: "stats",
    title: "SMIC au 1er juin 2026 : les chiffres",
    stats: [
      { value: "12,31 €", label: "SMIC horaire brut (+ 2,41 %)" },
      { value: "1 867,02 €", label: "SMIC mensuel brut pour 151,67 h" },
      { value: "≈ 9,74 €", label: "SMIC horaire net (≈ 1 477 € nets par mois)" },
      { value: "4,35 €", label: "Minimum garanti (4,25 € auparavant)" },
    ],
    bullets: [
      "Revalorisation automatique déclenchée par l'inflation (art. L. 3231-4 C. trav.) : arrêté du 22 mai 2026, JO du 24 mai 2026.",
      "Deuxième revalorisation de l'année après celle du 1er janvier 2026 (12,02 €) : le bulletin de juin doit être calculé au nouveau taux dès la première heure du mois.",
      "Mayotte : SMIC spécifique revalorisé dans la même proportion.",
    ],
    notes:
      "Sources : Urssaf.fr « Le Smic et le minimum garanti augmentent au 1er juin 2026 » ; Prism'emploi ; " +
      "Centre Inffo. SMIC net indicatif hors mutuelle et prélèvement à la source.\n" +
      "Question à poser : « Qui a dû corriger des salaires en juin ? » Enchaîner sur les effets en cascade.",
  },
  {
    kind: "table",
    title: "Les effets en cascade sur le bulletin",
    header: ["Poste", "Avant le 1er juin", "Depuis le 1er juin", "Réflexe paie"],
    colW: [2.6, 2.3, 2.6, 4.6],
    rows: [
      ["Salaire de base au SMIC", "1 823,03 €", "1 867,02 €", "Vérifier tous les salaires proches du SMIC : seuls les éléments « contrepartie du travail » entrent dans l'assiette"],
      ["Minima conventionnels", "Grilles de branche", "Rattrapés par le SMIC", "Complément différentiel jusqu'au nouvel avenant de salaires"],
      ["Apprentis : seuil d'exonération salariale (50 % SMIC)", "911,52 €", "933,51 €", "Contrats conclus depuis le 1er mars 2025 : cotisations salariales et CSG-CRDS au-delà du seuil"],
      ["Activité partielle : indemnité salarié (plancher / plafond)", "9,52 € / 32,45 €", "9,74 € / 33,24 €", "Le plancher de l'allocation employeur reste à 8,57 €"],
      ["IJSS maladie : salaire plafonné à 1,4 SMIC", "2 552,24 €", "2 613,83 €", "IJ maximale 42,97 € pour les arrêts débutant à compter du 1er juillet 2026"],
      ["RGDU : SMIC de référence", "SMIC au 1er janvier", "Inchangé (décret du 12 juin 2026)", "Ne pas modifier le paramètre SMIC de la réduction générale"],
      ["Gratification de stage", "4,50 € / h", "4,50 € / h", "Indexée sur le plafond horaire de la Sécurité sociale, pas sur le SMIC"],
    ],
    notes:
      "Le tableau est le cœur de la séquence : chaque ligne est un point de contrôle du bulletin de juin.\n" +
      "Assiette du SMIC : exclure les majorations d'heures supplémentaires, la prime d'ancienneté, les primes " +
      "d'assiduité non liées au travail effectué, les remboursements de frais et les sommes versées au titre de " +
      "l'épargne salariale.\n" +
      "Sources : compta-online (apprentis, seuil 933,51 €) ; Éditions Tissot et LégiSocial (activité partielle 1er juin 2026) ; " +
      "LégiSocial « Revalorisation des IJSS maladie au 1er juillet 2026 » ; MaPaye (gel du SMIC RGDU, décret du 12 juin 2026).",
  },
  {
    kind: "bullets",
    title: "RGDU 2026 : rappel des paramètres",
    bullets: [
      "Depuis le 1er janvier 2026, une seule réduction dégressive remplace la réduction générale et les « bandeaux » maladie et famille (LFSS 2025, décrets n° 2025-887 du 4 septembre 2025 et n° 2025-1446 du 31 décembre 2025).",
      "Point de sortie : 3 SMIC annuels. La réduction est maximale au SMIC et diminue progressivement ; entre le SMIC et 3 SMIC, le coefficient ne descend jamais sous Tmin = 2 %.",
      "Coefficient maximal : 0,3981 (FNAL 0,10 %) ou 0,4021 (FNAL 0,50 %), soit Tdelta = 0,3781 / 0,3821.",
      "SMIC de référence de l'année : le SMIC en vigueur au 1er janvier 2026 (12,02 €). La hausse de juin ne modifie pas le calcul (gel confirmé par décret du 12 juin 2026).",
      "La PPV est intégrée à la rémunération prise en compte depuis 2025 : une prime versée en fin d'année réduit la RGDU annuelle.",
    ],
    side: {
      heading: "La formule",
      lines: [
        "C = Tmin + Tdelta × [0,5 × (3 × SMIC ÷ Rémunération − 1)]^1,75",
        "Tmin = 0,0200",
        "Tdelta = 0,3781 (FNAL 0,10 %)",
        "Tdelta = 0,3821 (FNAL 0,50 %)",
        "Calcul annuel avec régularisation progressive",
      ],
    },
    notes:
      "Ne pas refaire tout le cours sur la RGDU : l'objectif est de lever le doute sur le SMIC de référence après " +
      "la revalorisation de juin. Le logiciel de paie doit conserver le SMIC du 1er janvier pour la RGDU alors qu'il " +
      "applique le nouveau SMIC pour le salaire, les apprentis et l'activité partielle.\n" +
      "Sources : Urssaf.fr « Point sur l'application de la RGDU en 2026 » ; linc.fr ; MaPaye (décret du 12 juin 2026).",
  },
  {
    kind: "exercise",
    num: 1,
    title: "Cas pratique 1 : le bulletin de juin",
    time: "20 min",
    context:
      "La SARL Horizon (25 salariés, FNAL 0,10 %) vous confie sa paie de juin 2026. Vous devez vérifier trois bulletins.",
    questions: [
      "Karim, employé à temps plein (151,67 h), salaire de base 1 850 € brut en mai. Que devez-vous faire sur le bulletin de juin ?",
      "Léa, 21 ans, apprentie en 2e année, contrat signé le 1er septembre 2025 : calculez son salaire brut de juin et la part soumise aux cotisations salariales.",
      "Karim est placé en activité partielle 20 heures en juin. Calculez l'indemnité qui lui est due et l'allocation remboursée à l'entreprise.",
      "Le responsable paie veut « mettre à jour le SMIC de la RGDU au 1er juin ». Que lui répondez-vous ?",
    ],
    notes:
      "Faire travailler en binômes 12 minutes, restitution 8 minutes. Barème de rémunération des apprentis (contrats " +
      "conclus depuis 2019) : 21-25 ans, 2e année = 61 % du SMIC.",
  },
  {
    kind: "solution",
    title: "Corrigé du cas pratique 1",
    items: [
      { q: "Karim", a: "1 850 € < 1 867,02 € : complément de 17,02 € brut (ligne « complément SMIC » ou revalorisation du salaire de base) dès la paie de juin. Vérifier que les éléments retenus dans l'assiette sont bien des contreparties du travail." },
      { q: "Léa", a: "61 % × 1 867,02 € = 1 138,88 € brut. Seuil d'exonération : 50 % × 1 867,02 € = 933,51 €. Cotisations salariales et CSG-CRDS sur 205,37 € (contrat conclu après le 1er mars 2025)." },
      { q: "Activité partielle", a: "Taux horaire brut 12,31 €. Indemnité : 60 % × 12,31 = 7,39 € < plancher 9,74 € → 20 h × 9,74 = 194,80 €. Allocation : 36 % × 12,31 = 4,43 € < plancher 8,57 € → 20 h × 8,57 = 171,40 €. Reste à charge : 23,40 €." },
      { q: "RGDU", a: "Non : le SMIC de référence de la RGDU est celui du 1er janvier 2026 (12,02 €), gelé pour toute l'année par le décret du 12 juin 2026. Modifier le paramètre majorerait la réduction à tort." },
    ],
    notes:
      "Point de vigilance sur la question 3 : l'indemnité d'activité partielle est un revenu de remplacement (CSG 6,2 %, " +
      "CRDS 0,5 % après abattement de 1,75 %), pas un salaire. Elle est exonérée de cotisations.",
  },
  {
    kind: "quiz",
    num: 1,
    title: "Quiz 1 : le SMIC et ses effets",
    questions: [
      {
        q: "Quel montant retient-on comme salaire journalier de base maximal pour une IJSS maladie d'un arrêt débutant le 10 juillet 2026 ?",
        options: ["1 867,02 € par mois", "2 613,83 € par mois (1,4 SMIC)", "3 734,04 € par mois (2 SMIC)"],
        answer: 1,
        why: "Plafond de 1,4 SMIC depuis le 1er avril 2025, soit 2 613,83 € avec le SMIC de juin : IJ maximale 42,97 €.",
      },
      {
        q: "La gratification minimale d'un stagiaire a-t-elle augmenté le 1er juin 2026 ?",
        options: ["Oui, elle suit le SMIC", "Non, elle est fixée à 15 % du plafond horaire de la Sécurité sociale (4,50 €)", "Oui, elle passe à 4,35 €"],
        answer: 1,
        why: "4,50 € par heure depuis le 1er janvier 2026 (plafond horaire 30 €). Le minimum garanti de 4,35 € sert aux avantages en nature nourriture, pas aux stagiaires.",
      },
      {
        q: "Une prime d'ancienneté de 80 € permet-elle de considérer qu'un salaire de base de 1 800 € respecte le SMIC en juin 2026 ?",
        options: ["Oui, tout élément brut compte", "Non, la prime d'ancienneté est exclue de l'assiette du SMIC", "Oui si elle est mensuelle"],
        answer: 1,
        why: "La prime d'ancienneté récompense la fidélité, pas le travail effectué : elle est exclue. Il manque 67,02 €.",
      },
    ],
    notes: "Quiz par équipes, 30 secondes par question. Compter 1 point par bonne réponse.",
  },

  // ---------------------------------------------------------------- séquence 2
  {
    kind: "section",
    num: "02",
    title: "Absences, famille, retraite : ce qui change",
    subtitle: "Congé supplémentaire de naissance, arrêts de travail au 1er septembre, suspension de la réforme des retraites",
    duration: "50 min · 1 quiz",
    notes: "Séquence 2 : 10h30 – 11h20.",
  },
  {
    kind: "cards",
    title: "Le congé supplémentaire de naissance : le dispositif",
    cols: 3,
    cards: [
      { head: "Qui ?", text: "Chaque parent salarié (mère, père, conjoint, partenaire, concubin) pour un enfant né ou adopté à compter du 1er janvier 2026. Condition : 6 mois d'affiliation à la date du congé." },
      { head: "Quand ?", text: "Dans les 9 mois suivant la naissance ou l'arrivée de l'enfant, après le congé de maternité, de paternité ou d'adoption. Demandes ouvertes depuis le 15 juin, premiers congés depuis le 1er juillet 2026." },
      { head: "Combien de temps ?", text: "1 ou 2 mois au choix du salarié, fractionnables en deux périodes d'un mois. Les deux parents peuvent le prendre simultanément ou successivement." },
      { head: "Formalités", text: "Information de l'employeur au moins 1 mois avant le début du congé (dates et durée). L'employeur ne peut pas refuser ni reporter le congé." },
      { head: "Textes", text: "LFSS 2026, art. 99 (loi n° 2025-1403 du 30 décembre 2025) ; art. L. 1225-46-2 C. trav. et L. 331-8-1 CSS ; décrets n° 2026-419 et n° 2026-425 du 30 mai 2026." },
      { head: "Pendant le congé", text: "Contrat suspendu : aucune autre activité professionnelle possible. Pas d'obligation légale de maintien de salaire pour l'employeur (sauf convention ou accord)." },
    ],
    notes:
      "Sources : ameli.fr (assurés et entreprises), Code du travail numérique, décrets du 30 mai 2026 sur Légifrance, " +
      "LégiSocial « Comment déclarer le nouveau congé supplémentaire de naissance en DSN ».\n" +
      "L'entrée en vigueur juridique était le 1er juin 2026 ; la mise en œuvre opérationnelle par l'Assurance maladie a été " +
      "fixée au 1er juillet 2026.",
  },
  {
    kind: "bullets",
    title: "Congé supplémentaire de naissance : indemnisation et paie",
    bullets: [
      "Indemnité journalière versée par la CPAM : 70 % du salaire net le 1er mois, 60 % le 2e mois, dans la limite du plafond de la Sécurité sociale.",
      "Montants maximaux 2026 : 72,81 € par jour le 1er mois, 62,41 € par jour le 2e mois.",
      "Aucun maintien de salaire imposé par la loi : vérifier la convention collective et les accords d'entreprise (certaines branches assimilent le congé au congé de paternité).",
      "Subrogation possible : l'employeur perçoit les IJ et les reverse ; à défaut, absence non rémunérée sur le bulletin et IJ versées directement au salarié.",
      "DSN : signalement d'arrêt de travail avec le motif « 20 – congé supplémentaire de naissance » (bloc S21.G00.60), comme pour un congé de paternité.",
      "Droits du salarié : ancienneté conservée, protection contre le licenciement pendant le congé ; pour les congés payés, appliquer la règle retenue pour le congé de paternité (art. L. 3141-5) et documenter la position retenue.",
    ],
    side: {
      heading: "Exemple",
      lines: [
        "Salaire net 2 400 € par mois",
        "1er mois : 70 % → 1 680 € (56 € par jour)",
        "2e mois : 60 % → 1 440 € (48 € par jour)",
        "Sous les plafonds de 72,81 € et 62,41 € par jour",
      ],
    },
    notes:
      "Sources : ameli.fr « Congé supplémentaire de naissance : vos indemnités journalières » ; net-entreprises fiche DSN " +
      "« Congé supplémentaire de naissance en DSN » ; Éditions Tissot « Congé supplémentaire de naissance : les réponses d'Ameli ».\n" +
      "Point d'attention : la position sur l'acquisition des congés payés n'était pas encore commentée par le BOSS au " +
      "12 septembre 2026. Le réflexe prudent est l'assimilation à du travail effectif, comme pour le congé de paternité.",
  },
  {
    kind: "bullets",
    title: "Arrêts de travail : les nouvelles règles du 1er septembre 2026",
    bullets: [
      "Durée maximale de prescription (décret n° 2026-498 du 12 juin 2026) : 31 jours pour l'arrêt initial, 62 jours pour chaque prolongation, sauf justification médicale expresse.",
      "Le prescripteur doit renseigner les éléments médicaux et les motifs de l'arrêt : un arrêt non conforme peut être refusé par la CPAM.",
      "Téléconsultation (loi n° 2026-534 du 25 juin 2026 relative à la lutte contre les fraudes) : arrêt ou premier renouvellement limité à 3 jours, pas de renouvellement ultérieur à distance.",
      "Formulaire d'arrêt papier sécurisé obligatoire depuis le 1er juillet 2025 : refuser les photocopies et impressions.",
      "Conséquence paie : si la CPAM refuse les IJ, le maintien de salaire conventionnel calculé « sous déduction des IJ » doit être recalculé ; en subrogation, l'employeur ne perçoit rien.",
      "Échanges d'informations élargis entre CPAM, employeurs et organismes complémentaires pour lutter contre les arrêts frauduleux.",
    ],
    notes:
      "Sources : ameli.fr « Arrêts de travail pour maladie : ce qui change au 1er septembre 2026 » ; Code du travail numérique ; " +
      "LégiSocial « Loi contre les fraudes sociales et fiscales : les principales mesures RH et paie ».\n" +
      "Question fréquente : un arrêt de 45 jours prescrit le 5 septembre est-il valable ? Oui si le médecin a justifié " +
      "la durée ; sinon la CPAM peut réduire ou refuser l'indemnisation.",
  },
  {
    kind: "table",
    title: "Rappel : IJSS maladie et maintien de salaire en 2026",
    header: ["Élément", "Règle", "Chiffres 2026"],
    colW: [3.2, 5.6, 3.3],
    rows: [
      ["Délai de carence Sécurité sociale", "3 jours calendaires par arrêt", "IJ à partir du 4e jour"],
      ["Montant de l'IJ", "50 % du salaire journalier de base (3 derniers mois ÷ 91,25)", "Salaire plafonné à 1,4 SMIC : 2 613,83 € par mois"],
      ["IJ maximale", "Arrêts débutant à compter du 1er juillet 2026", "42,97 € brut par jour"],
      ["Maintien légal (art. L. 1226-1)", "1 an d'ancienneté ; carence de 7 jours ; 90 % puis 66,66 % du brut, 30 jours chacun, + 10 jours par tranche de 5 ans (max. 90 jours)", "Déduction des IJ brutes"],
      ["Subrogation", "L'employeur perçoit les IJ et maintient le net ; mention obligatoire sur l'attestation de salaire", "Régularisation dès réception du décompte CPAM"],
      ["CSG-CRDS sur les IJ", "Précomptées par la CPAM : 6,2 % + 0,5 %", "IJ nette ≈ 39,09 €"],
      ["Annonce PLFSS 2027", "Plafond des IJ ramené à 1,8 SMIC et fiscalisation des IJ AT/MP (annonce du 29 août 2026, à confirmer)", "Cible : 1er novembre 2026"],
    ],
    notes:
      "Sources : compta-online « Calcul des IJSS maladie 2026 » ; LégiSocial ; LégiFiscal « Budget 2027 : Sébastien Lecornu esquisse un PLF 2027 ».\n" +
      "Le plafond de 1,4 SMIC s'applique aux arrêts maladie ; les IJ maternité, paternité et AT/MP conservent leurs propres plafonds.",
  },
  {
    kind: "bullets",
    title: "Retraite : ce qui change au 1er septembre 2026",
    bullets: [
      "Suspension de la réforme de 2023 (LFSS 2026, art. 105) du 1er septembre 2026 au 1er janvier 2028 : le relèvement de l'âge légal et de la durée d'assurance est gelé.",
      "Générations 1964 et 1er trimestre 1965 : âge légal figé à 62 ans et 9 mois, 170 trimestres. Générations avril-décembre 1965 : 63 ans. Générations 1966 à 1968 : recul uniforme de 3 mois par rapport au calendrier de 2023.",
      "Générations 1969 et suivantes : 64 ans et 172 trimestres, sauf nouvelle loi d'ici 2028.",
      "Carrières longues : jusqu'à 2 trimestres de majoration pour enfants (maternité, éducation, adoption) comptés comme cotisés pour les pensions prenant effet à compter du 1er septembre 2026 (décret n° 2026-700 du 29 juillet 2026).",
      "En paie : recalculer les dates prévisionnelles de départ, la mise à la retraite d'office (70 ans) et les demandes de retraite progressive (ouverte dès 60 ans depuis le 1er septembre 2025).",
      "Rappel : le contrat de valorisation de l'expérience (CDI « senior », loi du 24 octobre 2025) est ouvert depuis le 1er janvier 2026 aux demandeurs d'emploi de 60 ans et plus.",
    ],
    notes:
      "Sources : Service-public.fr « Des changements dans les bonifications de retraite liées aux enfants » ; L'Assurance retraite ; " +
      "Previssima et altis-conseil (tableau des générations) ; LégiSocial (CVE).\n" +
      "Rappeler que la suspension ne modifie pas les cotisations : seuls les âges et durées changent.",
  },
  {
    kind: "quiz",
    num: 2,
    title: "Quiz 2 : absences et famille",
    questions: [
      {
        q: "Un salarié demande un congé supplémentaire de naissance de 2 mois pour un enfant né le 20 décembre 2025. Que répondez-vous ?",
        options: ["Accord : le congé est ouvert depuis le 1er juillet", "Refus : l'enfant est né avant le 1er janvier 2026", "Accord si la naissance était prévue à compter du 1er janvier 2026"],
        answer: 2,
        why: "Le dispositif vise les enfants nés à compter du 1er janvier 2026, ainsi que ceux nés avant mais dont la naissance était prévue à compter de cette date.",
      },
      {
        q: "Un arrêt initial de 45 jours prescrit le 15 septembre 2026 sans justification médicale de durée :",
        options: ["Est valable, la limite ne concerne que les prolongations", "Peut être refusé par la CPAM au-delà de la durée réglementaire", "Est automatiquement ramené à 31 jours par l'employeur"],
        answer: 1,
        why: "Depuis le 1er septembre 2026, l'arrêt initial est limité à 31 jours sauf justification. L'employeur n'a pas à le réduire lui-même : il applique le maintien sur la base des IJ effectivement versées.",
      },
      {
        q: "Une salariée née en novembre 1964 pourra liquider sa retraite au taux plein avec :",
        options: ["63 ans et 171 trimestres", "62 ans et 9 mois et 170 trimestres", "64 ans et 172 trimestres"],
        answer: 1,
        why: "Génération 1964 : âge et durée figés à 62 ans 9 mois et 170 trimestres pendant la suspension.",
      },
    ],
    notes: "1 point par bonne réponse. Reprendre le score cumulé avant de passer à la séquence 3.",
  },

  // ---------------------------------------------------------------- séquence 3
  {
    kind: "section",
    num: "03",
    title: "Cotisations, DSN et contrôle : la rentrée",
    subtitle: "Versement mobilité, AGS, prélèvement à la source, DSN de substitution, loi fraudes, décret procédures",
    duration: "55 min · 1 cas pratique · 1 quiz",
    notes: "Séquence 3 : 11h20 – 12h15.",
  },
  {
    kind: "table",
    title: "Cotisations : ce qui bouge à l'été 2026",
    header: ["Mesure", "Date", "Contenu", "Action paie"],
    colW: [2.5, 1.5, 4.6, 3.5],
    rows: [
      ["Versement mobilité", "1er juillet 2026", "Guingamp-Paimpol Agglomération : 0,60 % ; CC Rives de Moselle : 0,55 % (lettre-circulaire Urssaf du 29 mai 2026)", "Vérifier le taux de chaque établissement avec l'outil Urssaf par code INSEE"],
      ["Versement mobilité", "1er septembre 2026", "Poher Communauté : nouveau taux de 0,55 %", "Paramétrer avant la DSN de septembre"],
      ["Cotisation AGS", "1er juillet 2026", "Taux maintenu à 0,25 % (conseil d'administration du 23 juin 2026)", "Aucun changement"],
      ["Bonus-malus chômage", "Depuis le 1er mars 2026", "5e période de modulation ; le secteur « bois, papier, imprimerie » sort du dispositif", "Reporter le taux notifié sur le compte Urssaf"],
      ["Heures supplémentaires", "Depuis le 1er janvier 2026", "Déduction forfaitaire patronale étendue à toutes les entreprises : 0,50 € par heure (1,50 € si moins de 20 salariés)", "Contrôler le CTP dédié et l'exonération d'IR (7 500 € par an)"],
      ["Prime carburant et FMD", "2026", "Plafond carburant porté à 600 € ; cumul carburant + FMD : 600 €, 900 € avec un abonnement transports pris en charge", "Vérifier les cumuls au BOSS avant chaque versement"],
      ["Titres-restaurant", "2026", "Participation patronale exonérée jusqu'à 7,32 € par titre (50 à 60 % de la valeur)", "Un titre par jour travaillé comprenant une pause repas, télétravail inclus"],
    ],
    notes:
      "Sources : Service-public Entreprendre « Versement mobilité : les taux évoluent au 1er juillet 2026 » ; LégiSocial " +
      "« Le taux de la cotisation AGS reste fixé à 0,25 % au 1er juillet 2026 » ; Urssaf.fr « Bonus-malus : évolutions au " +
      "1er mars 2026 » ; Éditions Tissot (déduction forfaitaire heures supplémentaires) ; Village de la justice " +
      "(prime carburant 2026) ; Pluxee (titres-restaurant).\n" +
      "Le versement mobilité ne change en principe qu'au 1er janvier et au 1er juillet : la création d'un nouveau " +
      "ressort (Poher Communauté) explique la date du 1er septembre.",
  },
  {
    kind: "bullets",
    title: "Prélèvement à la source : la rentrée",
    bullets: [
      "Depuis le 1er septembre 2026, la DGFiP transmet les taux calculés sur les revenus 2025 déclarés au printemps : ils remplacent les taux fondés sur les revenus 2024.",
      "Le nouveau taux s'applique dès réception du CRM ; l'employeur dispose d'un délai maximal de 2 mois pour l'intégrer, sans jamais modifier lui-même un taux.",
      "Couples mariés ou pacsés : le taux individualisé est le taux par défaut depuis septembre 2025 ; chaque conjoint peut avoir un taux différent sur son bulletin.",
      "Absence de taux (nouvel embauché, taux non transmis) : grille du taux neutre, puis remplacement à réception du CRM nominatif.",
      "Réclamations des salariés : les renvoyer vers impots.gouv.fr ; le gestionnaire de paie ne discute ni le taux ni son mode de calcul.",
      "Épargne salariale : les sommes perçues immédiatement (intéressement, participation non placées) sont imposables et soumises au PAS ; en cas de versement par un teneur de compte, le PAS relève de PASRAU.",
    ],
    notes:
      "Sources : economie.gouv.fr « Comment gérer votre taux de prélèvement à la source » ; Actualités Paie " +
      "« PAS : nouveau taux au 1er septembre 2026 » ; net-entreprises « Participation / intéressement : modalités " +
      "d'application du PAS en PASRAU ».",
  },
  {
    kind: "timeline",
    title: "DSN de substitution : le calendrier 2026",
    items: [
      { date: "Mars 2026", text: "CRM 124 « rappel annuel » : synthèse des anomalies non corrigées de l'année (mise à disposition le 13 mars pour les déclarants du 5)." },
      { date: "Mars – mai", text: "Phase contradictoire de 2 mois : corriger dans une DSN mensuelle ou contester de façon motivée avec justificatifs." },
      { date: "Juin 2026", text: "Premières DSN de substitution émises par l'Urssaf pour les anomalies ni corrigées ni contestées : en 2026, uniquement l'assiette plafonnée (droits à retraite)." },
      { date: "Après substitution", text: "CRM post-substitution : détail des corrections et de leurs effets sur les cotisations ; l'employeur informe les salariés dont les droits sont modifiés." },
      { date: "2027", text: "Extension progressive à d'autres données (assiette brute, contributions) ; passage à la norme DSN P27 au 1er janvier 2027." },
    ],
    notes:
      "Base légale : art. L. 133-5-3-1 CSS (LFSS 2020) et décret d'application de 2023. Sources : Sage Advice « DSN de substitution 2026 », " +
      "Lefebvre Dalloz Compétences « L'Urssaf précise ses modalités d'application », Rydge « Ce qui est acté pour 2026 ».\n" +
      "Message clé : ce n'est pas l'Urssaf qui « refait la paie », c'est le déclarant qui a laissé passer deux mois sans réagir.",
  },
  {
    kind: "cards",
    title: "Loi du 25 juin 2026 contre les fraudes : 6 impacts RH et paie",
    cols: 3,
    cards: [
      { head: "Arrêts en téléconsultation", text: "Arrêt initial ou premier renouvellement limité à 3 jours ; aucun renouvellement ultérieur à distance." },
      { head: "Flagrance sociale", text: "Nouvelle procédure de constat de travail dissimulé permettant des mesures conservatoires immédiates sur les biens de l'entreprise." },
      { head: "Vigilance des donneurs d'ordre", text: "Vérifications à renouveler jusqu'à la fin du contrat de sous-traitance et documents à présenter lors des contrôles." },
      { head: "Échanges d'informations", text: "Partage facilité entre Assurance maladie, employeurs et organismes complémentaires sur les arrêts de travail suspects." },
      { head: "Formation et CPF", text: "Renforcement des contrôles et sanctions contre les fraudes à la formation professionnelle et au compte personnel de formation." },
      { head: "Traçabilité", text: "L'entreprise doit pouvoir prouver qu'une déclaration ou une vérification a été faite : conserver les attestations de vigilance et les accusés DSN." },
    ],
    kicker: "Loi n° 2026-534 du 25 juin 2026, JO du 26 juin, entrée en vigueur le 27 juin 2026 (sauf mesures renvoyant à un décret).",
    notes:
      "Sources : LégiSocial « Loi contre les fraudes sociales et fiscales : les principales mesures RH et paie » ; Service-public " +
      "Entreprendre « Mise en place d'une procédure de flagrance sociale » ; CMS Francis Lefebvre ; economie.gouv.fr.",
  },
  {
    kind: "bullets",
    title: "Contentieux : décret du 27 juillet 2026, applicable au 1er octobre",
    bullets: [
      "Décret n° 2026-683 du 27 juillet 2026 (JO du 29 juillet) : plusieurs règles de procédure évoluent pour les employeurs à compter du 1er octobre 2026, y compris pour les procédures en cours.",
      "Opposition à contrainte Urssaf ou MSA : le jugement du tribunal se substitue désormais à la contrainte et est exécutoire de plein droit à titre provisoire, même en cas d'appel.",
      "Prud'hommes : saisine, communication des pièces et médiation simplifiées ; calendrier de procédure plus strict.",
      "Saisie administrative à tiers détenteur : modalités actualisées pour le recouvrement des créances publiques.",
      "Rappel contrôle Urssaf : lettre d'observations, réponse dans les 30 jours (60 jours sur demande), mise en demeure, puis contrainte ; la charte du cotisant contrôlé est opposable.",
      "Réflexe cabinet : archiver les DSN, CRM et justificatifs pendant 3 ans (prescription des cotisations) et 5 ans en cas de travail dissimulé.",
    ],
    notes:
      "Sources : LégiSocial « Prud'hommes, Urssaf, médiation : les nouveautés au 1er octobre 2026 » ; réseaux d'expertise comptable " +
      "(Dexeris, Exaudis) « Procédures sociales : nouvelles mesures de simplification » ; cabinet Kohen (exécution forcée des créances sociales).",
  },
  {
    kind: "exercise",
    num: 2,
    title: "Cas pratique 2 : trois situations de rentrée",
    time: "20 min",
    context:
      "Vous gérez le portefeuille d'un cabinet. Pour chaque situation, indiquez la réponse à apporter au client et l'action en paie.",
    questions: [
      "Le 14 mars 2026, la SAS Verdier a reçu un CRM 124 signalant, pour deux salariés, une assiette plafonnée supérieure au brut sur 2025. Personne n'a réagi. Que s'est-il passé en juin et que faites-vous maintenant ?",
      "La SARL Delta (30 salariés) a payé 120 heures supplémentaires en août. Le gérant demande « combien la LFSS 2026 nous fait gagner ». Chiffrez la déduction et rappelez le régime salarial.",
      "Un salarié de la SA Nautic, en télétravail 3 jours par semaine, réclame ses titres-restaurant et une indemnité de télétravail. Le client refuse « parce qu'il est chez lui ». Que lui conseillez-vous ?",
    ],
    notes:
      "Restitution en plénière. Pour la question 3, faire le lien avec la séquence 4 (attestation sur l'honneur télétravail) " +
      "et les barèmes BOSS 2026 : 2,70 € par jour de télétravail dans la limite de 59,40 € par mois.",
  },
  {
    kind: "solution",
    title: "Corrigé du cas pratique 2",
    items: [
      { q: "CRM 124 ignoré", a: "Faute de correction ou de contestation avant la DSN de mai, l'Urssaf a émis en juin une DSN de substitution ramenant l'assiette plafonnée au brut. Lire le CRM post-substitution, informer les deux salariés (droits retraite), régulariser les cotisations éventuelles et mettre en place un contrôle mensuel des CRM." },
      { q: "Heures supplémentaires", a: "Entreprise de 20 à 249 salariés : 0,50 € × 120 h = 60 € de déduction patronale (1,50 € par heure en dessous de 20 salariés). Côté salarié : réduction de cotisations salariales de 11,31 % au plus et exonération d'IR dans la limite de 7 500 € nets par an ; la CSG-CRDS reste due." },
      { q: "Télétravail", a: "Titres-restaurant dus dans les mêmes conditions qu'un salarié sur site (Cass. soc. 8 octobre 2025). Frais de télétravail : allocation forfaitaire exonérée jusqu'à 2,70 € par jour, soit 32,40 € pour 12 jours dans le mois (plafond mensuel 59,40 €), ou remboursement des frais réels sur justificatifs." },
    ],
    notes:
      "Sources : Sage Advice (DSN de substitution) ; LégiSocial « Réduction loi TEPA 2026 » ; Pluxee et juritravail " +
      "(titres-restaurant et télétravail) ; Service-public « Remboursement des frais de télétravail : quel barème en 2026 ? ».",
  },
  {
    kind: "quiz",
    num: 3,
    title: "Quiz 3 : cotisations et DSN",
    questions: [
      {
        q: "À quelles dates le taux du versement mobilité peut-il changer en principe ?",
        options: ["À tout moment", "Le 1er janvier et le 1er juillet", "Le 1er janvier uniquement"],
        answer: 1,
        why: "Deux dates par an, sauf création d'un nouveau ressort (Poher Communauté au 1er septembre 2026).",
      },
      {
        q: "En 2026, la DSN de substitution porte sur :",
        options: ["Toutes les anomalies DSN", "Les anomalies d'assiette plafonnée non corrigées ni contestées", "Le prélèvement à la source"],
        answer: 1,
        why: "Périmètre limité en 2026 aux données qui affectent les droits à retraite ; extension progressive ensuite.",
      },
      {
        q: "Un taux de PAS reçu dans le CRM du 10 septembre doit être appliqué :",
        options: ["Sur la paie de septembre au plus tard", "Dans les 2 mois suivant sa mise à disposition", "Quand le salarié le demande"],
        answer: 1,
        why: "Délai maximal de 2 mois ; en pratique, la plupart des logiciels l'appliquent dès la paie suivante.",
      },
      {
        q: "À partir du 1er octobre 2026, en cas d'opposition à une contrainte Urssaf :",
        options: ["La contrainte est annulée automatiquement", "Le jugement se substitue à la contrainte et est exécutoire par provision", "L'appel suspend toute exécution"],
        answer: 1,
        why: "Décret n° 2026-683 du 27 juillet 2026 : le jugement remplace la contrainte et peut être exécuté malgré l'appel.",
      },
    ],
    notes: "Dernier quiz de la matinée. Annoncer le score des équipes avant le déjeuner.",
  },

  // ---------------------------------------------------------------- séquence 4
  {
    kind: "section",
    num: "04",
    title: "L'été des juges : jurisprudence et ruptures",
    subtitle: "Six décisions de mai à juillet 2026, la rupture conventionnelle, l'activité partielle, le télétravail et l'apparence physique",
    duration: "60 min · 1 cas pratique · 1 quiz",
    notes: "Séquence 4 : 13h30 – 14h30. Réveiller la salle avec la question : « Quel arrêt de l'été vous a le plus surpris ? »",
  },
  {
    kind: "table",
    title: "Six décisions à connaître",
    header: ["Décision", "Sujet", "Ce qu'il faut retenir"],
    colW: [3.0, 2.6, 6.5],
    rows: [
      ["Cass. soc. 20 mai 2026", "Heures supplémentaires interdites", "L'interdiction de l'employeur ne suffit pas : si la charge de travail rend les heures nécessaires, elles sont dues."],
      ["Cass. soc. 3 juin 2026, n° 24-19.545 (publié)", "Annualisation et maladie", "Le seuil de déclenchement des heures supplémentaires est réduit de la durée de l'absence, évaluée sur la durée hebdomadaire moyenne de la période."],
      ["Cass. 2e civ. 25 juin 2026, n° 24-12.393 (publié)", "PSE annulé", "L'annulation de l'homologation fait perdre le régime social de faveur des indemnités de rupture : redressement Urssaf validé."],
      ["Cass. soc. 1er juillet 2026, n° 25-14.861", "Rupture conventionnelle", "Le minimum de l'indemnité spécifique est l'indemnité conventionnelle de licenciement prévue par l'accord d'entreprise, qui prime sur la branche (art. L. 2253-3)."],
      ["Cass. soc. 1er juillet 2026, n° 25-15.732 (publié)", "Preuve des heures supplémentaires", "Le salarié présente des éléments suffisamment précis ; l'employeur doit y répondre avec ses propres éléments de contrôle."],
      ["Défenseur des droits, 20 mai 2026, n° 2026-113", "Apparence physique", "Exiger un brushing lisse d'une hôtesse d'accueil est un refus d'embauche discriminatoire."],
    ],
    notes:
      "Sources : LégiSocial « Heures supplémentaires : l'interdiction ne suffit pas si le travail l'impose » ; Légifrance " +
      "(arrêts du 3 juin, 25 juin et 1er juillet 2026) ; Lefebvre Dalloz La Quotidienne du 31 août 2026 (rupture conventionnelle) " +
      "et du 3 septembre 2026 (apparence physique) ; Asfelia (annualisation).",
  },
  {
    kind: "bullets",
    title: "Zoom : annualisation et maladie (Cass. soc. 3 juin 2026)",
    bullets: [
      "Situation : salarié en aménagement du temps de travail sur l'année (1 607 h), absent pour maladie pendant une période haute planifiée à 42 h par semaine.",
      "Règle posée : sauf disposition conventionnelle plus favorable, le seuil annuel de déclenchement des heures supplémentaires est réduit de la durée de l'absence, calculée sur la durée hebdomadaire moyenne de la période de référence (35 h), et non sur l'horaire planifié.",
      "L'employeur qui applique le seuil plein à un salarié malade sous-paie ses heures supplémentaires : rappel de salaire majoré sur 3 ans, pour tous les salariés concernés.",
      "À paramétrer : compteur annuel réduit automatiquement de 35 h par semaine d'absence non assimilée (maladie), et non de l'horaire de la semaine.",
      "À ne pas confondre avec les congés payés : depuis Cass. soc. 10 septembre 2025 (n° 23-14.455), les jours de congés payés sont comptés comme du travail pour le seuil hebdomadaire des heures supplémentaires.",
    ],
    side: {
      heading: "Exemple chiffré",
      lines: [
        "Seuil annuel : 1 607 h",
        "Absence maladie : 2 semaines",
        "Réduction : 2 × 35 h = 70 h",
        "Seuil corrigé : 1 537 h",
        "Heures réalisées : 1 560 h",
        "Heures supplémentaires : 23 h",
      ],
    },
    notes:
      "Sources : Légifrance JURITEXT000054218385 ; Asfelia « Maladie en période de haute activité : la Cour de cassation fixe la " +
      "méthode de calcul » ; Sancy Avocats et ANDRH (revirement du 10 septembre 2025 sur les congés payés).\n" +
      "Nuance : l'absence pour maladie n'ouvre pas droit à majoration, mais elle ne doit pas non plus pénaliser le salarié.",
  },
  {
    kind: "bullets",
    title: "Rupture conventionnelle : le régime 2026 en un coup d'œil",
    bullets: [
      "Indemnité minimale : la plus élevée de l'indemnité légale et de l'indemnité conventionnelle de licenciement ; depuis le 1er juillet 2026, l'indemnité de l'accord d'entreprise prime sur celle de la branche, qu'elle soit supérieure ou inférieure.",
      "Cotisations : exonération dans la limite du plus élevé de (indemnité légale ou conventionnelle ; 50 % de l'indemnité ; 2 fois la rémunération annuelle brute N-1), plafonnée à 2 PASS (96 120 €). Au-delà de 10 PASS : cotisations dès le 1er euro.",
      "CSG-CRDS : exonération limitée au montant de l'indemnité légale ou conventionnelle (sans abattement, dans la limite de la part exonérée de cotisations).",
      "Contribution patronale spécifique : 40 % de la part exonérée de cotisations depuis le 1er janvier 2026 (30 % avant), quel que soit l'âge du salarié.",
      "Impôt sur le revenu : exonération dans les limites de l'art. 80 duodecies CGI (plafond 6 PASS, 288 360 €) si le salarié ne peut pas liquider une retraite ; sinon imposable dès le 1er euro.",
      "Procédure inchangée : entretien, convention, 15 jours calendaires de rétractation, homologation DREETS sous 15 jours ouvrables via TéléRC.",
    ],
    notes:
      "Sources : Urssaf.fr « Les indemnités de rupture conventionnelle » ; LégiSocial et culture-rh « Indemnités de rupture : régime social " +
      "et fiscal 2026 » ; Lefebvre Dalloz (arrêt du 1er juillet 2026, n° 25-14.861).\n" +
      "Salarié en droit de liquider une pension de retraite : régime social identique (exonération dans les mêmes limites et " +
      "contribution de 40 % sur la part exonérée) mais indemnité imposable dès le 1er euro.",
  },
  {
    kind: "exercise",
    num: 3,
    title: "Cas pratique 3 : chiffrer une rupture conventionnelle",
    time: "20 min",
    context:
      "Sophie, cadre, 8 ans d'ancienneté, salaire brut mensuel moyen 3 600 € (rémunération 2025 : 43 200 €), n'est pas en droit de liquider une retraite. La convention de branche prévoit 3/10 de mois par année ; l'accord d'entreprise prévoit 4/10 de mois par année. Les parties conviennent d'une indemnité de 15 000 € ; la rupture est homologuée en septembre 2026.",
    questions: [
      "Quel est le montant minimal de l'indemnité spécifique de rupture conventionnelle ?",
      "Déterminez la part exonérée de cotisations de Sécurité sociale et la part exonérée de CSG-CRDS.",
      "Calculez la contribution patronale spécifique due à l'Urssaf.",
      "L'indemnité est-elle imposable pour Sophie ?",
    ],
    notes:
      "Indemnité légale pour mémoire : 1/4 de mois par année jusqu'à 10 ans, soit 8 × 900 = 7 200 €. Faire chiffrer en binômes.",
  },
  {
    kind: "solution",
    title: "Corrigé du cas pratique 3",
    items: [
      { q: "Minimum", a: "Légale : 7 200 €. Branche : 8 × 0,3 × 3 600 = 8 640 €. Accord d'entreprise : 8 × 0,4 × 3 600 = 11 520 €. Depuis Cass. soc. 1er juillet 2026, le minimum est celui de l'accord d'entreprise : 11 520 €. Les 15 000 € convenus sont réguliers." },
      { q: "Cotisations et CSG-CRDS", a: "Limite d'exonération : max (11 520 ; 50 % × 15 000 = 7 500 ; 2 × 43 200 = 86 400) = 86 400 €, sous le plafond de 2 PASS. Les 15 000 € sont totalement exonérés de cotisations. CSG-CRDS : exonération limitée à 11 520 € ; 3 480 € soumis à CSG-CRDS (9,7 % sans abattement, soit 337,56 €)." },
      { q: "Contribution patronale", a: "40 % × 15 000 € (part exonérée de cotisations) = 6 000 € à la charge de l'employeur, à déclarer en DSN sur le CTP dédié." },
      { q: "Impôt sur le revenu", a: "Sophie ne peut pas liquider sa retraite : exonération dans la limite du plus élevé de (11 520 ; 7 500 ; 86 400) plafonnée à 6 PASS. L'indemnité de 15 000 € est totalement exonérée d'IR et n'entre pas dans le PAS." },
    ],
    notes:
      "Coût total employeur de la rupture : 15 000 + 6 000 = 21 000 € hors préavis. Faire remarquer l'effet de la hausse de " +
      "30 à 40 % : 1 500 € de plus qu'en 2025 sur ce seul dossier.",
  },
  {
    kind: "table",
    title: "Rappel : activité partielle et APLD en 2026, et le cas de la canicule",
    header: ["", "Activité partielle de droit commun", "APLD (fin le 31 décembre 2026)"],
    colW: [3.2, 4.5, 4.4],
    rows: [
      ["Indemnité versée au salarié", "60 % de la rémunération horaire brute (limite 4,5 SMIC) : plancher 9,74 €, plafond 33,24 €", "70 % : plancher 9,74 €, plafond 38,78 €"],
      ["Allocation remboursée à l'employeur", "36 % : plancher 8,57 € (gelé), plafond 19,94 €", "60 % : plancher 9,52 €, plafond 33,24 €"],
      ["Autorisation", "3 mois renouvelables, 6 mois maximum sur 12 mois ; consultation du CSE ; demande sur le portail APART", "Accord collectif ou document unilatéral homologué"],
      ["Motif canicule (Q-R ministère du 25 juin 2026)", "« Toute autre circonstance de caractère exceptionnel » (art. R. 5122-1, 5°) : vigilance orange ou rouge Météo-France, lien direct avec la baisse d'activité, caractère imprévisible et irrésistible", "Non applicable"],
      ["Conditions supplémentaires", "Solutions alternatives d'abord : aménagement des horaires, télétravail, congés, récupération ; BTP : dispositif intempéries en priorité. Examen au cas par cas ; refus possible en cas de recours récurrent", ""],
    ],
    notes:
      "Sources : document remis « Canicule : le ministère du travail rappelle les conditions de recours à l'activité partielle » " +
      "(Lefebvre Dalloz, 6 juillet 2026) ; Éditions Tissot et LégiSocial (montants au 1er juin 2026, gel des planchers) ; " +
      "compta-online « Comment évolue l'activité partielle en 2026 ».\n" +
      "Régime social de l'indemnité : revenu de remplacement, CSG 6,2 % et CRDS 0,5 % après abattement de 1,75 %, avec écrêtement au SMIC net.",
  },
  {
    kind: "cards",
    title: "Télétravail : sécuriser la pratique",
    cols: 3,
    cards: [
      { head: "L'attestation sur l'honneur", text: "Modèle remis : le salarié atteste d'un poste ergonomique (prévention des TMS), d'une température adaptée, d'installations électriques conformes, du respect des durées maximales, pauses et amplitude." },
      { head: "Pourquoi la faire signer ?", text: "Obligation de sécurité de l'employeur (art. L. 4121-1) et obligation du salarié de prendre soin de sa santé (art. L. 4122-1). L'accident survenu en télétravail est présumé accident du travail (art. L. 1222-9)." },
      { head: "Réflexes prévention", text: "Fiche réflexe en cas d'accident, brochure INRS ED 6454, coordonnées du service de prévention et de santé au travail, signalement immédiat de tout dysfonctionnement." },
      { head: "Frais de télétravail 2026", text: "Allocation forfaitaire exonérée : 2,70 € par jour, 59,40 € par mois au plus ; matériel personnel : 55,20 € par mois ; ou frais réels sur justificatifs." },
      { head: "Titres-restaurant", text: "Mêmes droits que sur site (Cass. soc. 8 octobre 2025) : un titre par jour télétravaillé comprenant une pause repas ; participation exonérée jusqu'à 7,32 €." },
      { head: "Charte ou accord", text: "Formaliser les jours, plages de joignabilité, droit à la déconnexion, prise en charge des frais et modalités de contrôle du temps de travail." },
    ],
    notes:
      "Document remis : « Attestation sur l'honneur du salarié en situation de télétravail » (modèle Word). Le distribuer et le " +
      "commenter ligne par ligne ; proposer aux participants de l'adapter à leurs clients.\n" +
      "Sources barèmes : Service-public « Remboursement des frais de télétravail : quel barème en 2026 ? » ; LégiSocial " +
      "« Évaluation des frais engagés par le salarié en télétravail 2026 ».",
  },
  {
    kind: "bullets",
    title: "Apparence physique et discrimination : la veille RH de l'été",
    bullets: [
      "Défenseur des droits, décision n° 2026-113 du 20 mai 2026 : une hôtesse d'accueil mise à disposition pour un match de football voit sa participation annulée faute de pouvoir réaliser un brushing lisse, incompatible avec la nature de ses cheveux.",
      "Qualification : refus d'embauche discriminatoire fondé sur l'apparence physique (art. L. 1132-1) ; injonction de discriminer retenue contre le club donneur d'ordre.",
      "Recommandations : revoir les pratiques de recrutement, former les recruteurs, réparer le préjudice ; pour le donneur d'ordre, exclure toute condition liée à la texture des cheveux.",
      "Antécédents : Cass. soc. 23 novembre 2022, n° 21-14.060 (steward et coiffure) ; proposition de loi sur la discrimination capillaire adoptée par l'Assemblée nationale le 28 mars 2024, non examinée par le Sénat.",
      "Enjeu paie : une discrimination entraîne la nullité de la mesure, des rappels de salaire et des dommages-intérêts ; le gestionnaire de paie doit alerter dès qu'une prime, une classification ou une embauche dépend d'un critère d'apparence.",
    ],
    notes:
      "Document remis : « Exiger un brushing pour travailler est discriminatoire » (Lefebvre Dalloz, 3 septembre 2026).\n" +
      "Élargir aux tenues vestimentaires : une exigence de présentation doit être justifiée par la tâche à accomplir et " +
      "proportionnée au but recherché (art. L. 1121-1).",
  },
  {
    kind: "quiz",
    num: 4,
    title: "Quiz 4 : jurisprudence et ruptures",
    questions: [
      {
        q: "Un accord d'entreprise prévoit une indemnité de licenciement inférieure à celle de la branche. Le minimum de l'indemnité de rupture conventionnelle est :",
        options: ["Celui de la branche, plus favorable", "Celui de l'accord d'entreprise (Cass. soc. 1er juillet 2026)", "L'indemnité légale uniquement"],
        answer: 1,
        why: "Art. L. 2253-3 : l'accord d'entreprise prévaut sur la branche pour cet objet, que son montant soit supérieur ou inférieur. L'indemnité légale reste un plancher.",
      },
      {
        q: "L'homologation d'un PSE est annulée après le versement des indemnités. Conséquence pour l'Urssaf :",
        options: ["Aucune, les indemnités ont été versées de bonne foi", "Perte du régime social de faveur et réintégration dans l'assiette", "Seule la CSG-CRDS est due"],
        answer: 1,
        why: "Cass. 2e civ. 25 juin 2026 : l'exonération exige un plan régulièrement homologué ; le redressement est validé.",
      },
      {
        q: "En cas de canicule, une entreprise peut obtenir l'activité partielle :",
        options: ["Automatiquement dès 35 °C", "Si la vigilance est orange ou rouge, le lien est direct et les alternatives ont été mobilisées", "Uniquement dans le BTP"],
        answer: 1,
        why: "Q-R du ministère du travail du 25 juin 2026 : examen au cas par cas ; le BTP doit d'abord activer le dispositif intempéries.",
      },
    ],
    notes: "Pause après ce quiz (14h30 – 14h45).",
  },

  // ---------------------------------------------------------------- séquence 5
  {
    kind: "section",
    num: "05",
    title: "L'épargne salariale de A à Z",
    subtitle: "Participation, intéressement, PEE, PERECO, abondement, PPV : règles, chiffres 2026, paie et DSN, calendrier 2027",
    duration: "80 min · 1 cas pratique · 1 quiz",
    notes: "Séquence 5 : 14h45 – 16h05. C'est la séquence « rappel de dispositif » demandée : prendre le temps.",
  },
  {
    kind: "cards",
    title: "Le panorama : six briques et un fil conducteur",
    cols: 3,
    cards: [
      { head: "Participation", text: "Partage obligatoire du bénéfice dès 50 salariés (5 années civiles consécutives). Formule légale ou dérogatoire, blocage 5 ans." },
      { head: "Intéressement", text: "Dispositif facultatif et collectif lié aux résultats ou aux performances. Accord de 1 à 5 ans, formule aléatoire." },
      { head: "PEE et PEI", text: "Plan d'épargne bloqué 5 ans : reçoit participation, intéressement, versements volontaires, abondement et PPV." },
      { head: "PERECO", text: "Plan d'épargne retraite collectif : sortie en capital ou en rente à la retraite ; déblocage pour la résidence principale." },
      { head: "Abondement", text: "Versement complémentaire de l'employeur sur le plan : jusqu'à 300 % du versement du salarié et 8 % du PASS (PEE) ou 16 % (PERECO)." },
      { head: "PPV et PPVE", text: "Prime de partage de la valeur (3 000 € ou 6 000 €) et plan de partage de la valorisation de l'entreprise (prime sur 3 ans)." },
    ],
    kicker: "Fil conducteur du gestionnaire de paie : assiette, CSG-CRDS, forfait social, bulletin, DSN et réduction générale.",
    notes:
      "Faire citer les dispositifs présents chez les clients des participants. Rappeler que l'épargne salariale n'est pas un " +
      "salaire : elle n'entre ni dans l'assiette des cotisations ni dans le SMIC, mais elle est soumise à CSG-CRDS et, selon " +
      "les cas, au forfait social.",
  },
  {
    kind: "bullets",
    title: "La participation : qui, quand, combien",
    bullets: [
      "Obligatoire dans les entreprises d'au moins 50 salariés pendant 5 années civiles consécutives ; l'obligation s'applique au premier exercice ouvert après cette période (loi Pacte).",
      "Formule légale : RSP = 1/2 × (B − 5 % C) × S / VA, avec B le bénéfice net fiscal, C les capitaux propres, S les salaires et VA la valeur ajoutée. Formule dérogatoire possible si au moins aussi favorable ; à titre expérimental, les entreprises de moins de 50 salariés peuvent adopter une formule moins favorable par accord de branche (loi du 29 novembre 2023).",
      "Répartition : uniforme, proportionnelle au salaire (salaire retenu dans la limite de 3 PASS), proportionnelle à la durée de présence, ou combinaison. Plafond individuel : 75 % du PASS, soit 36 045 € en 2026.",
      "Choix du salarié dans les 15 jours : perception immédiate (imposable) ou affectation au plan (exonérée d'IR) ; à défaut de choix, affectation par défaut, pour moitié au PERECO s'il existe.",
      "Versement au plus tard le dernier jour du 5e mois suivant la clôture (31 mai pour un exercice civil) ; au-delà, intérêts de retard au taux de 1,33 fois le TMOP.",
      "Régime : exonération de cotisations ; CSG-CRDS 9,7 % sans abattement, précomptée par l'employeur ; forfait social 20 % dans les entreprises de 50 salariés et plus, 0 % en dessous.",
    ],
    notes:
      "Sources : Code du travail art. L. 3322-1 et suivants, L. 3324-5, D. 3324-10 ; LégiFiscal « Participation des salariés : fiscalité et " +
      "forfait social 2026 » ; Dougs et Legalstart (forfait social).\n" +
      "Rappeler l'accord de participation : négocié avec les délégués syndicaux ou le CSE, ou ratifié aux 2/3 du personnel ; déposé sur TéléAccords.",
  },
  {
    kind: "bullets",
    title: "L'intéressement : souplesse et pièges",
    bullets: [
      "Accord collectif de 1 à 5 ans (accord, CSE ou ratification aux 2/3), conclu avant le premier jour de la seconde moitié de la période de calcul (30 juin pour un exercice civil) et déposé dans les 15 jours.",
      "Depuis la loi du 29 novembre 2023, les entreprises de moins de 50 salariés sans délégué syndical ni CSE, ou après échec des négociations, peuvent le mettre en place par décision unilatérale.",
      "Formule aléatoire liée aux résultats ou aux performances ; plafond collectif de 20 % de la masse salariale brute ; plafond individuel de 75 % du PASS (36 045 € en 2026).",
      "Répartition uniforme, proportionnelle au salaire (limité à 3 PASS) ou au temps de présence ; les congés de maternité, de paternité, d'adoption et les arrêts AT/MP sont assimilés à de la présence.",
      "Avances possibles en cours d'exercice (loi 2023) ; versement au plus tard le dernier jour du 5e mois suivant la clôture, sinon intérêts de retard.",
      "Régime : exonération de cotisations ; CSG-CRDS 9,7 % ; forfait social 0 % sous 250 salariés, 20 % à partir de 250 ; IR exonéré si placé sur un plan dans les 15 jours, imposable si perçu.",
    ],
    notes:
      "Sources : Code du travail art. L. 3312-1 et suivants ; Eres et Esancia (plafonds 2026) ; travail-industrie « Intéressement 2026 ».\n" +
      "Piège classique : un intéressement qui reproduit l'organigramme des salaires ou qui est garanti dans son montant " +
      "perd le caractère aléatoire et collectif ; l'Urssaf le requalifie en salaire.",
  },
  {
    kind: "table",
    title: "PEE, PERECO et abondement : les chiffres 2026",
    header: ["", "PEE / PEI", "PERECO / PERECO-I"],
    colW: [3.4, 4.4, 4.3],
    rows: [
      ["Horizon", "Sommes bloquées 5 ans", "Jusqu'à la retraite (capital ou rente)"],
      ["Versements du salarié", "Volontaires, limités à 25 % de la rémunération brute annuelle ; participation, intéressement, PPV, jours de repos non pris (CET)", "Idem, plus transferts et jours de repos (10 par an au plus)"],
      ["Abondement maximal", "300 % du versement, dans la limite de 8 % du PASS : 3 844,80 €", "300 % du versement, dans la limite de 16 % du PASS : 7 689,60 € ; abondement unilatéral possible sans versement du salarié"],
      ["Régime de l'abondement", "Exonéré de cotisations ; CSG-CRDS 9,7 % ; forfait social 20 % (0 % sous 50 salariés)", "Idem ; forfait social réduit à 16 % en gestion pilotée investie en titres de PME-ETI"],
      ["Déblocage anticipé", "Mariage ou PACS, 3e enfant, divorce avec garde, invalidité, décès, rupture du contrat, surendettement, création d'entreprise, résidence principale (acquisition, travaux, rénovation énergétique), violences conjugales, proche aidant, achat d'un véhicule propre", "Décès du conjoint, invalidité, surendettement, fin de droits chômage, cessation d'activité non salariée, résidence principale"],
      ["Frais et gestion", "Tenue de compte à la charge de l'employeur ; au moins un fonds solidaire et un fonds labellisé (transition écologique ou socialement responsable)", "Gestion pilotée par défaut ; information annuelle du bénéficiaire"],
    ],
    notes:
      "Sources : Esancia « Épargne collective entreprise 2026 : PEE, PERECO, PPV et abondement » ; Gomez Thomas « Épargne salariale 2026 : " +
      "PEE, PERECO, plafonds » ; Voltaire Avocats (nouveaux cas de déblocage).\n" +
      "PASS 2026 : 48 060 €. Vérifier chaque année les plafonds d'abondement.",
  },
  {
    kind: "table",
    title: "La PPV : 2026 contre 2027",
    header: ["", "Jusqu'au 31 décembre 2026", "À compter du 1er janvier 2027"],
    colW: [3.2, 4.5, 4.4],
    rows: [
      ["Plafond d'exonération", "3 000 € par an et par salarié ; 6 000 € avec un accord d'intéressement ou de participation volontaire", "Inchangé : 3 000 € ou 6 000 €"],
      ["Cotisations sociales", "Exonérées dans le plafond", "Exonérées dans le plafond"],
      ["CSG-CRDS et impôt sur le revenu", "Entreprises de moins de 50 salariés, salariés payés moins de 3 SMIC : exonérés. Autres cas : CSG-CRDS 9,7 % et IR dus, sauf placement sur un plan", "Dus pour tous ; IR exonéré si la prime est affectée à un PEE ou un PERECO"],
      ["Forfait social", "20 % à partir de 250 salariés ; 0 % en dessous", "Inchangé"],
      ["Réduction générale", "La PPV est intégrée dans la rémunération retenue pour la RGDU depuis 2025", "Inchangé"],
      ["Modalités", "Accord ou décision unilatérale ; 2 primes par an au plus ; modulation selon rémunération, classification, ancienneté, durée de présence ou temps de travail", "Inchangé"],
      ["DSN", "Bloc S21.G00.52, types 904 (exonérée et non imposable), 905 (exonérée mais imposable), 906 (placée, soumise partiellement à CSG-CRDS)", "Inchangé"],
    ],
    notes:
      "Sources : Urssaf.fr « La prime de partage de la valeur » ; Sancy Avocats « PPV : le guide employeur 2026 » ; Eurex « Partage de la " +
      "valeur PME 2026 » ; net-entreprises « Déclarer la prime de partage de la valeur ».\n" +
      "Exemple à donner : 1 000 € versés en décembre 2026 à un salarié à 2 SMIC dans une entreprise de 30 salariés arrivent nets ; " +
      "la même prime en janvier 2027 perd 97 € de CSG-CRDS et devient imposable.",
  },
  {
    kind: "bullets",
    title: "Loi du 29 novembre 2023 : les obligations en vigueur",
    bullets: [
      "Entreprises de 11 à 49 salariés : lorsque le bénéfice net fiscal atteint au moins 1 % du chiffre d'affaires pendant 3 exercices consécutifs, obligation de mettre en place un dispositif au titre de l'exercice suivant : participation, intéressement, abondement ou PPV (expérimentation de 5 ans depuis le 1er janvier 2025).",
      "Entreprises de 50 salariés et plus dotées d'un délégué syndical et d'un accord de participation ou d'intéressement : négociation obligatoire sur la définition du « bénéfice exceptionnel » et ses conséquences.",
      "PPV : possibilité de la placer sur un plan d'épargne (exonération d'IR), deux primes par an, versement possible via un accord d'intéressement pour atteindre 6 000 €.",
      "Plan de partage de la valorisation de l'entreprise (PPVE) : prime collective indexée sur la valorisation de l'entreprise sur 3 ans, exonérée de cotisations, soumise à une contribution patronale de 20 %.",
      "Intéressement par décision unilatérale dans les entreprises de moins de 50 salariés ; participation dérogatoire moins favorable par accord de branche ; fonds labellisés obligatoires dans les plans.",
      "Contrôle : l'absence de dispositif dans une entreprise de 11 à 49 salariés éligible n'est pas sanctionnée par une pénalité financière, mais expose à un contentieux avec le CSE et les salariés.",
    ],
    notes:
      "Sources : Code du travail numérique « Partage de la valeur : nouvelle obligation pour les entreprises de 11 à moins de 50 salariés » ; " +
      "loi n° 2023-1107 du 29 novembre 2023 ; EY Société d'Avocats ; KPMG Avocats.\n" +
      "Question aux participants : combien de dossiers du cabinet sont dans le champ des 11-49 ? Proposer un contrôle systématique à " +
      "la clôture (bénéfice net fiscal ÷ chiffre d'affaires).",
  },
  {
    kind: "bullets",
    title: "Déblocage exceptionnel 2026 : où en est le texte ?",
    bullets: [
      "Proposition de loi « visant au renforcement de l'attractivité de l'épargne salariale et à la mise en œuvre d'une procédure de déblocage exceptionnelle » : adoptée par l'Assemblée nationale puis par le Sénat en première lecture le 7 avril 2026 ; navette en cours, non promulguée au 12 septembre 2026.",
      "Mesure phare : déblocage anticipé jusqu'à 5 000 € nets par bénéficiaire, sans condition de ressources, des sommes issues de la participation et de l'intéressement affectées à un PEE ou un PEI avant le 1er janvier 2026.",
      "Exclusions : sommes placées sur un PER ou un PERECO, sommes investies en fonds solidaires ; déblocage soumis à accord collectif ou décision unilatérale lorsque les sommes sont investies en titres de l'entreprise.",
      "Fenêtre : demande dans les 12 mois suivant la promulgation ; les sommes conservent leur exonération de cotisations et d'IR (CSG-CRDS déjà acquittées).",
      "Obligation employeur : informer tous les bénéficiaires de l'existence de la procédure dans les 2 mois suivant la promulgation ; le teneur de compte exécute les demandes.",
      "Autres apports du texte : déblocage anticipé dès la naissance ou l'adoption du premier enfant (au lieu du troisième), mesures d'attractivité des plans.",
    ],
    notes:
      "Sources : LégiSocial « Déblocage de l'épargne salariale 2026 : le Sénat adopte la proposition de loi en première lecture » ; dossier " +
      "législatif Assemblée nationale DLR5L17N53699 ; Barthélémy Avocats ; Gerep.\n" +
      "Vérifier le jour de l'animation si la loi a été promulguée : si oui, mettre à jour la diapositive avec la date et la fin de la fenêtre.",
  },
  {
    kind: "bullets",
    title: "L'épargne salariale en paie et en DSN",
    bullets: [
      "Bulletin de paie : la participation et l'intéressement ne figurent pas obligatoirement sur le bulletin ; une fiche distincte (montant, CSG-CRDS, choix d'affectation, délais) est obligatoire. La PPV apparaît sur le bulletin sur une ligne dédiée, hors brut soumis.",
      "CSG-CRDS : précompte de 9,7 % sur 100 % des sommes (pas d'abattement de 1,75 %), à la date du versement ; la part CSG déductible (6,8 %) réduit le net imposable si la somme est perçue.",
      "Forfait social : à la charge de l'employeur, déclaré sur les CTP dédiés selon le taux (20 %, 16 %, 10 %, 8 %) ; exonération de plein droit sous 50 salariés pour la participation, l'intéressement et l'abondement, sous 250 pour l'intéressement.",
      "DSN : les primes d'épargne salariale se déclarent en bloc 52 avec leur type ; les sommes placées ne sont pas imposables et n'entrent pas dans l'assiette du PAS ; les sommes perçues immédiatement sont soumises au PAS.",
      "RGDU : la PPV est réintégrée à la rémunération annuelle de référence ; l'intéressement, la participation et l'abondement ne le sont pas.",
      "Contrôle Urssaf : accord déposé, caractère collectif, respect des plafonds, délais de versement et information des salariés sont les cinq points vérifiés en priorité.",
    ],
    notes:
      "Sources : net-entreprises (fiches PPV et PASRAU) ; Urssaf.fr (forfait social) ; nexco-expertise « PPV 2026 : montant, plafonds, RGDU ».\n" +
      "Astuce : demander au teneur de compte le fichier des affectations avant la paie de versement pour éviter les régularisations de CSG.",
  },
  {
    kind: "exercise",
    num: 4,
    title: "Cas pratique 4 : la Menuiserie Dubois",
    time: "25 min",
    context:
      "Menuiserie Dubois, SARL de 32 salariés, exercice civil, sans accord d'intéressement ni de participation. Bénéfice net fiscal : 2,4 % du chiffre d'affaires en 2023, 1,8 % en 2024, 2,1 % en 2025. Nadia, employée, perçoit 2 400 € brut par mois.",
    questions: [
      "L'entreprise est-elle tenue de mettre en place un dispositif de partage de la valeur ? Lequel conseillez-vous et pourquoi ?",
      "Le gérant choisit une PPV de 1 500 € pour tous. Calculez ce que Nadia perçoit si la prime est versée en décembre 2026, puis en janvier 2027 (prime perçue, non placée).",
      "Nadia verse 1 000 € sur le PEE en 2026 ; le règlement prévoit un abondement de 200 %. Calculez l'abondement, son régime et le montant net porté au plan.",
      "L'entreprise décide de verser une participation volontaire au titre de 2026 le 20 juin 2027. Que signalez-vous ?",
    ],
    notes:
      "Prévoir 15 minutes de travail en sous-groupes et 10 minutes de restitution. SMIC de référence pour le seuil de 3 SMIC : " +
      "2 400 € correspond à environ 1,3 SMIC.",
  },
  {
    kind: "solution",
    title: "Corrigé du cas pratique 4",
    items: [
      { q: "Obligation", a: "Oui : 11 à 49 salariés et bénéfice net fiscal ≥ 1 % du CA sur 3 exercices consécutifs (2023, 2024, 2025) → dispositif obligatoire au titre de l'exercice 2026. La PPV est la plus simple (décision unilatérale) ; un intéressement par DUE permettrait de porter le plafond de la PPV à 6 000 € et d'exonérer d'IR les sommes placées." },
      { q: "PPV de Nadia", a: "Décembre 2026 : entreprise de moins de 50 salariés, rémunération inférieure à 3 SMIC → 1 500 € nets, exonérés de cotisations, de CSG-CRDS et d'IR. Janvier 2027 : CSG-CRDS 9,7 % = 145,50 € → 1 354,50 € nets, et prime imposable (sauf affectation à un plan)." },
      { q: "Abondement", a: "200 % × 1 000 = 2 000 €, sous le plafond de 3 844,80 € (8 % du PASS) et de 300 %. Exonéré de cotisations et de forfait social (moins de 50 salariés) ; CSG-CRDS 9,7 % = 194 € précomptée : 1 806 € nets portés au plan, exonérés d'IR." },
      { q: "Participation tardive", a: "Le versement devait intervenir au plus tard le 31 mai 2027 (dernier jour du 5e mois suivant la clôture). Un versement le 20 juin déclenche des intérêts de retard au taux de 1,33 fois le TMOP, à la charge de l'entreprise, calculés à compter du 1er juin." },
    ],
    notes:
      "Faire remarquer que la PPV 2026 est intégrée dans la rémunération retenue pour la RGDU : 1 500 € × 32 salariés " +
      "réduisent la réduction annuelle de l'entreprise.",
  },
  {
    kind: "quiz",
    num: 5,
    title: "Quiz 5 : épargne salariale",
    questions: [
      {
        q: "Le plafond individuel d'intéressement et de participation en 2026 est de :",
        options: ["36 045 € (75 % du PASS)", "48 060 € (1 PASS)", "3 844,80 € (8 % du PASS)"],
        answer: 0,
        why: "75 % du PASS 2026. Le montant de 3 844,80 € est le plafond d'abondement sur le PEE.",
      },
      {
        q: "La CSG-CRDS sur l'intéressement est calculée :",
        options: ["Sur 98,25 % de la somme, comme un salaire", "Sur 100 % de la somme, au taux de 9,7 %", "Seulement si la somme est perçue"],
        answer: 1,
        why: "Pas d'abattement pour frais professionnels sur l'épargne salariale ; la CSG-CRDS est due que la somme soit placée ou perçue.",
      },
      {
        q: "Une entreprise de 120 salariés verse un intéressement. Le forfait social est de :",
        options: ["20 %", "0 %", "8 %"],
        answer: 1,
        why: "Exonération de forfait social sur l'intéressement sous 250 salariés (loi Pacte). La participation y serait soumise à 20 % (entreprise de 50 salariés et plus).",
      },
      {
        q: "Le déblocage exceptionnel de 5 000 € de l'épargne salariale :",
        options: ["Est applicable depuis le 1er juillet 2026", "N'est pas encore promulgué au 12 septembre 2026", "Concerne les sommes versées en 2026"],
        answer: 1,
        why: "Proposition de loi adoptée par le Sénat le 7 avril 2026 en première lecture ; elle vise les sommes affectées avant le 1er janvier 2026.",
      },
      {
        q: "Une PPV de 2 000 € versée en 2026 à un salarié d'une entreprise de 80 salariés est :",
        options: ["Exonérée de tout", "Exonérée de cotisations ; CSG-CRDS et IR dus sauf placement", "Soumise à cotisations"],
        answer: 1,
        why: "Le régime renforcé ne concerne que les entreprises de moins de 50 salariés. Placée sur un PEE, la prime est exonérée d'IR.",
      },
    ],
    notes: "Quiz le plus long de la journée : 5 questions, 2 points chacune.",
  },

  // ---------------------------------------------------------------- séquence 6
  {
    kind: "section",
    num: "06",
    title: "Agenda de rentrée, quiz final et évaluation",
    subtitle: "Les échéances de septembre à janvier, les textes à surveiller et la synthèse de la journée",
    duration: "25 min · quiz final par équipes",
    notes: "Séquence 6 : 16h05 – 16h30.",
  },
  {
    kind: "timeline",
    title: "L'agenda de la rentrée",
    items: [
      { date: "1er septembre 2026", text: "Nouveaux taux de PAS ; durées maximales des arrêts de travail ; suspension de la réforme des retraites ; trimestres enfants pour les carrières longues ; versement mobilité Poher Communauté." },
      { date: "3 septembre – 21 octobre", text: "Deuxième période de répartition du solde de la taxe d'apprentissage sur SOLTéA." },
      { date: "9 septembre 2026", text: "Projet de loi de transposition de la directive sur la transparence des rémunérations présenté en Conseil des ministres." },
      { date: "Fin septembre 2026", text: "Présentation du PLF et du PLFSS 2027 : plafond des IJ, fiscalisation des IJ AT/MP, mesures sur les cotisations à suivre." },
      { date: "1er octobre 2026", text: "Décret n° 2026-683 : opposition à contrainte, procédure prud'homale, médiation." },
      { date: "31 décembre 2026", text: "Fin du régime renforcé de la PPV ; fin de l'APLD classique ; dernier mois du modèle provisoire de bulletin." },
      { date: "1er janvier 2027", text: "Bulletin de paie clarifié obligatoire (arrêté du 11 août 2025) ; norme DSN P27 ; nouveau régime de la PPV ; PASS et SMIC 2027." },
    ],
    notes:
      "Sources : s-paie newsletter septembre 2026 (SOLTéA) ; bpw.fr et Dairia Avocats (transparence salariale) ; Éditions Tissot " +
      "« Simplification du bulletin de paie : mesure repoussée au 1er janvier 2027 » ; LégiSocial (fiches DSN 2027).",
  },
  {
    kind: "bullets",
    title: "Transparence des rémunérations : se préparer dès maintenant",
    bullets: [
      "Directive (UE) 2023/970 : transposition attendue avant le 7 juin 2026 ; projet de loi de 22 articles transmis au Conseil d'État le 6 juin et présenté en Conseil des ministres le 9 septembre 2026 ; examen parlementaire fin 2026, entrée en vigueur visée au 1er janvier 2028.",
      "Toutes les entreprises : rémunération ou fourchette affichée dans les offres d'emploi, interdiction de demander l'historique salarial, droit du salarié à connaître son niveau de rémunération et la moyenne par sexe pour un travail de valeur égale.",
      "Critères de fixation et de progression de la rémunération objectifs, non sexistes et accessibles aux salariés.",
      "Entreprises de 100 salariés et plus : rapport sur les écarts de rémunération selon une périodicité liée à la taille ; écart non justifié de plus de 5 % → évaluation conjointe avec les représentants du personnel.",
      "Charge de la preuve inversée en cas de litige : l'employeur démontre l'absence de discrimination.",
      "Chantiers paie : fiabiliser les classifications, isoler les composantes de rémunération, documenter les primes individuelles, préparer les extractions par catégorie et par sexe.",
    ],
    notes:
      "Sources : bpw.fr « Transparence salariale : ce que le projet de loi de 2026 change en France » ; Dairia Avocats « Projet de loi " +
      "transparence salariale » ; Payfit « Transparence des salaires : les obligations en 2026 ».",
  },
  {
    kind: "truefalse",
    title: "Quiz final : 10 affirmations, une minute chacune",
    num: 99,
    items: [
      { s: "Le SMIC mensuel brut pour 151,67 h est de 1 867,02 € depuis le 1er juin 2026.", answer: "VRAI", why: "12,31 € × 151,67 h." },
      { s: "Le SMIC de référence de la RGDU a été revalorisé au 1er juin 2026.", answer: "FAUX", why: "Gel au SMIC du 1er janvier 2026, confirmé par décret du 12 juin 2026." },
      { s: "Le congé supplémentaire de naissance est indemnisé par l'employeur à hauteur de 70 %.", answer: "FAUX", why: "Indemnité versée par la CPAM : 70 % puis 60 % du salaire net, sans maintien légal par l'employeur." },
      { s: "Depuis le 1er septembre 2026, une prolongation d'arrêt de travail ne peut dépasser 62 jours sauf justification.", answer: "VRAI", why: "Décret n° 2026-498 du 12 juin 2026." },
      { s: "Le taux de la cotisation AGS est passé à 0,30 % au 1er juillet 2026.", answer: "FAUX", why: "Maintien à 0,25 %." },
      { s: "Dans un accord d'annualisation, une semaine de maladie réduit le seuil annuel des heures supplémentaires de 35 h.", answer: "VRAI", why: "Cass. soc. 3 juin 2026 : durée hebdomadaire moyenne, pas l'horaire planifié." },
      { s: "La contribution patronale de 40 % s'applique à la totalité de l'indemnité de rupture conventionnelle.", answer: "FAUX", why: "Seulement à la part exonérée de cotisations de Sécurité sociale." },
      { s: "Une entreprise de 40 salariés dont le bénéfice net fiscal atteint 1,5 % du CA sur 2023, 2024 et 2025 doit mettre en place un dispositif de partage de la valeur en 2026.", answer: "VRAI", why: "Loi du 29 novembre 2023, entreprises de 11 à 49 salariés." },
      { s: "L'abondement maximal sur un PERECO est de 3 844,80 € en 2026.", answer: "FAUX", why: "16 % du PASS : 7 689,60 € ; 3 844,80 € est le plafond du PEE." },
      { s: "Le nouveau modèle de bulletin de paie devient obligatoire le 1er janvier 2027.", answer: "VRAI", why: "Arrêté du 11 août 2025 ; le modèle provisoire reste autorisé jusqu'au 31 décembre 2026." },
    ],
    notes:
      "Quiz final par équipes : 2 points par bonne réponse. Cumuler avec les scores de la journée et désigner l'équipe gagnante.",
  },
  {
    kind: "keypoints",
    title: "Les 10 réflexes à emporter",
    points: [
      "Contrôler chaque bulletin de juin au nouveau SMIC, sans toucher au SMIC de référence de la RGDU.",
      "Créer le motif « congé supplémentaire de naissance » (DSN code 20) et vérifier la convention collective sur le maintien.",
      "Depuis le 1er septembre, refuser les arrêts non conformes et sécuriser le maintien de salaire sur les IJ réellement versées.",
      "Recalculer les dates de départ à la retraite des générations 1964 à 1968.",
      "Paramétrer le versement mobilité de chaque établissement avant la DSN de septembre.",
      "Lire chaque CRM dans les deux mois : la DSN de substitution sanctionne l'inaction, pas l'erreur.",
      "Dans les accords d'annualisation, réduire le seuil des heures supplémentaires de 35 h par semaine de maladie.",
      "Chiffrer chaque rupture conventionnelle avec la contribution de 40 % et l'indemnité de l'accord d'entreprise.",
      "Repérer les clients de 11 à 49 salariés soumis à l'obligation de partage de la valeur.",
      "Anticiper la fin du régime renforcé de la PPV au 31 décembre 2026 et le bulletin clarifié au 1er janvier 2027.",
    ],
    notes:
      "Distribuer la check-list de paramétrage de rentrée (support de cours, annexe). Revenir sur les attentes notées le matin " +
      "et vérifier qu'elles ont été traitées.",
  },
  {
    kind: "sources",
    title: "Textes et sources de référence",
    items: [
      "Arrêté du 22 mai 2026 relatif au relèvement du SMIC (JO du 24 mai 2026) ; Urssaf.fr « Le Smic et le minimum garanti augmentent au 1er juin 2026 ».",
      "LFSS 2026 : loi n° 2025-1403 du 30 décembre 2025 (art. 99 congé supplémentaire de naissance, art. 105 suspension de la réforme des retraites, contribution rupture conventionnelle, déduction forfaitaire heures supplémentaires).",
      "Décrets n° 2026-419 et n° 2026-425 du 30 mai 2026 (congé supplémentaire de naissance) ; décret n° 2026-498 du 12 juin 2026 (arrêts de travail) ; décret n° 2026-700 du 29 juillet 2026 (retraite des parents) ; décret n° 2026-683 du 27 juillet 2026 (procédures).",
      "Loi n° 2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales.",
      "Décrets n° 2025-887 du 4 septembre 2025 et n° 2025-1446 du 31 décembre 2025 (RGDU) ; décret du 12 juin 2026 (gel du SMIC RGDU) ; Urssaf.fr « Point sur l'application de la RGDU en 2026 ».",
      "Cass. soc. 20 mai 2026 ; Cass. soc. 3 juin 2026, n° 24-19.545 ; Cass. 2e civ. 25 juin 2026, n° 24-12.393 ; Cass. soc. 1er juillet 2026, n° 25-14.861 et n° 25-15.732 ; Cass. soc. 10 septembre 2025, n° 23-14.455 ; Cass. soc. 8 octobre 2025 (titres-restaurant) ; Défenseur des droits, décision n° 2026-113 du 20 mai 2026.",
      "Loi n° 2023-1107 du 29 novembre 2023 (partage de la valeur) ; proposition de loi « attractivité de l'épargne salariale et déblocage exceptionnel » (Sénat, 7 avril 2026) ; Urssaf.fr « La prime de partage de la valeur » ; BOSS (frais professionnels, épargne salariale).",
      "Questions-réponses du ministère du travail sur l'activité partielle (mise à jour du 25 juin 2026) ; ameli.fr (congé supplémentaire de naissance, arrêts de travail au 1er septembre 2026) ; net-entreprises.fr (fiches DSN).",
    ],
    notes:
      "Les liens complets figurent dans le livret de l'animateur (support/ACTUALITE_PAIE_JUIN_SEPTEMBRE_2026.md). " +
      "Vérifier les textes postérieurs au 12 septembre 2026 avant chaque animation.",
  },
  {
    kind: "closing",
    title: "Merci",
    subtitle: "Évaluation à chaud, remise du support et de la check-list de rentrée",
    meta: "Prochaine actualité paie : les mesures de la LFSS 2027 et le bulletin clarifié, janvier 2027",
    notes:
      "Distribuer le questionnaire d'évaluation. Rappeler que le support est mis à jour à chaque texte nouveau et " +
      "qu'une version actualisée sera envoyée après la publication de la LFSS 2027.",
  },
];

module.exports = { SLIDES, FOOTER };
