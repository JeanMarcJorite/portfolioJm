export const projects = [
  {
    slug: "welabbudget",
    title: "WeLabBudget — Gestion budgétaire",
    category: "Développement Web",
    description:
      "Application web de gestion budgétaire pour l'association WeLab Cosmetics. Suivi des dépenses, des budgets et des besoins financiers de l'association.",
    image: "",
    screenshots: [
      {
        src: "/images/welabbudget/01-login.png",
        alt: "Écran de connexion WeLabBudget",
        title: "Connexion",
        description: "Écran d'authentification sécurisé pour accéder à l'espace WeLabBudget.",
      },
      {
        src: "/images/welabbudget/02-dashboard.png",
        alt: "Vue d'ensemble budgétaire",
        title: "Accueil budgétaire",
        description: "Tableau de bord global et commandes rapides.",
      },
      {
        src: "/images/welabbudget/03-depenses-scan.png",
        alt: "Centre de traitement des dépenses avec scan",
        title: "Dépenses & justificatifs",
        description: "Traitement des dépenses avec scan des justificatifs et suivi des flux récents.",
      },
      {
        src: "/images/welabbudget/04-salaires.png",
        alt: "Écran de contrôle de la masse salariale",
        title: "Salaires & contrats",
        description: "Pilotage de la masse salariale et visualisation des contrats en cours.",
      },
      {
        src: "/images/welabbudget/05-recettes-devis.png",
        alt: "Tableau des recettes projets et devis",
        title: "Recettes & devis",
        description: "Vue consolidée des recettes, devis et statuts de suivi commercial.",
      },
      {
        src: "/images/welabbudget/06-editeur-devis.png",
        alt: "Éditeur de devis WeLabBudget",
        title: "Éditeur de devis",
        description: "Création et finalisation de devis avec calcul automatique des montants.",
      },
      {
        src: "/images/welabbudget/07-profil.png",
        alt: "Profil utilisateur et paramètres",
        title: "Profil utilisateur",
        description: "Paramètres du compte utilisateur et gestion des informations personnelles.",
      },
    ],
    tags: ["Symfony", "Angular", "Tailwind CSS", "Docker"],
    date: "2024",
    duration: "1 mois",
    team: "Équipe de 2",
    role: "Développeur FullStack",
    longDescription: `Projet de développement web réalisé en équipe de 2 pour l'association WeLab Cosmetics. L'application permet de centraliser le suivi budgétaire : dépenses, enveloppes de budget et consultation rapide des données financières.

Ce projet m'a permis de mettre en pratique le pattern MVC, l'ORM Doctrine et le moteur de templates Twig dans un contexte concret.

**Réalisations clés :**

- Modélisation de la base de données pour les dépenses et les budgets
- Développement des contrôleurs et routes Symfony
- Création des vues avec Twig et mise en forme CSS
- Mise en place du suivi des dépenses et des enveloppes budgétaires
- Ajout de fonctionnalités de consultation et de filtrage
- Validation des formulaires côté serveur et côté client

**Compétences acquises :** Maîtrise du framework Symfony, compréhension approfondie du pattern MVC, utilisation de l'ORM Doctrine.`,
    features: [
      "Suivi des dépenses et des budgets",
      "Consultation rapide des données financières",
      "Gestion des entités liées à l'association",
      "Validation des formulaires",
      "Interface responsive avec CSS moderne",
      "Pagination des résultats",
    ],
    challenges: [
      "Prise en main du framework Symfony en peu de temps",
      "Conception d'un modèle de données clair pour le budget",
      "Gestion des relations avec Doctrine ORM",
    ],
  },
  {
    slug: "stage-edf-power-bi",
    title: "Stage EDF — Migration Power BI",
    category: "Stage Professionnel",
    description:
      "Migration d'une application web interne vers Power BI pour améliorer le suivi des demandes de travaux et tâches d'ordre de travail. Stage de 10 semaines à Dampierre-en-Burly.",
    image: "",
    tags: ["Power BI", "Power Apps", "Power Automate"],
    date: "Avril — Juin 2025",
    duration: "10 semaines",
    team: "Individuel (encadré)",
    role: "Développeur stagiaire",
    longDescription: `Dans le cadre de mon stage de deuxième année de BUT Informatique, j'ai intégré l'équipe informatique du centre nucléaire de Dampierre-en-Burly (EDF).

Ma mission principale consistait à migrer une application web interne de suivi des demandes de travaux vers la suite Power Platform de Microsoft. L'objectif était d'améliorer l'ergonomie, la fiabilité et l'accessibilité des données pour les équipes terrain.

**Réalisations clés :**
- Analyse de l'application existante et recueil des besoins utilisateurs
- Conception des tableaux de bord Power BI avec visualisations interactives
- Développement de formulaires Power Apps pour la saisie des données
- Mise en place de flux Power Automate pour les notifications et validations
- Tests utilisateurs et formation des équipes à la nouvelle solution

**Résultats :** Réduction de 40% du temps de saisie, meilleure visibilité des indicateurs pour les responsables d'équipe.`,
    features: [
      "Tableaux de bord interactifs Power BI",
      "Formulaires de saisie Power Apps",
      "Flux d'automatisation Power Automate",
      "Notifications automatiques par email",
      "Export de rapports PDF",
    ],
    challenges: [
      "Comprendre le métier et les processus industriels EDF",
      "Gérer la migration des données historiques",
      "Adapter l'interface aux besoins spécifiques des utilisateurs terrain",
    ],
  },
  {
    slug: "app-planification-repas",
    title: "Application Mobile — Nutrigram",
    category: "Développement FullStack",
    description:
      "Application mobile multiplateforme de planification de repas. Intégration de l'API Spoonacular pour récupérer des recettes et projet réalisé sur 5 mois.",
    image: "",
    screenshots: [
      {
        src: "/images/nutrigram/01-accueil.jpg",
        alt: "Écran d'accueil Nutrigram avec suivi des calories",
        title: "Accueil & suivi calories",
        description: "Vue d'ensemble quotidienne avec compteur de calories et suivi du poids.",
      },
      {
        src: "/images/nutrigram/02-plats-recherche.jpg",
        alt: "Écran de recherche de plats Nutrigram",
        title: "Recherche de plats",
        description: "Recherche de recettes et consultation rapide des plats par catégorie.",
      },
      {
        src: "/images/nutrigram/03-calendrier-panier.jpg",
        alt: "Écran calendrier et panier Nutrigram",
        title: "Calendrier & panier",
        description: "Planification des repas via calendrier et accès au panier de courses.",
      },
    ],
    videos: [
      {
        src: "/videos/nutrigram/01-demo-navigation.mp4",
        title: "Démo API Spoonacular",
        description: "Recherche et affichage de recettes récupérées via l'API Spoonacular.",
      },
      {
        src: "/videos/nutrigram/02-demo-spoonacular.mp4",
        title: "Démo Panier",
        description: "Ajout, suppression et gestion des ingrédients dans le panier de courses.",
      },
    ],
    tags: ["Flutter", "Firebase", "SQLite", "Figma"],
    date: "2024",
    duration: "5 mois",
    team: "Individuel",
    role: "Développeur FullStack",
    longDescription: `Projet Personnel réalisé individuellement. L'objectif était de concevoir et développer une application mobile complète de planification de repas.

L'application permet aux utilisateurs de planifier leurs repas de la semaine, de gérer leurs recettes favorites, de récupérer des recettes via l'API Spoonacular, et de générer automatiquement une liste de courses.

**Réalisations clés :**
- Conception des maquettes UI/UX sur Figma
- Développement des interfaces utilisateur avec Flutter
- Implémentation de la base de données locale SQLite pour le stockage hors-lignev  
- Intégration de l'API Spoonacular pour l'affichage et la recherche de recettes
- Intégration de Firebase pour l'authentification et la synchronisation cloud
- Mise en place du système de recherche et filtrage de recettes

**Mon rôle :** En tant que développeur, j'ai piloté seul la conception complète de l'application.`,
    features: [
      "Planification hebdomadaire des repas",
      "Recettes récupérées via l'API Spoonacular",
      "Bibliothèque de recettes avec recherche avancée",
      "Génération automatique de liste de courses",
      "Mode hors-ligne avec SQLite",
      "Synchronisation cloud via Firebase",
      "Thème sombre / clair",
    ],
    challenges: [
      "Gestion complète du projet en autonomie",
      "Gestion du stockage local et de la synchronisation cloud",
    ],
    futureImprovements: [
      "Optimisation des performances sur différents appareils",
      "Gestion des bugs liés à l'utilisation d'API",
      "Ajout d'une section dédiée aux principes des réseaux sociaux",
    ],
  },
  {
    slug: "gestion-association",
    title: "Gestion d'Association",
    category: "Développement Web",
    description:
      "Application web de gestion des activités d'une association. Conception et implémentation des IHM, développement des fonctionnalités. Projet en équipe de 3 sur 2 mois avec méthodologie Scrum.",
    image: "",
    tags: ["Flask", "JavaScript", "SQLite", "Figma", "HTML/CSS"],
    date: "2024",
    duration: "2 mois",
    team: "Équipe de 3",
    role: "Développeur FullStack",
    longDescription: `Projet académique en équipe de 3, réalisé en suivant la méthodologie Scrum. L'application web permet de gérer les activités, membres et événements d'une association.

Nous avons développé une application complète avec le micro-framework Flask (Python), en suivant une architecture MVC. L'interface utilisateur a été conçue pour être intuitive et responsive.

**Réalisations clés :**
- Conception du modèle de données et de l'architecture de l'application
- Développement du backend avec Flask (routes, modèles, API REST)
- Création d'interfaces utilisateur dynamiques avec JavaScript vanilla
- Implémentation du système d'authentification et de gestion des rôles
- Mise en place de la méthodologie Scrum (sprints de 2 semaines, daily meetings)

**Mon rôle :** Développeur FullStack, j'ai travaillé sur l'ensemble de la stack technique, de la base de données aux interfaces utilisateur.`,
    features: [
      "Gestion des membres (inscription, profils, rôles)",
      "Calendrier d'événements interactif",
      "Système de réservation d'activités",
      "Tableau de bord administrateur",
      "Authentification et gestion des permissions",
      "Interface responsive",
    ],
    challenges: [
      "Première expérience avec la méthodologie Scrum",
      "Gestion des droits d'accès et sécurité",
      "Conception d'une interface intuitive pour des utilisateurs non-techniques",
    ],
  },
]

