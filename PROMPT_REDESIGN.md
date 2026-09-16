# Prompt — Refonte éditoriale du portfolio de Jean-Marc Jorite

Tu es un développeur front-end senior et un designer UI/UX spécialisé en portfolios créatifs. Ta mission est de **refondre entièrement le design du portfolio existant**, sans modifier, résumer, inventer ni supprimer les informations déjà présentes.

## Projet à modifier

- Application existante : Vue 3 + Vite + Vue Router + Tailwind CSS 4.
- Répertoire de travail : le projet courant.
- Source de vérité des contenus : `src/data.js` et les textes déjà présents dans les composants Vue.
- Pages existantes à conserver : page d’accueil et pages de détail des projets.
- Ne change pas la stack et n’ajoute une dépendance que si elle est réellement nécessaire.
- Le projet doit continuer à fonctionner avec :

```bash
npm install
npm run dev
npm run build
```

## Référence artistique

Prends comme référence principale : <https://www.bramvanvugt.com/>

Reproduis fidèlement son **langage visuel, son rythme éditorial et ses principes d’interaction**, sans copier son logo, ses textes, ses photos, ses vidéos, son identité de marque ni son code source. Le résultat doit rester le portfolio personnel de **Jean-Marc Jorite**.

Les caractéristiques essentielles de la référence à adapter sont :

- hero immersif occupant presque tout l’écran ;
- navigation minimale, très légère, superposée au hero puis lisible au scroll ;
- composition asymétrique avec beaucoup d’espace négatif ;
- typographie sans-serif moderne, très grande, compacte et expressive ;
- titres parfois en italique ou légèrement inclinés ;
- contraste marqué entre sections sombres et sections claires ;
- noir profond, blanc cassé et une couleur d’accent orange/rouge ;
- gigantesque mot-symbole ou nom débordant visuellement dans le hero ;
- petits libellés éditoriaux, numéros de section et métadonnées discrètes ;
- boutons et CTA circulaires ;
- projets présentés comme de grandes compositions visuelles, pas comme de petites cartes génériques ;
- séparateurs fins, grilles précises, alignements nets et coins peu arrondis ;
- animations de révélation fluides, sobres et premium ;
- footer final très fort, avec une accroche surdimensionnée et les coordonnées.

## Règle absolue sur les contenus

Conserve **100 % des informations existantes** et leurs valeurs exactes, notamment :

- identité : Jean-Marc Jorite ;
- rôle : développeur informatique ;
- recherche d’alternance en Master MIAGE à partir de septembre 2026 ;
- présentation personnelle ;
- formations et périodes ;
- expériences professionnelles, descriptions, lieux, périodes et technologies ;
- toutes les compétences, regroupées selon les catégories existantes ;
- tous les projets, leurs slugs, titres, catégories, descriptions, dates, durées, équipes, rôles, technologies, descriptions longues, fonctionnalités, difficultés et améliorations futures ;
- toutes les captures d’écran et vidéos existantes ;
- centres d’intérêt ;
- section alternance MIAGE et ses deux calendriers ;
- email, téléphone, GitHub et LinkedIn ;
- routes, ancres, liens, navigation entre projets, modale d’images et lecture des vidéos.

Tu peux corriger une faute évidente ou améliorer une micro-formulation uniquement si le sens et toutes les informations restent strictement identiques. Ne remplace jamais un contenu réel par du lorem ipsum. Ne crée pas de faux témoignage, faux client, faux chiffre, faux projet ou fausse expérience.

## Direction artistique à produire

### 1. Système graphique

Crée un système cohérent inspiré de la référence :

- fond sombre principal : proche de `#121212` ;
- fond clair : blanc cassé chaud proche de `#F1EFE8` ;
- texte sombre : proche de `#121212` ;
- texte clair : proche de `#FFFFFF` ;
- accent unique : orange vif ou rouge orangé proche de `#FF4D2E` ;
- texte secondaire avec une opacité comprise entre 55 % et 70 % ;
- police principale libre et accessible, dans l’esprit de Neue Montreal/Helvetica moderne ; utiliser une police locale ou une alternative web sûre, sans reprendre illégalement une police propriétaire ;
- titres très grands avec `clamp()` et interlignage serré ;
- corps de texte lisible, largeur de ligne maîtrisée et hiérarchie nette ;
- conteneurs larges, marges latérales généreuses et grille responsive de 12 colonnes sur desktop ;
- limiter fortement les ombres, gradients décoratifs, effets néon, glassmorphism et cartes aux coins très arrondis.

