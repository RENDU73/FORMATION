# -*- coding: utf-8 -*-
"""Contenu pedagogique de la sequence "La conclusion du contrat de travail".

Module de la formation PAIE BTP 2026, concu pour s'inserer dans le support
"Les essentiels du BTP" (apres la sequence 2 - L'embauche).

Chaque entree decrit une diapositive :
  kind    : "sequence" | "sommaire" | "bullets" | "table"
  title   : titre de la diapositive
  body    : puces (bullets) ou lignes du tableau (table)
  alert   : True pour afficher le pictogramme "attention" de la charte
  notes   : commentaires de l'animateur (volet Notes de PowerPoint)
"""

SEQUENCE_TITLE = "Séquence 2 bis"
SEQUENCE_SUBTITLE = "La conclusion du contrat de travail"

SLIDES = [
    dict(
        kind="sequence",
        title=SEQUENCE_TITLE,
        subtitle=SEQUENCE_SUBTITLE,
        notes=(
            "Cette séquence se place volontairement entre la séquence 2 « L’embauche » et la "
            "séquence 3 « Le brut » : l’embauche décrit les formalités, la conclusion du contrat "
            "décrit ce qui est écrit et ce qui sera repris dans le paramétrage de la paie.\n"
            "Numérotée « 2 bis » pour ne pas renuméroter les séquences 3 à 7 du support existant. "
            "Durée indicative : une demi-journée."
        ),
    ),
    dict(
        kind="sommaire",
        title="SOMMAIRE SéQUENCE 2 bis - La conclusion du contrat de travail",
        body=[
            "Le contrat de travail, socle du paramétrage de la paie BTP",
            "Les formalités préalables et l’information écrite du salarié",
            "CDI, CDI de chantier, CDD : choisir le bon contrat",
            "Alternance, intérim, détachement, temps partiel",
            "Les clauses qui pèsent sur le bulletin BTP",
            "Points de vigilance 2026 et check-list",
        ],
        notes=(
            "Annoncer l’objectif : à la sortie de la séquence, le collaborateur doit savoir lire un "
            "contrat de travail BTP et en extraire les données de paramétrage de la paie, et savoir "
            "alerter le client sur les clauses manquantes."
        ),
    ),
    dict(
        kind="bullets",
        title="Le contrat de travail : le socle du paramétrage de la paie",
        body=[
            "La classification et le coefficient déterminent le minimum conventionnel régional",
            "Le lieu de rattachement conditionne petits déplacements, trajet et grand déplacement",
            "La catégorie (ouvrier, ETAM, cadre) commande la CCN, la caisse CP, la retraite et la prévoyance",
            "L’option pour la déduction forfaitaire spécifique se décide à l’embauche",
            "Une erreur au contrat se répète sur chaque bulletin : rappels de salaire, redressement, requalification",
        ],
        notes=(
            "Diapositive d’ouverture : faire le lien avec les séquences suivantes du support.\n"
            "Le contrat n’est pas un sujet « juridique » détaché de la paie : la quasi-totalité des "
            "données du bulletin BTP y trouve sa source. Faire citer par les participants les erreurs "
            "de contrat qu’ils ont déjà eu à corriger en paie."
        ),
    ),
    dict(
        kind="bullets",
        title="La hiérarchie des sources et le contrat de travail",
        body=[
            "Ordre public : le contrat ne peut jamais y déroger, même avec l’accord du salarié",
            "Blocs verrouillés de la branche (art. L. 2253-1) : classifications, minima, période d’essai, CDD, CDI de chantier, temps partiel",
            "Accord d’entreprise : primauté sur les autres thèmes (art. L. 2253-3), toujours demander au client s’il en existe un",
            "Le contrat ne l’emporte que s’il est plus favorable au salarié",
        ],
        notes=(
            "Rappel de la séquence 1. Insister sur le fait que la durée maximale du CDD, ses "
            "renouvellements, le délai de carence, la période d’essai et le recours au CDI de chantier "
            "relèvent des blocs verrouillés de la branche : un accord d’entreprise ne peut pas y déroger "
            "dans un sens moins favorable.\n"
            "Réflexe cabinet : réclamer chaque année les accords d’entreprise du client et les archiver."
        ),
    ),
    dict(
        kind="table",
        title="Identifier la convention collective AVANT de rédiger",
        cols=[4400000, 3400000, 3400000],
        header=["Catégorie", "Bâtiment (IDCC)", "Travaux publics (IDCC)"],
        rows=[
            ["Ouvriers, entreprises jusqu’à 10 salariés", "1596", "1702"],
            ["Ouvriers, entreprises de plus de 10 salariés", "1597", "1702"],
            ["ETAM", "2609", "2614"],
            ["Cadres", "2420 (non étendue)", "3212"],
            ["Le franchissement du seuil de 10 salariés change l’IDCC des ouvriers du bâtiment : avenant au contrat et mise à jour de la DSN", "", ""],
        ],
        merge_last=True,
        notes=(
            "Vérifier systématiquement les IDCC sur le contrat, le bulletin et la DSN : c’est la première "
            "source d’erreur des dossiers repris.\n"
            "Rappeler qu’il faut ajouter la convention régionale ou départementale (salaires minimaux, "
            "indemnités de petits déplacements) et savoir si l’entreprise adhère à un syndicat patronal.\n"
            "La CCN des cadres du bâtiment n’est pas étendue : elle ne s’applique qu’aux adhérents, "
            "sauf extension régionale."
        ),
    ),
    dict(
        kind="bullets",
        title="Les formalités préalables à la conclusion du contrat",
        body=[
            "DPAE à l’URSSAF dans les 8 jours qui précèdent l’embauche",
            "Vérification de l’autorisation de travail pour les ressortissants hors Union européenne",
            "Suivi médical : VIP dans les 3 mois, examen d’aptitude AVANT l’affectation pour les postes à risque",
            "Carte d’identification professionnelle BTP à demander à l’UCF avant l’affectation au chantier",
            "Affiliation à la caisse CIBTP et à PRO BTP, inscription au registre unique du personnel",
        ],
        notes=(
            "Compléter la séquence 2 : ici on se place au moment de la signature, pas de la simple "
            "déclaration.\n"
            "Le suivi individuel renforcé (SIR) impose un examen médical d’aptitude préalable à "
            "l’affectation : amiante, plomb, risque de chute de hauteur lors du montage et démontage "
            "d’échafaudages, etc. Sans avis d’aptitude, le salarié ne peut pas être affecté au poste.\n"
            "La carte BTP est due pour tout salarié affecté à un chantier, apprentis et intérimaires compris."
        ),
    ),
    dict(
        kind="bullets",
        title="L’obligation d’information écrite du salarié (1)",
        body=[
            "Directive (UE) 2019/1152 relative à des conditions de travail transparentes et prévisibles",
            "Transposée par la loi du 9 mars 2023 et le décret n° 2023-1004 du 30 octobre 2023",
            "Due pour tous les contrats, y compris un CDI conclu verbalement",
            "Deux échéances à compter de l’embauche : 7 jours calendaires, puis 1 mois",
            "Remise sur support papier ou électronique, avec conservation de la preuve",
        ],
        notes=(
            "Point réglementaire souvent ignoré des TPE du BTP, alors qu’il s’applique à toutes les "
            "embauches. Le salarié déjà en poste peut également demander ces informations : "
            "l’employeur doit répondre dans les 7 jours.\n"
            "Un contrat de travail écrit complet vaut information, à condition qu’il reprenne "
            "l’ensemble des éléments listés à la diapositive suivante. Sinon, une annexe d’information "
            "est nécessaire."
        ),
    ),
    dict(
        kind="table",
        title="L’obligation d’information écrite du salarié (2)",
        cols=[5600000, 5600000],
        header=["Dans les 7 jours calendaires", "Dans le mois"],
        rows=[
            ["Identité des parties et lieu(x) de travail", "Droit aux congés payés et modalités"],
            ["Intitulé du poste et catégorie d’emploi", "Procédure de rupture et durée du préavis"],
            ["Date d’embauche, durée de la période d’essai", "Droit à la formation"],
            ["Rémunération : éléments, périodicité, versement", "Convention collective applicable"],
            ["Durée du travail et heures supplémentaires", "Organismes de protection sociale"],
        ],
        notes=(
            "Faire le parallèle avec la trame de contrat utilisée au cabinet : la plupart des trames "
            "couvrent la colonne de gauche, rarement la colonne de droite.\n"
            "Sanction : le salarié met d’abord l’employeur en demeure ; à défaut de réponse ou de "
            "régularisation, il peut saisir le conseil de prud’hommes."
        ),
    ),
    dict(
        kind="bullets",
        alert=True,
        title="Information écrite : ce que cela change dans le BTP",
        body=[
            "Le salarié doit être informé nommément de la caisse des congés payés, de PRO BTP et de la caisse de retraite",
            "La convention collective doit être identifiée précisément : catégorie, effectif, région",
            "Les modalités de prise et de paiement des congés par la caisse méritent d’être expliquées",
            "Réflexe cabinet : mettre à jour les trames de contrat et prévoir une annexe d’information",
        ],
        notes=(
            "Spécificité BTP forte : le salarié perçoit ses congés payés d’un tiers, la caisse CIBTP. "
            "L’information sur les organismes de protection sociale prend donc ici tout son sens et "
            "évite une bonne partie des réclamations de salariés en début de contrat.\n"
            "Proposer au client une annexe type « information du salarié » à joindre au contrat : "
            "elle se met à jour une fois par an et couvre l’ensemble des embauches."
        ),
    ),
    dict(
        kind="bullets",
        title="Le CDI dans le BTP",
        body=[
            "La loi n’impose pas d’écrit, mais les conventions collectives BTP imposent la remise d’un document écrit",
            "Ce document porte sur les éléments fondamentaux : durée du travail, classification, rémunération",
            "Depuis 2023, l’information écrite est due dans tous les cas : le contrat écrit devient la seule solution sûre",
            "La période d’essai et la clause de mobilité n’existent que si elles sont écrites",
        ],
        notes=(
            "Reprend et complète la diapositive « L’embauche : le contrat de travail » de la séquence 2.\n"
            "Argument à donner au client : sans écrit, aucune période d’essai, aucune clause de mobilité "
            "chantiers, aucun forfait jours. L’absence d’écrit se paie au premier contentieux."
        ),
    ),
    dict(
        kind="table",
        title="La période d’essai : les durées légales",
        cols=[4600000, 2500000, 2100000, 2000000],
        header=["Catégorie", "Durée initiale", "Renouvellement", "Total maximum"],
        rows=[
            ["Ouvriers et employés", "2 mois", "1 fois", "4 mois"],
            ["Agents de maîtrise et techniciens (ETAM)", "3 mois", "1 fois", "6 mois"],
            ["Cadres", "4 mois", "1 fois", "8 mois"],
            ["CDD", "1 jour par semaine", "Non", "2 semaines ou 1 mois"],
            ["Le renouvellement suppose un accord de branche étendu qui le prévoit ET une clause du contrat", "", "", ""],
        ],
        merge_last=True,
        notes=(
            "CDD : la période d’essai est de 1 jour par semaine de contrat, plafonnée à 2 semaines "
            "lorsque le contrat est au plus de 6 mois, et à 1 mois au-delà.\n"
            "Depuis le 9 septembre 2023, les durées conventionnelles plus longues issues d’accords "
            "antérieurs au 26 juin 2008 ne sont plus applicables (loi du 9 mars 2023) : on revient aux "
            "durées légales ci-dessus."
        ),
    ),
    dict(
        kind="bullets",
        title="La période d’essai : les particularités BTP",
        body=[
            "CCN ouvriers de 1990 : durée plus courte que la loi mais antérieure à 2008, donc écartée",
            "La CCN du bâtiment ne prévoit pas le renouvellement pour les ouvriers : il est impossible",
            "ETAM et cadres BTP : renouvellement possible une fois, à écrire dans le contrat",
            "Délais de prévenance employeur : 24 h, 48 h, 2 semaines puis 1 mois selon la présence",
            "Ouvriers du bâtiment : pas de délai de prévenance conventionnel à la charge du salarié",
        ],
        notes=(
            "Cohérent avec la diapositive « L’embauche : la période d’essai » de la séquence 2 : "
            "y renvoyer et ne pas développer deux fois.\n"
            "Délais de prévenance employeur (art. L. 1221-25) : moins de 8 jours de présence 24 h, "
            "de 8 jours à 1 mois 48 h, après 1 mois 2 semaines, après 3 mois 1 mois. Le délai ne peut "
            "pas prolonger la période d’essai : à défaut, indemnité compensatrice."
        ),
    ),
    dict(
        kind="bullets",
        title="Le CDI de chantier ou d’opération (1)",
        body=[
            "Articles L. 1223-8 et L. 1223-9 : un CDI conclu pour la durée d’un chantier ou d’une opération",
            "Recours ouvert dans le BTP, secteur où il constitue un usage habituel et constant",
            "Écrit obligatoire, désignant le chantier ou l’opération et mentionnant expressément le régime",
            "Le salarié bénéficie de tous les droits du CDI : ancienneté, préavis, indemnité de licenciement",
        ],
        notes=(
            "Le CDI de chantier est l’outil historique du BTP : il permet d’embaucher pour une opération "
            "longue sans supporter la précarité du CDD ni sa limitation de durée.\n"
            "Vérifier si un accord de branche étendu encadre le recours dans la catégorie concernée : "
            "à défaut, c’est l’usage du secteur qui fonde le recours (art. L. 1223-8)."
        ),
    ),
    dict(
        kind="bullets",
        alert=True,
        title="Le CDI de chantier ou d’opération (2)",
        body=[
            "L’achèvement du chantier est un licenciement pour cause réelle et sérieuse reposant sur un motif spécifique",
            "Procédure complète : convocation, entretien préalable, notification, préavis",
            "Indemnité de licenciement due dès 8 mois d’ancienneté, aucune indemnité de précarité",
            "Chantier mal identifié au contrat : requalification et licenciement sans cause réelle et sérieuse",
        ],
        notes=(
            "Point de vigilance majeur : beaucoup d’entreprises croient que le contrat « se termine tout "
            "seul » à la fin du chantier. Il faut engager une procédure de licenciement.\n"
            "En paie : solde de tout compte avec indemnité de licenciement, préavis, attestation "
            "France Travail. Utiliser en DSN le motif de rupture correspondant à la fin de chantier "
            "et vérifier la nomenclature de la norme DSN en vigueur.\n"
            "Prévoir aussi la clause de reclassement lorsque l’accord de branche l’impose."
        ),
    ),
    dict(
        kind="bullets",
        title="Le CDD : les règles à ne pas manquer",
        body=[
            "Cas de recours limitativement énumérés : remplacement, accroissement temporaire d’activité, emploi saisonnier",
            "Le BTP ne figure pas dans les secteurs autorisant le CDD d’usage (art. D. 1242-1)",
            "Écrit obligatoire, transmis au salarié dans les 2 jours ouvrables suivant l’embauche",
            "Durée maximale de 18 mois renouvellements compris et 2 renouvellements, sauf accord de branche étendu",
            "Délai de carence de un tiers ou de la moitié de la durée du contrat précédent, sauf exceptions légales",
        ],
        notes=(
            "L’absence de CDD d’usage dans le BTP est un point clé : un client qui enchaîne les CDD "
            "« le temps du chantier » doit basculer sur un CDI de chantier.\n"
            "Exceptions au délai de carence : nouvelle absence du salarié remplacé, travaux urgents de "
            "sécurité, emploi saisonnier, rupture anticipée à l’initiative du salarié, refus de "
            "renouvellement par le salarié.\n"
            "Transmission tardive de l’écrit : indemnité au salarié pouvant aller jusqu’à un mois de salaire."
        ),
    ),
    dict(
        kind="bullets",
        title="Le CDD : mentions obligatoires et impacts paie",
        body=[
            "Motif précis, terme ou durée minimale, poste occupé, convention collective, rémunération",
            "Nom et adresse de la caisse de retraite complémentaire et de l’organisme de prévoyance",
            "Indemnité de fin de contrat de 10 % de la rémunération brute totale",
            "Pas d’indemnité en cas de refus d’un CDI équivalent, de rupture par le salarié ou de faute grave",
            "Dans le BTP, les congés payés sont réglés par la caisse : l’employeur ne verse pas d’indemnité de 10 % à ce titre",
        ],
        notes=(
            "Un motif imprécis ou une mention manquante entraîne la requalification en CDI, avec "
            "indemnité de requalification d’au moins un mois de salaire.\n"
            "Point à vérifier auprès de la caisse CIBTP du dossier : assiette des cotisations congés "
            "payés applicable à l’indemnité de fin de contrat.\n"
            "Ne pas confondre l’indemnité de fin de contrat de 10 % (précarité) avec l’indemnité "
            "compensatrice de congés payés, qui dans le BTP est versée par la caisse."
        ),
    ),
    dict(
        kind="bullets",
        alert=True,
        title="Le refus d’un CDI par un salarié en CDD",
        body=[
            "Proposition de CDI sur le même emploi, avec une rémunération au moins équivalente, notifiée par écrit",
            "Délai de réflexion raisonnable laissé au salarié et mentionné dans la proposition",
            "En cas de refus, information de France Travail dans le mois, par le portail dédié",
            "Deux refus en douze mois peuvent priver le salarié de l’allocation chômage",
            "Le refus fait également tomber l’indemnité de fin de contrat de 10 %",
        ],
        notes=(
            "Dispositif issu de la loi du 21 décembre 2022 sur le marché du travail et du décret "
            "n° 2023-1307 du 28 décembre 2023.\n"
            "Très fréquent dans le BTP compte tenu du volume de CDD. Le cabinet doit prévenir le client : "
            "sans déclaration à France Travail, l’employeur perd le bénéfice de l’exclusion de "
            "l’indemnité de 10 % et s’expose à une réclamation du salarié.\n"
            "Conserver la proposition écrite, la preuve de sa remise et la réponse du salarié."
        ),
    ),
    dict(
        kind="bullets",
        title="L’alternance dans le BTP",
        body=[
            "Contrat écrit sur formulaire Cerfa, transmis à Constructys pour dépôt",
            "Apprentissage : de 6 mois à 3 ans, prolongation possible en cas d’échec à l’examen",
            "Le barème conventionnel BTP de rémunération est plus favorable que le barème légal",
            "Affiliation à la caisse des congés payés dès lors que le contrat atteint un an",
            "Carte BTP également obligatoire pour les alternants affectés sur chantier",
        ],
        notes=(
            "Renvoyer aux diapositives « Les apprentis » de la séquence 3 pour le détail du calcul "
            "de la rémunération et de la prime de vacances.\n"
            "En cas de non-affiliation initiale à la caisse des congés payés, adresser un exemplaire du "
            "contrat dans les 8 jours suivant l’enregistrement. Si une rupture ramène le contrat à moins "
            "d’un an, les cotisations congés payés sont dues rétroactivement.\n"
            "Actualiser chaque année les seuils d’exonération et le régime social des apprentis : "
            "vérifier le BOSS et la loi de financement de la sécurité sociale applicable."
        ),
    ),
    dict(
        kind="bullets",
        title="Intérim, détachement et sous-traitance",
        body=[
            "Contrat de mission : égalité de rémunération avec un salarié de qualification équivalente",
            "Indemnité de fin de mission et indemnité de congés payés de 10 % versées par l’entreprise de travail temporaire",
            "Cotisation OPPBTP intérimaires assise sur les heures, appelée par la caisse des congés payés",
            "Détachement : déclaration SIPSI, représentant en France, carte BTP obligatoire",
            "Sous-traitance : attestation de vigilance URSSAF tous les 6 mois pour tout contrat d’au moins 5 000 € HT",
        ],
        notes=(
            "L’intérimaire n’est pas salarié de l’entreprise utilisatrice mais son coût et ses heures "
            "impactent le dossier : cotisation OPPBTP intérimaires, effectif, obligations de sécurité.\n"
            "Le devoir de vigilance est une obligation du donneur d’ordre : sans attestation, solidarité "
            "financière en cas de travail dissimulé du sous-traitant. Le cabinet a un devoir de conseil "
            "sur ce point.\n"
            "Salariés détachés : vérifier l’existence de la déclaration préalable de détachement et la "
            "désignation d’un représentant en France."
        ),
    ),
    dict(
        kind="bullets",
        title="Le contrat à temps partiel",
        body=[
            "Durée minimale de 24 heures par semaine, sauf dérogations écrites et motivées",
            "Mentions impératives : durée, répartition, modalités de modification, limites des heures complémentaires",
            "Heures complémentaires majorées de 10 % dans la limite du dixième, puis de 25 %",
            "Mentions absentes : présomption de temps plein et rappel de salaire",
            "En BTP : articuler avec les paniers, l’indemnité de trajet et la réduction du plafond",
        ],
        notes=(
            "Le temps partiel est rare chez les ouvriers de chantier mais fréquent pour les postes "
            "administratifs et les conjoints collaborateurs des TPE : c’est là que se trouvent les "
            "contrats mal rédigés.\n"
            "Dérogations à la durée minimale : demande écrite et motivée du salarié, étudiant de moins "
            "de 26 ans, accord de branche étendu, contrats de moins de 7 jours et remplacements.\n"
            "En paie : ne pas oublier la proratisation du plafond de sécurité sociale."
        ),
    ),
    dict(
        kind="bullets",
        title="Les clauses qui pèsent sur le bulletin BTP (1)",
        body=[
            "Classification, coefficient et position : base du minimum conventionnel régional",
            "Lieu de rattachement administratif : point de départ des zones de petits déplacements",
            "Clause de mobilité chantiers : sans elle, tout changement de lieu est une modification du contrat",
            "Convention individuelle de forfait en jours : écrite, ETAM à partir de la position F et cadres",
            "Durée du travail de référence et traitement des heures supplémentaires",
        ],
        notes=(
            "Diapositive centrale de la séquence : c’est ici que le contrat rencontre le bulletin.\n"
            "Le lieu de rattachement administratif est déterminant : il sert à mesurer les zones "
            "concentriques des indemnités de petits déplacements et à apprécier le dépassement du "
            "temps normal de trajet (Cass. soc. 18 octobre 2017, n° 16-13.281).\n"
            "Forfait jours : rappeler la majoration du minimum conventionnel et l’obligation de suivi "
            "de la charge de travail et du droit à la déconnexion."
        ),
    ),
    dict(
        kind="bullets",
        alert=True,
        title="Les clauses qui pèsent sur le bulletin BTP (2) : la DFS",
        body=[
            "La déduction forfaitaire spécifique est une option de l’employeur, pas une clause opposable au salarié",
            "Depuis 2022, consentement du salarié requis : accord collectif, avis du CSE ou accord individuel annuel",
            "Abattement dégressif d’un point par an dans le BTP jusqu’à sa suppression",
            "L’employeur doit pouvoir prouver que le salarié supporte effectivement des frais",
            "Pratiquer l’abattement sans respecter la procédure caractérise un travail dissimulé",
        ],
        notes=(
            "Renvoyer à la séquence 4 pour le calcul et l’impact sur les bases.\n"
            "Le contrat peut informer le salarié de l’application de la DFS, mais ne peut pas valoir "
            "consentement définitif : le consentement se recueille chaque année et le salarié peut "
            "s’y opposer.\n"
            "Le calendrier de sortie de la DFS dans le BTP prévoit une baisse d’un point par an à "
            "compter de 2024, à partir d’un taux de 10 %, jusqu’à extinction. VÉRIFIER LE TAUX "
            "APPLICABLE À L’ANNÉE DE LA PAIE DANS LE BOSS avant l’animation."
        ),
    ),
    dict(
        kind="bullets",
        title="Les autres clauses à sécuriser",
        body=[
            "Vêtements de travail et EPI : à la charge de l’employeur, leur entretien est un frais professionnel",
            "Clause de non-concurrence : contrepartie financière obligatoire et soumise à cotisations",
            "Astreintes, forfait d’heures supplémentaires, 13e mois : à écrire pour être opposables",
            "Prévoyance et frais de santé : informer le salarié des organismes et des garanties",
            "Utilisation d’un véhicule de l’entreprise : distinguer l’outil de travail de l’avantage en nature",
        ],
        notes=(
            "Le BOSS assimile désormais l’entretien des vêtements de travail à un frais professionnel : "
            "en cas d’application de la DFS, la prime de salissure est réintégrée dans le brut abattu "
            "(voir séquence 4).\n"
            "Véhicule : si le salarié ne peut pas l’utiliser à titre personnel, ce n’est pas un avantage "
            "en nature ; l’écrire dans le contrat ou dans une note de service et pouvoir le prouver."
        ),
    ),
    dict(
        kind="table",
        title="Quel contrat pour quel besoin ?",
        cols=[2500000, 2900000, 3200000, 2600000],
        header=["Contrat", "Écrit", "Fin du contrat", "Indemnité de fin"],
        rows=[
            ["CDI", "Imposé par la CCN BTP", "Rupture de droit commun", "Indemnité de licenciement"],
            ["CDI de chantier", "Obligatoire", "Achèvement du chantier : licenciement", "Indemnité de licenciement"],
            ["CDD", "Obligatoire, sous 2 jours ouvrables", "Terme ou fin de l’objet", "10 % sauf exceptions"],
            ["Intérim", "Obligatoire, établi par l’ETT", "Fin de mission", "IFM et ICCP versées par l’ETT"],
            ["Apprentissage", "Obligatoire, formulaire Cerfa", "Terme du cycle de formation", "Aucune"],
        ],
        notes=(
            "Diapositive de synthèse à utiliser comme grille de conseil au client.\n"
            "Message clé : pour un besoin lié à un chantier long et identifié, le CDI de chantier est "
            "plus sûr et moins coûteux que l’enchaînement de CDD, qui est de surcroît impossible à "
            "fonder sur l’usage dans le BTP."
        ),
    ),
    dict(
        kind="bullets",
        alert=True,
        title="Points de vigilance 2026",
        body=[
            "Trames de contrat à mettre à jour au regard de l’obligation d’information écrite",
            "DFS : recueillir chaque année le consentement et appliquer le taux de l’année",
            "Refus d’un CDI par un salarié en CDD : ne pas oublier la déclaration à France Travail",
            "Franchissement du seuil de 10 salariés : changer d’IDCC et régulariser la DSN",
            "Carte BTP et suivi médical renforcé : conditions d’accès au chantier",
        ],
        notes=(
            "Avant chaque animation, actualiser les valeurs chiffrées : taux de DFS de l’année, "
            "barèmes de rémunération des alternants, aides à l’alternance, montants des indemnités "
            "de petits et grands déplacements.\n"
            "Sources à consulter : BOSS, site de l’URSSAF, caisse CIBTP de la région, PRO BTP, "
            "conventions collectives régionales ou départementales."
        ),
    ),
    dict(
        kind="bullets",
        title="Check-list du collaborateur paie à la conclusion du contrat",
        body=[
            "Catégorie, effectif, région : la bonne convention collective est-elle identifiée ?",
            "Classification et salaire : le minimum conventionnel régional est-il respecté ?",
            "Lieu de rattachement : les zones de déplacement sont-elles exploitables ?",
            "Période d’essai, mobilité, forfait jours : les clauses sont-elles écrites ?",
            "DPAE, caisse CP, PRO BTP, carte BTP, suivi médical : les formalités sont-elles faites ?",
        ],
        notes=(
            "Distribuer cette check-list en fin de séquence. Elle sert de trame d’audit à l’entrée "
            "d’un nouveau dossier BTP et de support au devoir de conseil du cabinet.\n"
            "Conseil : conserver au dossier la preuve de chaque point, notamment le consentement DFS "
            "et l’information écrite du salarié."
        ),
    ),
    dict(
        kind="bullets",
        title="La conclusion du contrat : exercice",
        body=[
            "Cas 1 : une entreprise de 8 ouvriers embauche pour un chantier de 14 mois. Quel contrat proposer et pourquoi ?",
            "Cas 2 : un CDD de 4 mois pour accroissement d’activité arrive à son terme, le salarié refuse le CDI proposé. Quelles conséquences ?",
            "Cas 3 : un contrat mentionne l’abattement de 10 % sans autre formalité. Quel risque et quelle régularisation ?",
            "Cas 4 : l’effectif passe de 10 à 12 salariés en cours d’année. Que faut-il modifier ?",
        ],
        notes=(
            "Corrigés indicatifs.\n"
            "Cas 1 : CDI de chantier, le CDD d’usage étant exclu dans le BTP et la durée dépassant "
            "18 mois si le chantier se prolonge. Écrit obligatoire désignant le chantier.\n"
            "Cas 2 : proposition écrite du CDI, délai de réflexion, information de France Travail dans "
            "le mois, perte de l’indemnité de fin de contrat de 10 %.\n"
            "Cas 3 : consentement du salarié non recueilli, absence de preuve des frais : redressement "
            "URSSAF et qualification possible de travail dissimulé. Régulariser par la procédure "
            "annuelle de recueil du consentement.\n"
            "Cas 4 : passage de l’IDCC 1596 à l’IDCC 1597 pour les ouvriers du bâtiment, avenant "
            "d’information, mise à jour du paramétrage et de la DSN, vérification des grilles de salaires."
        ),
    ),
]
