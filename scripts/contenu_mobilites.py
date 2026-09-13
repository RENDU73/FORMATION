# -*- coding: utf-8 -*-
"""Contenu pedagogique du support "Prime carburant 2026 et dispositifs de mobilite".

Support autonome de la formation PAIE 2026, construit sur la charte du support
"Les essentiels du BTP". Il presente la prime carburant (prime transport) telle
qu'elle s'applique en 2026 et rappelle l'ensemble des dispositifs de prise en
charge des trajets domicile-travail, avec le plafond d'exoneration de chacun.

Chaque entree decrit une diapositive :
  kind    : "sequence" | "sommaire" | "bullets" | "table"
  title   : titre de la diapositive
  body    : puces (bullets) ou lignes du tableau (table)
  alert   : True pour afficher le pictogramme "attention" de la charte
  notes   : commentaires de l'animateur (volet Notes de PowerPoint)

Etat du droit : septembre 2026. Les valeurs 2026 de la prime carburant reposent
sur le communique du BOSS du 6 aout 2026 (application admise par anticipation) ;
verifier la publication des textes avant chaque animation.
"""

SEQUENCE_TITLE = "Prime carburant 2026"
SEQUENCE_SUBTITLE = "et dispositifs de mobilité domicile-travail : règles et plafonds"