export const skills = {
  langages: ["Java", "JavaScript", "Python", "HTML/CSS", "PHP", "VBA"],
  frameworks: ["Flask", "VueJS", "React", "Angular", "NodeJS", "Flutter", "Symfony"],
  databases: ["MySQL", "MariaDB", "SQLite", "Oracle SQL"],
  tools: ["GitHub", "GitLab", "Figma", "Scrum", "UML", "Power BI", "Linux", "Windows", "Docker"],
}

export const education = [
  {
    period: "2026 — 2028",
    title: "Master MIAGE",
    school: "Parcours en préparation",
    active: false,
  },
  {
    period: "2025 — 2026",
    title: "Licence Informatique en MIAGE",
    school: "IUT d'Orléans",
    active: true,
  },
  {
    period: "2022 — 2025",
    title: "BUT Informatique",
    school: "IUT d'Orléans",
    active: false,
  },
  {
    period: "2022",
    title: "Baccalauréat STI2D",
    school: "Mention Assez Bien — Lycée Jacques-de-Vaucanson, Tours",
    active: false,
  },
]

export const experiences = [
  {
    period: "Avril — Juin 2025 · 10 semaines",
    title: "Stage Développeur — EDF",
    location: "Dampierre-en-Burly",
    description:
      "Migration d'une application web interne vers Power BI pour améliorer le suivi des demandes de travaux et tâches d'ordre de travail.",
    tags: ["Informatique", "Power BI", "Power Apps", "Power Automate"],
  },
  {
    period: "Août 2024",
    title: "Plongeur — Hôtel Restaurant Château Belmont (Job d'été)",
    location: "Tours",
    description:
      "Gestion de la plonge et appui en cuisine dans un environnement de restauration avec rythme soutenu.",
    tags: ["Hors informatique", "Restauration"],
  },
  {
    period: "Juillet 2023",
    title: "Préparateur de commande — DPD (Job d'été)",
    location: "Sublaines",
    description:
      "Préparation de commandes et traitement logistique, avec respect des délais et des consignes de qualité.",
    tags: ["Hors informatique", "Logistique"],
  },
]

export const interests = [
  {
    title: "Musique",
    description: "Je pratique le piano en autodidacte.",
  },
  {
    title: "Sport",
    description: "Le sport m'aide à garder rigueur, discipline et énergie au quotidien.",
  },
  {
    title: "Technologie & innovation",
    description: "Je suis curieux des nouveaux outils et usages numériques pour apprendre en continu.",
  }
]

export const alternanceSection = {
  title: "Alternance MIAGE",
  description:
    "Je suis en recherche active d'une alternance pour mon parcours MIAGE. Voici les calendriers prévisionnels de formation pour M1 et M2.",
  calendars: [
    {
      title: "Calendrier alternance M1 (2025/2026)",
      src: "/images/alternance/m1-2025-2026.png",
      alt: "Calendrier d'alternance MIAGE M1 2025 2026",
    },
    {
      title: "Calendrier alternance M2 (2026/2027)",
      src: "/images/alternance/m2-2026-2027.png",
      alt: "Calendrier d'alternance MIAGE M2 2026 2027",
    },
  ],
}
