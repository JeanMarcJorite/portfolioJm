# Validation de la refonte — 16 septembre 2026

La spécification PROMPT_REDESIGN.md a été lue avant les modifications puis relue intégralement après l'implémentation. La checklist fournie a servi de contrôle final.

## Conformité

| Catégorie | Statut | Contrôle effectué |
| --- | --- | --- |
| Design | CONFORME | Référence consultée, hero composé avec les captures locales, grandes typographies, contraste crème/noir, CTA circulaires et grille asymétrique. |
| Contenu | CONFORME | Comparaison automatisée de tous les exports de data.js avec HEAD, exception limitée à la correction « validationsc ». Coordonnées et présentation centralisées dans profile.js. |
| Navigation | CONFORME | Six ancres, état actif, routes existantes, navigation entre projets et retour aux projets testés. |
| Responsive desktop | CONFORME | Accueil et quatre fiches contrôlés à 1280 et 1440 px ; aucun débordement horizontal mesuré. |
| Responsive tablette | CONFORME | Même contrôle à 768 px ; inspection des sections, médias et modales. |
| Responsive mobile | CONFORME | Même contrôle à 375 px ; menu, hero, projets et navigation clavier contrôlés. |
| Animations | CONFORME | Révélations au scroll observées, transitions de survol et entrée du hero ; règles CSS et composable vérifiés pour prefers-reduced-motion. |
| Interactions | CONFORME | Menu, Échap, thème, ouverture/fermeture des dix captures et des deux calendriers, lecture des deux vidéos. |
| Accessibilité | CONFORME | Un h1 par page, lien d'évitement testé, focus restitué après modale et menu, dialogue natif, textes alternatifs et structure de titres. Calcul des contrastes des textes CSS en thèmes clair et sombre sans échec détecté. |
| Assets | CONFORME | 14 médias d'origine présents et servis en HTTP 200 avec types corrects. Dimensions intrinsèques réservées pour les images. |
| Projets | CONFORME | Quatre fiches existantes, descriptions intégrales, métadonnées, galeries, fonctionnalités, défis et améliorations futures. |
| Expériences | CONFORME | Trois expériences conservées et vérifiées dans les données. |
| Formation | CONFORME | Quatre formations conservées avec dates originales. |
| Compétences | CONFORME | 32 compétences conservées dans quatre catégories. |
| Performance | CONFORME | Aucun ajout de dépendance au projet ; polices système, images différées, vidéos sans autoplay, traitement du scroll limité par requestAnimationFrame. |
| Qualité du code | CONFORME | Composants partagés, données centralisées, description rendue sans v-html, écouteurs nettoyés, formatage effectué et compilation réussie. |
| Dépendances | CONFORME | npm ci réussi ; package.json et package-lock.json inchangés. |
| Lint | NON APPLICABLE | Aucun script ou outil de lint configuré dans le projet initial. |
| TypeScript | NON APPLICABLE | Projet JavaScript sans configuration TypeScript. |
| Tests existants | NON APPLICABLE | Aucune suite de tests existante ; contrôles fonctionnels navigateur et assertions de conservation des données exécutés. |
| Build production | CONFORME | npm run build réussi. |
| Vérification visuelle | CONFORME | Hero, sections éditoriales, projets, fiches, médias, calendriers, contact et menu inspectés pendant les tests. |
| Sécurité | CONFORME | Aucun secret ajouté, aucun .env modifié, liens externes avec noopener noreferrer, suppression du rendu HTML brut des descriptions. |
| Git | CONFORME | État et différences inspectés ; la demande ultérieure de l'utilisateur autorise un commit et un envoi sur une branche GitHub dédiée. |
| Publication et déploiement | CONFORME | Publication GitHub désormais demandée explicitement. Branche dédiée pour ne pas déclencher le workflow de déploiement associé à main. Aucune PR ni aucun déploiement demandé. |
| Conformité globale | CONFORME | Toutes les sections du document prises en compte, aucun blocage de ressource identifié. |

## Portée des vérifications

- Les contrastes ont été calculés à partir des couleurs de texte et des fonds CSS ; il ne s'agit pas d'une certification complète WCAG ni d'une vérification du contenu interne des captures originales.
- Le mode de réduction des animations a été contrôlé dans le CSS, le routeur et le composable ; le réglage système de l'ordinateur n'a pas été modifié.
- Les liens de contact et de réseaux sociaux ont été vérifiés par leur destination exacte ; aucun e-mail, appel ou message externe n'a été envoyé.
- Les périodes et calendriers d'alternance d'origine ont été conservés, même lorsque leurs années ne s'alignent pas avec la période annoncée du futur master.
- Une installation temporaire de npm a permis l'installation et le build malgré l'absence de Node.js dans le PATH. Un lanceur PowerShell local a été ajouté pour les environnements disposant de Node.js.
- npm a signalé le script postinstall d'esbuild comme non autorisé par son réglage par défaut ; le binaire déjà installé a néanmoins permis les builds et le serveur Vite sans erreur.

## Ressources manquantes

Aucune ressource utilisateur nécessaire : le hero emploie le collage des captures prévu par la spécification. EDF et Gestion d'Association utilisent des couvertures typographiques, comme demandé pour les projets sans capture. Aucun portrait, témoignage, chiffre ou lien fictif n'a été créé.

## Publication autorisée

Après la refonte locale, l'utilisateur a demandé de continuer et de poster le résultat sur GitHub. Cette instruction remplace l'interdiction initiale de publication du code. L'envoi est effectué sur une branche dédiée ; le workflow existant ne déploie que les pushes sur main ou un déclenchement manuel. Aucun déploiement ni déclenchement manuel ne fait partie de cette livraison.

Le build final a également été servi et chargé avec vite preview : aucune erreur navigateur ni aucun débordement détecté sur l'accueil.