SLIDES = [
    dict(
        kind="sequence",
        title=SEQUENCE_TITLE,
        subtitle=SEQUENCE_SUBTITLE,
        notes=(
            "Support autonome, utilisable en réunion d’information clients ou en formation "
            "interne des gestionnaires de paie. Durée indicative : 1 h 30 avec l’exercice.\n"
            "Fil conducteur : la « prime carburant » n’est pas un dispositif nouveau, c’est la "
            "prime transport de l’article L. 3261-3 du code du travail, dont le plafond et les "
            "conditions sont assouplis pour la seule année 2026. Le support replace cette mesure "
            "dans le panorama complet des dispositifs de mobilité domicile-travail."
        ),
    ),
    dict(
        kind="sommaire",
        title="SOMMAIRE - Prime carburant 2026 et dispositifs de mobilité",
        body=[
            "Le contexte 2026 et la carte des dispositifs",
            "La prime carburant : définition, conditions, plafonds 2026",
            "La prise en charge des abonnements de transports publics",
            "Le forfait mobilités durables",
            "Les cumuls et les autres dispositifs liés à la mobilité",
            "Synthèse des plafonds, points de vigilance et exercice",
        ],
        notes=(
            "Annoncer l’objectif : à la sortie, le participant sait quel dispositif proposer à un "
            "client selon la situation de ses salariés, connaît le plafond d’exonération de chacun "
            "et sait contrôler les cumuls salarié par salarié."
        ),
    ),
    dict(
        kind="bullets",
        title="Le contexte 2026 : pourquoi parle-t-on de « prime carburant » ?",
        body=[
            "Hausse des prix des carburants au printemps 2026, liée au conflit au Moyen-Orient",
            "Réponse du Gouvernement : une aide de l’État aux travailleurs « grands rouleurs » et un assouplissement de la prime transport",
            "Plafond d’exonération de la prise en charge du carburant doublé : 300 € → 600 € par an et par salarié",
            "Conditions d’accès suspendues jusqu’au 31 décembre 2026 : tous les salariés peuvent en bénéficier",
            "Mesure confirmée par le BOSS (communiqué du 6 août 2026), applicable par anticipation dans l’attente des textes",
        ],
        notes=(
            "La « prime carburant » désigne dans la presse deux choses différentes : l’aide de "
            "l’État de 100 € versée aux travailleurs modestes (hors paie, voir la diapositive "
            "dédiée) et la prime transport versée par l’employeur, seule concernée par la paie.\n"
            "Base réglementaire annoncée : un décret en Conseil d’État et un arrêté modifiant "
            "l’arrêté du 4 septembre 2025 relatif aux frais professionnels. Le BOSS admet par "
            "tolérance que les employeurs appliquent dès maintenant le plafond de 600 € et la "
            "suspension des conditions dans leurs déclarations 2026.\n"
            "Point de vigilance : au 1er janvier 2027, retour au plafond de 300 € et aux conditions "
            "de droit commun, sauf nouvelle prorogation."
        ),
    ),
    dict(
        kind="table",
        title="La carte des dispositifs de mobilité domicile-travail en 2026",
        cols=[3300000, 2500000, 3200000, 2269133],
        header=["Dispositif", "Caractère", "Ce qui est pris en charge", "Texte"],
        rows=[
            ["Abonnements de transports publics et vélos en location publique", "Obligatoire (50 %)", "Abonnements bus, train, métro, tram, vélos publics", "Art. L. 3261-2 CT"],
            ["Prime transport, dite prime carburant", "Facultatif", "Carburant, recharge électrique, hybride rechargeable, hydrogène", "Art. L. 3261-3 CT"],
            ["Forfait mobilités durables (FMD)", "Facultatif", "Vélo, covoiturage, trottinette, autopartage, tickets unitaires", "Art. L. 3261-3-1 CT"],
            ["Indemnités kilométriques domicile-travail", "Facultatif, frais professionnels", "Usage contraint du véhicule personnel", "BOSS, frais professionnels"],
            ["Aide de l’État « grands rouleurs »", "Hors paie", "100 € par véhicule, sous conditions de ressources", "impots.gouv.fr"],
        ],
        notes=(
            "Trois familles : une obligation (les abonnements), deux dispositifs facultatifs "
            "exonérés sous plafond (prime transport et FMD), et des régimes voisins à ne pas "
            "confondre (IK, avantages en nature, aide de l’État).\n"
            "Rappeler que le champ est le trajet entre la résidence habituelle et le lieu de "
            "travail : les déplacements professionnels relèvent des frais professionnels classiques.\n"
            "Pour les clients du BTP : les indemnités conventionnelles de trajet et de transport "
            "(petits déplacements) sont un régime distinct, traité dans le support « Les essentiels "
            "du BTP »."
        ),
    ),
    dict(
        kind="bullets",
        title="La prime carburant : de quoi parle-t-on exactement ?",
        body=[
            "Nom légal : prise en charge des frais de carburant et d’alimentation des véhicules électriques, hybrides rechargeables ou hydrogène (art. L. 3261-3 CT)",
            "Trajet couvert : résidence habituelle ↔ lieu de travail, avec le véhicule personnel du salarié",
            "Dispositif facultatif : l’employeur décide de le mettre en place et fixe librement le montant",
            "Exonération de cotisations, de CSG-CRDS et d’impôt sur le revenu dans la limite d’un plafond annuel",
            "Bénéficie à tous les salariés qui remplissent les conditions, selon les mêmes modalités",
        ],
        notes=(
            "Insister sur le vocabulaire : les logiciels de paie parlent de « prime transport », "
            "l’URSSAF de « prime de carburant », le code du travail de « prise en charge des frais "
            "de carburant ». C’est un seul et même dispositif.\n"
            "Le montant est libre (forfait mensuel, forfait annuel, remboursement) mais "
            "l’exonération s’arrête au plafond ; au-delà, la fraction excédentaire est un "
            "complément de salaire soumis à cotisations et imposable.\n"
            "Le principe d’égalité impose d’appliquer les mêmes règles à tous les salariés placés "
            "dans la même situation : pas de prime réservée à une catégorie sans critère objectif."
        ),
    ),
    dict(
        kind="bullets",
        title="Prime carburant : les conditions de droit commun (hors 2026)",
        body=[
            "Résidence ou lieu de travail dans une commune non desservie par les transports collectifs réguliers, ou hors d’un périmètre de plan de mobilité obligatoire",
            "Ou horaires de travail particuliers rendant impossible l’usage des transports collectifs",
            "Exclus : salariés disposant d’un véhicule mis à disposition avec carburant pris en charge, logés sans frais de transport, ou transportés gratuitement par l’employeur",
            "Non-cumul avec la prise en charge obligatoire des abonnements de transports publics",
            "Plafond de droit commun : 600 € par an, dont 300 € maximum pour le carburant",
        ],
        notes=(
            "Ces conditions sont celles des articles L. 3261-3 et R. 3261-11 et suivants du code "
            "du travail. Elles redeviendront applicables au 1er janvier 2027, sauf prorogation : "
            "il faut donc les connaître pour préparer les clients.\n"
            "Les exclusions (véhicule de fonction avec carburant, logement, transport gratuit) ne "
            "sont pas suspendues en 2026 : elles continuent de s’appliquer.\n"
            "Le plafond de 600 € dont 300 € de carburant est celui de l’arrêté du 4 septembre 2025 "
            "relatif aux frais professionnels, applicable depuis le 1er janvier 2025."
        ),
    ),
    dict(
        kind="bullets",
        alert=True,
        title="Prime carburant : ce qui change en 2026",
        body=[
            "Plafond carburant porté de 300 € à 600 € par an et par salarié, pour les primes versées jusqu’au 31 décembre 2026",
            "Condition de non-desserte par les transports collectifs suspendue : plus besoin de justifier la zone ou les horaires",
            "Cumul autorisé avec la prise en charge à 50 % des abonnements de transports publics",
            "Les autres exclusions demeurent : véhicule de fonction avec carburant, logement de fonction, transport gratuit",
            "Application admise dès maintenant par le BOSS (communiqué du 6 août 2026), textes réglementaires en cours de publication",
        ],
        notes=(
            "Mesure temporaire : elle vise les primes versées entre le 1er janvier et le 31 "
            "décembre 2026. Un employeur qui a versé une prime carburant depuis janvier 2026 peut "
            "régulariser l’exonération sur l’année.\n"
            "La condition de non-desserte est suspendue, mais le salarié doit toujours utiliser "
            "son véhicule personnel pour venir travailler : conserver l’attestation.\n"
            "Le plafond de 600 € pour la recharge électrique, hybride rechargeable ou hydrogène "
            "est inchangé. Le plafond global de la prime transport reste de 600 €.\n"
            "Vérifier la publication du décret et de l’arrêté modificatif avant chaque animation "
            "et actualiser cette diapositive si les textes s’écartent du communiqué."
        ),
    ),
    dict(
        kind="table",
        title="Prime carburant : plafonds et conditions, droit commun et 2026",
        cols=[4400000, 3400000, 3469133],
        header=["Règle", "Droit commun (2025, puis 2027)", "Année 2026"],
        rows=[
            ["Plafond carburant", "300 € par an", "600 € par an"],
            ["Plafond recharge électrique, hybride rechargeable, hydrogène", "600 € par an", "600 € par an"],
            ["Plafond global de la prime transport", "600 € par an", "600 € par an"],
            ["Condition de non-desserte ou d’horaires particuliers", "Exigée", "Suspendue"],
            ["Cumul avec les abonnements de transports publics", "Interdit", "Autorisé"],
            ["Cumul avec le forfait mobilités durables", "600 € au total, dont 300 € de carburant", "600 € au total, carburant jusqu’à 600 €"],
        ],
        notes=(
            "Lecture du tableau : en 2026, seule la sous-limite « carburant » bouge, de 300 € à "
            "600 €. Elle rejoint le plafond global de la prime transport, qui reste fixé à 600 €.\n"
            "Cumul avec le FMD : le communiqué de l’URSSAF maintient la limite globale de 600 € "
            "pour l’ensemble prime transport + FMD. Retenir cette lecture prudente : un salarié qui "
            "perçoit 600 € de prime carburant n’a plus de marge d’exonération pour un FMD.\n"
            "Le plafond s’apprécie par employeur : un salarié multi-employeurs peut recevoir une "
            "prime exonérée de chacun d’eux."
        ),
    ),
    dict(
        kind="bullets",
        title="Prime carburant : mise en œuvre dans le dossier de paie",
        body=[
            "Mise en place par accord d’entreprise ou de branche, à défaut par décision unilatérale après consultation du CSE",
            "Justificatifs annuels : attestation sur l’honneur du salarié, carte grise, justificatif de domicile ; conservés pour le contrôle URSSAF",
            "Pas de justificatif de dépense à l’euro près : le montant est forfaitaire, dans la limite exonérée",
            "Temps partiel : prise en charge intégrale à partir du mi-temps, au prorata en deçà",
            "Au-delà du plafond, ou si le salarié déduit ses frais réels : la prime devient un salaire soumis et imposable",
        ],
        notes=(
            "Bulletin : la prime figure hors assiette de cotisations et de CSG-CRDS, et hors net "
            "imposable, à hauteur du plafond ; la fraction excédentaire est réintégrée en brut.\n"
            "Le versement peut prendre la forme d’un titre-mobilité dématérialisé (art. L. 3261-5 "
            "CT, décret n° 2021-1663 du 16 décembre 2021), sur le modèle du titre-restaurant.\n"
            "Fiscalité : exonération d’impôt sur le revenu dans les mêmes limites (art. 81, 19° "
            "ter du CGI). Le salarié qui opte pour la déduction des frais réels doit réintégrer la "
            "prime dans son revenu imposable : le signaler au client pour l’information des salariés.\n"
            "Réflexe cabinet : mettre en place un modèle d’attestation annuelle et un état de suivi "
            "des cumuls par salarié."
        ),
    ),
    dict(
        kind="bullets",
        title="Les abonnements de transports publics : l’obligation de 50 %",
        body=[
            "Prise en charge obligatoire de 50 % du prix des abonnements de transports publics et de services publics de location de vélos",
            "Abonnements annuels, mensuels ou hebdomadaires, sur la base du tarif de 2e classe et du trajet le plus court",
            "Remboursement au plus tard le mois suivant, sur présentation du titre ou d’une attestation",
            "Temps partiel : prise en charge intégrale à partir du mi-temps, au prorata en deçà",
            "La part obligatoire de 50 % est exonérée de cotisations, de CSG-CRDS et d’impôt sur le revenu",
        ],
        notes=(
            "Articles L. 3261-2 et R. 3261-1 à R. 3261-10 du code du travail. Aucune condition "
            "de distance ou de zone : l’obligation s’applique à tous les employeurs, quel que soit "
            "l’effectif, dès lors que le salarié présente un abonnement.\n"
            "Ne sont pas concernés les titres à l’unité (ils relèvent du FMD) ni les salariés "
            "dont le transport est assuré gratuitement par l’employeur.\n"
            "Le remboursement est proportionnel au titre : un abonnement annuel se rembourse "
            "mensuellement à hauteur de 50 % de son douzième."
        ),
    ),
    dict(
        kind="bullets",
        alert=True,
        title="Abonnements de transports publics : jusqu’à 75 % exonérés en 2026",
        body=[
            "Prise en charge facultative au-delà de 50 % : exonérée jusqu’à 75 % du prix de l’abonnement pour les années 2025 et 2026",
            "Prorogation par l’article 68 de la loi de finances pour 2026 (loi n° 2026-103 du 19 février 2026)",
            "Aucune justification d’éloignement n’est exigée pour cette part de 25 % supplémentaires",
            "Au-delà de 75 % : exonération seulement si l’éloignement du domicile ne résulte pas de convenances personnelles",
            "Cumul possible avec le FMD dans la limite globale de 900 € par an, ou du montant de la prise en charge de l’abonnement si elle est supérieure",
        ],
        notes=(
            "Le mécanisme des 75 % est né en 2022 (loi de finances rectificative du 16 août 2022) "
            "et a été prorogé chaque année depuis. La loi de finances pour 2026 le proroge pour les "
            "revenus 2025 et 2026 : sans nouvelle prorogation, retour au régime du BOSS en 2027 "
            "(au-delà de 50 %, exonération sous condition d’éloignement justifié).\n"
            "Exemple : abonnement TER de 1 200 € par an ; l’employeur prend 75 %, soit 900 € "
            "exonérés. S’il prend 100 %, les 300 € restants sont exonérés seulement si le salarié "
            "ne peut pas se rapprocher (mutation, emploi du conjoint, etc.).\n"
            "En 2026, un salarié peut cumuler l’abonnement pris en charge et une prime carburant, "
            "par exemple pour rejoindre la gare en voiture."
        ),
    ),
    dict(
        kind="bullets",
        title="Le forfait mobilités durables (FMD) : modes éligibles",
        body=[
            "Vélo et vélo à assistance électrique, personnel ou en location",
            "Covoiturage, en tant que conducteur ou passager",
            "Engins de déplacement personnels motorisés (trottinette, gyroroue…), personnels ou en libre-service",
            "Autopartage de véhicules à faibles émissions, cyclomoteurs et motos électriques en location ou libre-service",
            "Transports publics hors abonnement : tickets à l’unité",
        ],
        notes=(
            "Article L. 3261-3-1 et articles R. 3261-13-1 à R. 3261-13-3 du code du travail. "
            "Le FMD est facultatif : accord collectif ou décision unilatérale après consultation "
            "du CSE, mêmes conditions pour tous les salariés.\n"
            "La liste des modes s’est élargie en 2022 aux engins personnels motorisés détenus par "
            "le salarié (auparavant seulement en location).\n"
            "Justificatif : attestation sur l’honneur annuelle du salarié ou justificatif "
            "d’utilisation (facture de plateforme de covoiturage, attestation du registre de "
            "preuve de covoiturage). Aucun nombre minimal de jours n’est fixé par la loi dans le "
            "secteur privé, sauf disposition de l’accord ou de la décision unilatérale."
        ),
    ),
    dict(
        kind="table",
        title="Le forfait mobilités durables : plafonds d’exonération 2026",
        cols=[5200000, 3000000, 3069133],
        header=["Situation", "Plafond annuel exonéré", "Base"],
        rows=[
            ["FMD seul", "600 €", "Arrêté du 4 sept. 2025"],
            ["FMD + prise en charge d’un abonnement de transports publics", "900 €, ou montant de la prise en charge de l’abonnement si supérieur", "Art. 81, 19° ter CGI"],
            ["FMD + prime transport (carburant ou recharge)", "600 € au total", "Arrêté du 4 sept. 2025"],
            ["FMD versé par titre-mobilité", "Mêmes plafonds", "Art. L. 3261-5 CT"],
            ["Agents publics, pour mémoire", "300 €", "Décret n° 2020-543"],
        ],
        notes=(
            "Depuis le 1er janvier 2025, le plafond du FMD est de 600 € (500 € auparavant) et le "
            "cumul avec l’abonnement de transports publics est exonéré jusqu’à 900 € (800 € "
            "auparavant). Ces montants sont pérennes, contrairement au plafond carburant de 2026.\n"
            "Lorsque la prise en charge de l’abonnement dépasse 900 € à elle seule, le FMD n’est "
            "plus exonéré : le plafond de 900 € est un plafond global, l’abonnement s’impute en "
            "premier.\n"
            "Exonération sociale et fiscale dans les mêmes limites ; même règle que pour la prime "
            "transport en cas d’option du salarié pour les frais réels."
        ),
    ),
    dict(
        kind="table",
        title="Les cumuls autorisés en 2026, salarié par salarié",
        cols=[4600000, 2400000, 4269133],
        header=["Cumul", "Possible ?", "Limite d’exonération"],
        rows=[
            ["Abonnement de transports publics + FMD", "Oui", "900 € au total, ou montant de la prise en charge de l’abonnement si supérieur"],
            ["Abonnement de transports publics + prime carburant", "Oui, en 2026 seulement", "Chaque dispositif dans sa propre limite"],
            ["FMD + prime transport", "Oui", "600 € au total"],
            ["Prime transport + indemnités kilométriques domicile-travail", "Non, pour les mêmes frais", "Pas de double prise en charge"],
            ["FMD + vélo mis à disposition par l’employeur", "Oui", "Avantage en nature du vélo neutralisé"],
            ["Toute fraction au-delà des plafonds : complément de salaire soumis à cotisations, à CSG-CRDS et à l’impôt sur le revenu", "", ""],
        ],
        merge_last=True,
        notes=(
            "Le contrôle des cumuls se fait salarié par salarié et par année civile. Prévoir un "
            "état de suivi dans le dossier de paie : abonnement pris en charge, FMD, prime "
            "transport, avec le cumul annuel et la fraction soumise.\n"
            "Le cumul abonnement + prime carburant n’est possible qu’en 2026, du fait de la "
            "suspension de l’interdiction de cumul de l’article L. 3261-3. Il redevient interdit "
            "au 1er janvier 2027 sauf prorogation.\n"
            "Le plafond de la prime transport s’apprécie par employeur ; celui du FMD également."
        ),
    ),
    dict(
        kind="table",
        title="Exemples chiffrés : ce qui est exonéré, ce qui est soumis",
        cols=[5000000, 3200000, 3069133],
        header=["Situation du salarié (montants annuels)", "Exonéré", "Soumis"],
        rows=[
            ["Zone rurale, véhicule diesel, prime carburant de 50 € par mois (600 €)", "600 € en 2026 (300 € en 2025)", "0 € en 2026 (300 € en 2025)"],
            ["Abonnement TER de 1 200 €, pris en charge à 75 % (900 €)", "900 €", "0 €"],
            ["Vélo : FMD de 500 € + abonnement de 1 000 € pris en charge à 50 % (500 €)", "900 €", "100 €"],
            ["Covoiturage : FMD de 200 € + prime carburant de 500 €", "600 €", "100 €"],
            ["Véhicule de fonction avec carburant payé par l’employeur, prime carburant de 300 €", "0 €", "300 €"],
        ],
        notes=(
            "Cas 1 : illustre le doublement du plafond carburant en 2026.\n"
            "Cas 2 : la part de 75 % est exonérée sans justification d’éloignement (LF 2026, "
            "art. 68).\n"
            "Cas 3 : le cumul abonnement + FMD est plafonné à 900 € ; l’abonnement s’impute en "
            "premier, la fraction du FMD au-delà (100 €) est soumise.\n"
            "Cas 4 : le cumul FMD + prime transport est plafonné à 600 € au total.\n"
            "Cas 5 : l’exclusion des salariés disposant d’un véhicule de fonction avec carburant "
            "pris en charge n’est pas suspendue en 2026 : la prime est intégralement soumise.\n"
            "Faire calculer les cas par les participants avant d’afficher les réponses."
        ),
    ),
    dict(
        kind="bullets",
        title="Les indemnités kilométriques domicile-travail : un régime distinct",
        body=[
            "Régime des frais professionnels : l’employeur rembourse l’usage du véhicule personnel, sur justificatifs",
            "Exonérées si le salarié est contraint d’utiliser son véhicule : pas de transports collectifs ou horaires incompatibles",
            "L’éloignement du domicile ne doit pas résulter de convenances personnelles",
            "Dans la limite du barème kilométrique fiscal, inchangé en 2026 ; majoration de 20 % pour les véhicules électriques",
            "Pas de cumul avec la prime carburant pour les mêmes frais : choisir l’un ou l’autre",
        ],
        notes=(
            "Différence de logique : la prime transport est un forfait sous plafond sans "
            "justificatif de dépense ; les IK remboursent une dépense réelle, kilomètre par "
            "kilomètre, sur la base du barème et des justificatifs (carte grise, distance, jours "
            "travaillés).\n"
            "Le barème kilométrique 2026 reprend celui de 2025, sans revalorisation. Exemple pour "
            "une voiture de 5 CV jusqu’à 5 000 km : 0,636 € par kilomètre.\n"
            "Les IK conviennent aux salariés qui parcourent de longues distances : au-delà de "
            "600 € par an, elles restent exonérées dès lors que l’usage contraint du véhicule est "
            "établi, alors que la prime carburant est plafonnée."
        ),
    ),
    dict(
        kind="bullets",
        title="Autres dispositifs liés à la mobilité : les avantages en nature",
        body=[
            "Vélo mis à disposition du salarié : avantage en nature neutralisé, cumulable avec le FMD (BOSS, opposable depuis le 1er juin 2026)",
            "Véhicule 100 % électrique de fonction : abattement de 70 % sur l’évaluation forfaitaire, plafonné à 4 641,60 € en 2026, jusqu’au 31 décembre 2027",
            "Électricité de recharge payée par l’employeur : exclue de l’avantage en nature jusqu’au 31 décembre 2027",
            "Borne installée au domicile et restituée : pas d’avantage en nature ; non restituée : 50 % des dépenses, plafonné à 1 057,10 € en 2026",
            "Réduction d’impôt sur les sociétés de 25 % pour les flottes de vélos, jusqu’au 31 décembre 2027",
        ],
        notes=(
            "Ces dispositifs ne sont pas des prises en charge de frais mais des avantages en "
            "nature à régime de faveur ; ils complètent la politique mobilité d’un client.\n"
            "Véhicule électrique : le régime issu de l’arrêté du 25 février 2025 s’applique aux "
            "véhicules mis à disposition depuis le 1er février 2025 et respectant la condition "
            "d’éco-score. Le salarié disposant d’un véhicule de fonction avec carburant ou "
            "électricité pris en charge est exclu de la prime transport.\n"
            "Borne au domicile non restituée : abattement porté à 75 % et plafond à 1 585,50 € si "
            "la borne a plus de 5 ans.\n"
            "Ces montants sont revalorisés chaque année : vérifier le BOSS avant animation."
        ),
    ),
    dict(
        kind="bullets",
        title="L’aide de l’État aux travailleurs « grands rouleurs » (hors paie)",
        body=[
            "Aide forfaitaire de 100 € par véhicule, versée par l’État et non par l’employeur ; montant doublé le 21 mai 2026",
            "Salariés et indépendants utilisant un véhicule thermique ou hybride non rechargeable pour travailler",
            "Revenu fiscal de référence 2024 inférieur ou égal à 16 880 € par part",
            "Plus de 15 km par trajet domicile-travail, ou plus de 8 000 km professionnels par an",
            "Demande déclarative sur impots.gouv.fr, guichet prolongé jusqu’au 30 septembre 2026",
        ],
        notes=(
            "Aucun traitement en paie : l’aide est demandée par le salarié lui-même et versée par "
            "la DGFiP. Le cabinet peut néanmoins informer les clients pour qu’ils relaient "
            "l’information à leurs salariés avant la fermeture du guichet.\n"
            "L’aide couvre les dépenses de carburant engagées d’avril à août 2026 et se cumule "
            "avec la prime carburant de l’employeur.\n"
            "Pour les indépendants clients du cabinet : la demande relève du chef d’entreprise "
            "lui-même, avec les mêmes conditions de ressources."
        ),
    ),
    dict(
        kind="table",
        title="Synthèse : les plafonds d’exonération 2026",
        cols=[3900000, 4300000, 3069133],
        header=["Dispositif", "Plafond d’exonération 2026", "Cumul principal"],
        rows=[
            ["Abonnement de transports publics", "50 % obligatoire exonéré ; jusqu’à 75 % exonéré en 2025 et 2026", "FMD : 900 € au total"],
            ["Prime carburant", "600 € par an (300 € hors 2026)", "FMD : 600 € au total ; abonnement : oui en 2026"],
            ["Prime recharge électrique, hybride rechargeable, hydrogène", "600 € par an", "FMD : 600 € au total"],
            ["Forfait mobilités durables", "600 € par an ; 900 € avec un abonnement", "Prime transport : 600 € au total"],
            ["Indemnités kilométriques domicile-travail", "Barème kilométrique fiscal, sous condition d’usage contraint", "Pas avec la prime carburant"],
            ["Aide de l’État « grands rouleurs »", "100 € par véhicule, sous conditions de ressources", "Cumulable, hors paie"],
        ],
        notes=(
            "Diapositive à remettre aux participants comme mémo. Tous les plafonds sont annuels, "
            "par salarié et par employeur, et s’entendent en exonération sociale et fiscale.\n"
            "Les deux montants temporaires sont le plafond carburant de 600 € et l’exonération "
            "à 75 % de l’abonnement : ils expirent au 31 décembre 2026 sauf prorogation."
        ),
    ),
    dict(
        kind="bullets",
        alert=True,
        title="Points de vigilance 2026 et check-list cabinet",
        body=[
            "Formaliser la mise en place : accord ou décision unilatérale après consultation du CSE, mêmes conditions pour tous",
            "Collecter chaque année les attestations sur l’honneur et les justificatifs, les archiver dans le dossier",
            "Tenir un état de suivi des cumuls par salarié : abonnement, FMD, prime transport, fraction soumise",
            "Régulariser les primes versées depuis janvier 2026 au nouveau plafond de 600 €",
            "Anticiper le 1er janvier 2027 : retour à 300 € et aux conditions de droit commun, informer les clients dès le dernier trimestre 2026",
        ],
        notes=(
            "Vérifier la publication du décret et de l’arrêté modifiant l’arrêté du 4 septembre "
            "2025 : en cas d’écart avec le communiqué du BOSS, le texte prime.\n"
            "Vérifier en paie que la prime est bien paramétrée hors assiette et hors net imposable, "
            "avec un plafond annuel glissant et non mensuel : un salarié entré en cours d’année "
            "bénéficie du plafond entier.\n"
            "Clients du BTP : ne pas confondre la prime carburant avec les indemnités de trajet et "
            "de transport des petits déplacements, qui relèvent des conventions collectives "
            "régionales et des limites d’exonération propres aux frais professionnels."
        ),
    ),
    dict(
        kind="bullets",
        title="Exercice : vrai ou faux ?",
        body=[
            "1. En 2026, un salarié qui habite en centre-ville desservi par le métro peut recevoir une prime carburant exonérée",
            "2. Un salarié peut cumuler 600 € de prime carburant et 300 € de FMD en franchise totale",
            "3. L’employeur qui prend en charge 75 % d’un abonnement de train doit justifier l’éloignement du salarié",
            "4. Le plafond de 600 € s’apprécie tous employeurs confondus pour un salarié multi-employeurs",
            "5. Un salarié disposant d’un véhicule de fonction avec carburant payé peut recevoir la prime carburant exonérée",
        ],
        notes=(
            "Corrigé :\n"
            "1. VRAI en 2026 : la condition de non-desserte est suspendue jusqu’au 31 décembre "
            "2026, à condition qu’il utilise son véhicule personnel pour venir travailler. FAUX "
            "en droit commun.\n"
            "2. FAUX : le cumul FMD + prime transport est plafonné à 600 € au total ; les 300 € de "
            "FMD sont soumis.\n"
            "3. FAUX pour 2025 et 2026 : jusqu’à 75 %, aucune justification n’est exigée (LF 2026, "
            "art. 68). Au-delà de 75 %, la justification d’éloignement redevient nécessaire.\n"
            "4. FAUX : le plafond s’apprécie par employeur.\n"
            "5. FAUX : cette exclusion n’est pas suspendue en 2026 ; la prime est intégralement "
            "soumise."
        ),
    ),
    dict(
        kind="bullets",
        title="Sources et textes de référence",
        body=[
            "Code du travail : art. L. 3261-1 à L. 3261-5, R. 3261-1 à R. 3261-15 ; CGI : art. 81, 19° ter",
            "Arrêté du 4 septembre 2025 relatif aux frais professionnels, et ses textes modificatifs pour 2026",
            "Loi de finances pour 2026, n° 2026-103 du 19 février 2026, art. 68 (abonnements de transports publics)",
            "BOSS, rubrique Frais professionnels, chapitre Frais de transport domicile-lieu de travail ; communiqué du 6 août 2026",
            "urssaf.fr, actualité « Prime de carburant : mesures applicables en 2026 » ; impots.gouv.fr pour l’aide « grands rouleurs »",
        ],
        notes=(
            "Toutes les valeurs de ce support sont à jour de septembre 2026. Avant chaque "
            "animation, vérifier sur le BOSS : le plafond carburant, la publication des textes "
            "2026, les montants des avantages en nature véhicule et borne, et une éventuelle "
            "prorogation des mesures temporaires en loi de finances pour 2027."
        ),
    ),
]
