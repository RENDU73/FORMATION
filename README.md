# Formation PAIE BTP 2026

Ce dépôt contient le module **« La conclusion du contrat de travail »**, conçu pour
compléter le support de formation *Les essentiels du BTP* (7 séquences, 124
diapositives).

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

- le **taux de la déduction forfaitaire spécifique** applicable à l'année de la paie
  (calendrier de sortie du BTP : baisse d'un point par an depuis 2024) — source BOSS ;
- le barème conventionnel de rémunération des alternants et les aides à l'alternance ;
- les montants des indemnités de petits et grands déplacements (convention régionale
  ou départementale, limites d'exonération URSSAF) ;
- la nomenclature des motifs de rupture de la norme DSN en vigueur.

Les règles juridiques citées dans le support renvoient à leurs textes : vérifier
qu'aucun texte postérieur ne les a modifiées.