Supprime l’esthétique actuelle de dashboard/terminal/bento lorsque celle-ci entre en conflit avec cette direction. Évite l’accumulation de petits blocs encadrés. Donne la priorité aux images, aux grands aplats, aux textes éditoriaux et au rythme vertical.

### 2. Hero

Conçois un hero plein écran ou presque plein écran :

- navigation transparente en haut avec monogramme `JMJ.` et liens vers les sections ;
- nom `JEAN-MARC JORITE` affiché comme une signature typographique géante, partiellement au bord de l’écran mais toujours compréhensible ;
- rôle, formation et statut présentés en petits blocs éditoriaux ;
- texte existant sur la recherche d’alternance conservé ;
- CTA principal vers les projets sous forme de bouton circulaire ou de pastille très expressive ;
- lien GitHub conservé ;
- arrière-plan immersif créé uniquement avec les médias déjà présents, une composition abstraite CSS ou une image personnelle réellement disponible dans le dépôt ;
- ne jamais récupérer ni réutiliser la photo du site de référence.

Si aucune photo personnelle n’existe, construis un hero visuel avec un collage élégant des captures de projets, des aplats et une texture très subtile. Ne génère pas un faux portrait.

### 3. À propos, parcours et expériences

- Transforme cette partie en grande section claire, avec introduction éditoriale et titre surdimensionné.
- Affiche formations et expériences dans une chronologie minimaliste basée sur des lignes, des dates et de grands espacements.
- Évite les cartes répétitives ; utilise plutôt une liste structurée, séparée par des traits fins.
- Mets en valeur la formation actuelle et le stage EDF grâce à la couleur d’accent, sans modifier les contenus.

### 4. Compétences

- Présente les catégories de compétences sous forme de grandes lignes typographiques ou d’un marquee mesuré.
- Conserve toutes les catégories et toutes les technologies.
- Prévois une interaction au survol discrète : variation de couleur, déplacement léger ou apparition d’un index.
- Garde l’ensemble accessible au clavier et parfaitement lisible sans animation.

### 5. Projets

- Fais de cette section le cœur visuel du portfolio.
- Affiche le nombre total de projets et un titre éditorial imposant.
- Chaque projet doit occuper une grande zone, idéalement toute la largeur ou une grille asymétrique alternée.
- Utilise les captures ou vidéos existantes comme visuels principaux lorsqu’elles existent.
- Pour un projet sans image, crée un visuel typographique/CSS cohérent à partir de son titre et de ses technologies ; n’invente pas une capture.
- Affiche clairement : numéro, catégorie, titre, date, courte description et technologies.
- Au survol : zoom d’image très léger, révélation d’un bouton circulaire `Voir le projet` et mouvement fluide.
- Tout le bloc projet doit rester clairement cliquable et pointer vers la route existante.

### 6. Pages de détail des projets

Refonds aussi chaque page projet dans la même direction :

- hero éditorial sombre avec numéro, catégorie, titre géant et métadonnées ;
- description longue intégrale et correctement structurée ;
- grandes captures d’écran en pleine largeur ou en alternance ;
- vidéos lisibles avec contrôles natifs ;
- fonctionnalités, défis et améliorations futures dans une mise en page éditoriale, sans petites cartes de dashboard ;
- modale d’agrandissement des captures conservée ;
- navigation claire vers les autres projets et retour à l’accueil ;
- aucun média ne doit être étiré, rogné de manière gênante ou masquer une information importante.

### 7. Centres d’intérêt et alternance

- Conserve les deux sections et tous leurs contenus.
- Intègre les centres d’intérêt dans une section courte, typographique et respirante.
- Traite l’alternance MIAGE comme un appel important : grande accroche, statut visible et calendriers consultables en grand format.
- Les deux images des calendriers doivent rester accessibles, nettes et agrandissables si nécessaire.

