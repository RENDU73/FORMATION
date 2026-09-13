# Formation PAIE BTP 2026

Ce dépôt contient deux supports construits sur la charte graphique du support de
formation *Les essentiels du BTP* (7 séquences, 124 diapositives) :

- le module **« La conclusion du contrat de travail »**, qui s'intercale dans ce
  support (séquence 2 bis) ;
- le support autonome **« Prime carburant 2026 et dispositifs de mobilité »**, qui
  présente la prime carburant telle qu'elle s'applique en 2026 et rappelle les
  dispositifs de mobilité domicile-travail avec le plafond d'exonération de chacun.

## Support « Prime carburant 2026 et dispositifs de mobilité »

| Fichier | Contenu |
|---|---|
| `livrables/PRIME_CARBURANT_ET_MOBILITES_2026.pptx` | Le support complet, 22 diapositives, avec les notes de l'animateur |
| `support/PRIME_CARBURANT_ET_DISPOSITIFS_DE_MOBILITE_2026.md` | Support de cours et livret de l'animateur : références, tableaux de plafonds, exemples chiffrés, corrigé de l'exercice |

Plan : contexte 2026 et carte des dispositifs ; prime carburant (définition,
conditions de droit commun, changements 2026, mise en œuvre en paie) ; abonnements de
transports publics (50 % obligatoire, 75 % exonérés en 2025-2026) ; forfait mobilités
durables ; cumuls et exemples chiffrés ; indemnités kilométriques et avantages en
nature liés à la mobilité ; aide de l'État « grands rouleurs » ; synthèse des
plafonds ; points de vigilance ; exercice ; sources.

```bash
python3 scripts/generer_support_mobilites.py source/LES_ESSENTIELS_DU_BTP.pptx livrables/
```

Le contenu est isolé dans `scripts/contenu_mobilites.py`. Les valeurs 2026 de la
prime carburant (plafond de 600 €, conditions suspendues) reposent sur le communiqué
du BOSS du 6 août 2026 : vérifier la publication des textes avant chaque animation.

## Module « La conclusion du contrat de travail »

Le module s'intercale en **séquence 2 bis**, entre la séquence 2 (« L'embauche »,
qui traite des formalités) et la séquence 3 (« Le brut »). Cette numérotation évite
de renuméroter les séquences 3 à 7 du support existant.

## Livrables

| Fichier | Contenu |
|---|---|
| `livrables/MODULE_CONTRATS_DE_TRAVAIL_BTP_2026.pptx` | Les 27 diapositives de la séquence, seules |
| `livrables/LES_ESSENTIELS_DU_BTP_2026_avec_contrats.pptx` | Le support complet, séquence déjà insérée (151 diapositives) |
| `support/SEQUENCE_2BIS_CONCLUSION_DU_CONTRAT_DE_TRAVAIL.md` | Support de cours et livret de l'animateur, avec les références juridiques et les corrigés |

Les deux fichiers PowerPoint sont construits à partir des gabarits du support
d'origine : masque, thème, polices, couleurs, tableaux et pictogramme « attention »
sont ceux de la charte existante. Chaque diapositive comporte des **notes de
l'animateur**.

### Insérer le module dans un autre exemplaire du support

Dans PowerPoint : `Accueil` → `Nouvelle diapositive` → `Réutiliser les
diapositives`, sélectionner `MODULE_CONTRATS_DE_TRAVAIL_BTP_2026.pptx` et cocher
**Conserver la mise en forme source**. Insérer après la diapositive « L'embauche :
Exercice ».

## Plan de la séquence

1. Intercalaire et sommaire de séquence
2. Le contrat de travail, socle du paramétrage de la paie BTP
3. La hiérarchie des sources — identifier la convention collective avant de rédiger
4. Les formalités préalables à la conclusion du contrat
5. L'obligation d'information écrite du salarié (directive UE 2019/1152)
6. Le CDI et la période d'essai dans le BTP
7. Le CDI de chantier ou d'opération
8. Le CDD : recours, mentions, indemnité de 10 %, refus d'un CDI
9. Alternance, intérim, détachement, sous-traitance, temps partiel
10. Les clauses qui pèsent sur le bulletin BTP, dont la DFS
11. Tableau de synthèse, points de vigilance 2026, check-list et exercice

## Régénérer les fichiers

```bash
python3 scripts/generer_module_contrats.py source/LES_ESSENTIELS_DU_BTP.pptx livrables/
```

Le contenu pédagogique est isolé dans `scripts/contenu_contrats.py` : modifier une
diapositive revient à modifier une entrée de la liste `SLIDES`, puis à relancer la
commande ci-dessus. Le script calcule les tailles de police pour que rien ne
déborde, insère les notes de l'animateur, met à jour le sommaire général et nettoie
le paquet.

Dépendances : `python-pptx`, `lxml`, `defusedxml` (`pip install python-pptx
markitdown[pptx]`).

## À actualiser avant chaque animation

Les valeurs chiffrées évoluent chaque année. Vérifier notamment :

- pour le support mobilité : la publication du décret et de l'arrêté 2026 sur la
  prime carburant, une éventuelle prorogation en loi de finances pour 2027, les
  montants des avantages en nature véhicule et borne, le barème kilométrique ;

- le **taux de la déduction forfaitaire spécifique** applicable à l'année de la paie
  (calendrier de sortie du BTP : baisse d'un point par an depuis 2024) — source BOSS ;
- le barème conventionnel de rémunération des alternants et les aides à l'alternance ;
- les montants des indemnités de petits et grands déplacements (convention régionale
  ou départementale, limites d'exonération URSSAF) ;
- la nomenclature des motifs de rupture de la norme DSN en vigueur.

Les règles juridiques citées dans le support renvoient à leurs textes : vérifier
qu'aucun texte postérieur ne les a modifiées.
