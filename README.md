# Portfolio — Jean-Marc Jorite

Portfolio local en Vue 3, Vue Router, Vite et Tailwind CSS 4.

## Lancement

Avec Node.js 22.12+ et npm :

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run build
npm run preview -- --host 127.0.0.1
```

Le site est disponible sur `http://127.0.0.1:5173/portfolioJm/`.
Les routes utilisent le hash, par exemple `#/projet/welabbudget`.
Le chemin de base existant `/portfolioJm/` reste configuré dans Vite.

Sur Windows, le lanceur utilise Node.js installé sur la machine :

```powershell
.\start-local.ps1
# Si le port 5173 est déjà occupé :
.\start-local.ps1 -Port 5174
```

Arrêter le serveur avec Ctrl+C. Le lanceur écoute uniquement sur la machine locale et ne déploie rien.

## Organisation

- `src/data.js` : projets, formations, expériences, compétences, centres d'intérêt et calendriers.
- `src/profile.js` : présentation et coordonnées existantes, centralisées.
- `src/style.css` : variables graphiques, responsive, thèmes et animations.
- `src/styles/experience.css` : séquences d’entrée et interactions animées.
- `src/components/` : sections et composants partagés, notamment les visuels de projets et la modale native.
- `src/pages/ProjectDetail.vue` : fiches projet, descriptions, galeries et vidéos.
- `src/utils/` : résolution des URL sous le chemin de base et dimensions des images.
- `public/images/` et `public/videos/` : médias originaux conservés.

Les projets sans capture disposent d'une couverture typographique. Le hero utilise les captures existantes : aucune photo personnelle supplémentaire n'est nécessaire.
Les calendriers et les périodes de formation ont été conservés tels qu'ils étaient fournis.

## Vérifications

La refonte a été contrôlée dans le navigateur aux largeurs 375, 768, 1280 et 1440 px.

Le projet ne comporte pas de script lint, de configuration TypeScript ni de suite de tests existante.
Le build de production est la vérification technique disponible via npm.