### 8. Contact et footer

- Termine par une grande section sombre inspirée du final de la référence.
- Utilise une accroche surdimensionnée du type `Prêt à travailler ensemble ?`, tout en conservant le message existant sur la recherche d’opportunités.
- Affiche l’email comme CTA principal très visible.
- Conserve téléphone, GitHub et LinkedIn avec leurs URL exactes.
- Ajoute uniquement les mentions de copyright déjà justifiées par le portfolio ; n’invente aucune information légale.

## Navigation et interactions

- Conserve le défilement fluide et la barre de progression si elle reste visuellement cohérente.
- Navigation desktop minimale ; menu mobile plein écran ou panneau propre et accessible.
- L’état actif d’une section doit être perceptible.
- Animations recommandées : apparition par masque, fade + légère translation, scale subtil des médias et révélation progressive des titres.
- Utilise la bibliothèque `motion` déjà installée seulement si elle apporte une vraie valeur ; sinon privilégie CSS et `IntersectionObserver`.
- Toutes les animations doivent respecter `prefers-reduced-motion`.
- Aucun effet ne doit bloquer le scroll, provoquer de saut de mise en page ou ralentir le chargement.

## Responsive et accessibilité

Le résultat doit être excellent à au moins 375 px, 768 px, 1280 px et 1440 px :

- aucun débordement horizontal ;
- aucun titre coupé illisiblement ;
- navigation utilisable au clavier et sur écran tactile ;
- contraste conforme WCAG AA ;
- focus visible sur les liens, boutons et cartes cliquables ;
- structure sémantique correcte avec un seul `h1` par page ;
- textes alternatifs existants conservés et complétés uniquement lorsque nécessaire ;
- boutons avec libellés accessibles ;
- liens externes sécurisés avec `rel="noopener noreferrer"` ;
- médias lazy-loadés quand pertinent ;
- pas de contenu indispensable accessible uniquement au survol.

## Contraintes techniques

- Réutilise les composants et les données existants quand cela reste propre, mais n’hésite pas à réorganiser l’architecture des composants pour obtenir un résultat maintenable.
- Centralise les couleurs, espacements, tailles et timings dans des variables CSS ou dans le thème Tailwind.
- Ne duplique pas les données de `src/data.js` dans les templates.
- Ne casse aucun slug ni aucune route Vue Router.
- Préserve le fonctionnement des ancres depuis une page projet vers l’accueil.
- Évite les valeurs magiques répétées et les styles inline inutiles.
- N’utilise aucune image, vidéo, icône ou police provenant directement du site de référence.
- N’installe pas de framework UI lourd.

## Méthode attendue

1. Inspecte l’ensemble du projet et dresse mentalement la liste des contenus et fonctionnalités à préserver.
2. Analyse la référence visuelle, puis traduis ses principes en un design propre à Jean-Marc.
3. Définis le système graphique global avant de modifier les sections.
4. Refonds la page d’accueil et les pages projet de manière cohérente.
5. Vérifie la navigation, les médias, les modales et les liens.
6. Lance le build et corrige toutes les erreurs.
7. Teste visuellement desktop et mobile, puis corrige les débordements, contrastes et problèmes de lisibilité.

## Critères de validation

La tâche est terminée uniquement si :

- le design évoque clairement la sophistication éditoriale de la référence sans en copier les contenus ou assets ;
- toutes les informations initiales sont encore présentes et exactes ;
- tous les projets et toutes les pages de détail fonctionnent ;
- captures, vidéos et calendriers s’affichent correctement ;
- les coordonnées et liens externes sont intacts ;
- la navigation desktop et mobile est fonctionnelle ;
- le rendu est responsive, accessible et fluide ;
- `npm run build` réussit sans erreur ;
- aucune section ne ressemble à un template générique de dashboard ou à une accumulation de cartes.

À la fin, fournis un résumé court des fichiers modifiés, des choix de design réalisés et des vérifications effectuées.
