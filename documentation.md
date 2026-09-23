# Documentation du Projet

## 1. Présentation du Projet

**CyberPaint** (aussi présenté sous les noms **PAINT.SYS v3.0**, **CyberPaint 3D Studio v3.8** et **Hyper-Canvas**) est un site vitrine multi-pages dédié à un studio de peinture 3D fictif, au style rétro-futuriste et néo-brutaliste.

Le projet simule l’interface d’un logiciel de création « hard-edged » : couleurs plates, absence de dégradés, reliefs isométriques, ombres portées nettes et esthétique inspirée des outils type Deluxe Paint. Il s’agit d’un **prototype front-end statique** à vocation démonstrative et marketing, et non d’une application de dessin fonctionnelle.

| Élément | Détail |
|---------|--------|
| **Nom commercial** | CyberPaint / PAINT.SYS |
| **Type** | Site vitrine multi-pages (MPA) |
| **Langue de l’interface** | Français (contenu) ; attribut HTML `lang="en"` |
| **Public cible** | Démonstration UI/UX, portfolio design, présentation produit fictif |
| **Backend** | Aucun |

---

## 2. Objectifs du Projet

1. **Présenter** une identité visuelle forte (studio 3D rétro-hardware) via une interface immersive.
2. **Simuler** un environnement de création (outil-rack, palette, viewport Three.js, paramètres de pinceau).
3. **Documenter la fiction produit** : manifeste, historique (2021–2025), équipe, modules et grilles tarifaires.
4. **Offrir un parcours utilisateur** clair : Studio → À propos → Services → Contact.
5. **Démontrer** l’intégration de Three.js dans une page marketing sans framework lourd.
6. **Assurer** une expérience responsive (desktop prioritaire, adaptation progressive mobile/tablette).

---

## 3. Technologies Utilisées

| Couche | Technologie | Usage |
|--------|-------------|--------|
| Structure | HTML5 | Pages et contenu |
| Styles | Tailwind CSS (CDN Play) | Utilitaires, grille, thème sombre |
| Styles | `css/site.css` | Animations, états actifs, accessibilité motion |
| Scripts | JavaScript vanilla (`js/site.js` + scripts inline) | Interactions chrome et pages |
| 3D | Three.js **r125** (CDN Google Ajax Libraries) | Scène WebGL sur la page Studio |
| Typographie | Google Fonts — Inter, JetBrains Mono, Space Grotesk | Corps, code, titres |
| Icônes | Material Symbols Outlined | TOOL-RACK et UI |
| Hébergement assets | CDN externes | Fonts, Tailwind, Three.js |

**Non utilisés :** Node.js, npm, bundler (Vite/Webpack), framework React/Vue, base de données, API REST, Formspree/EmailJS, CMS.

### Palette de marque (accents)

| Couleur | Hex | Rôle |
|---------|-----|------|
| Cyan | `#00F0FF` | Primaire / accent actif |
| Jaune | `#FFE600` / `#FDE400` | Secondaire / CTA |
| Magenta | `#FF007A` | Accent tertiaire |
| Lime | `#00E676` | Statut / succès |
| Orange | `#FF7A00` | Accent décoratif |
| Surfaces | `#111317`, `#0C0E11` | Fonds sombre |

---

## 4. Structure du Projet

```
Paint_website/
├── index.html          # Page Studio (cockpit 3D + Three.js)
├── propos.html         # À propos (manifeste, timeline, équipe)
├── services.html       # Modules & tarification
├── contact.html        # Formulaire de contact & infos QG
├── documentation.md    # Documentation du projet (ce fichier)
├── css/
│   └── site.css        # Animations et styles partagés
├── js/
│   └── site.js         # Logique chrome partagée
└── three.js/
    └── code.html       # Démo Three.js autonome (même scène)
```

| Fichier | Rôle |
|---------|------|
| `index.html` | Interface principale « CYBERPAINT 3D STUDIO v3.8 » avec viewport WebGL |
| `propos.html` | Manifeste, polyèdre CSS 3D interactif, historique, équipe |
| `services.html` | Quatre modules (MTR-01 à MTR-04) et trois plans tarifaires |
| `contact.html` | Canal de contact 3D, formulaire, panneaux techniques |
| `css/site.css` | Keyframes, `.tool-active`, `.reveal-on-scroll`, `prefers-reduced-motion` |
| `js/site.js` | TOOL-RACK, palette, EXPORT, FLIP 3D, scroll reveal |
| `three.js/code.html` | Bac à sable Three.js plein écran (réutilisable hors shell) |

---

## 5. Installation et Configuration

### Prérequis

- Un navigateur moderne (Chrome, Firefox, Edge, Safari récents)
- Une connexion Internet (chargement des CDN : Tailwind, fonts, Three.js)

### Aucune installation de dépendances

Le projet ne contient pas de `package.json`. Aucune commande `npm install` n’est requise.

### Lancement

**Option A — Ouverture directe**

1. Ouvrir le dossier `Paint_website`
2. Double-cliquer sur `index.html` (ou l’ouvrir dans le navigateur)

**Option B — Serveur local (recommandé)**

```bash
# Exemple avec npx (si Node.js est installé)
npx --yes serve .

# Ou avec Python
python -m http.server 8080
```

Puis accéder à `http://localhost:3000` (ou le port indiqué) / `http://localhost:8080`.

### Déploiement

Tout hébergeur de fichiers statiques convient : GitHub Pages, Netlify, Vercel, nginx, Apache, etc. Il suffit de publier le contenu du dossier tel quel.

---

## 6. Configuration de l’Environnement

| Élément | État |
|---------|------|
| Fichier `.env` | Absent |
| Clés API | Aucune |
| Variables d’environnement | Aucune |
| Endpoint formulaire | Aucun (soumission simulée côté client) |
| Analytics | Aucun |
| Cartographie | Aucune |

### Coordonnées affichées (contenu fictif, en dur dans le HTML)

| Type | Valeur |
|------|--------|
| Téléphone | `+33 (0)1 89 20 40 3D` |
| Matrix | `#cyberpaint:matrix.org` |
| Siège | Secteur 07 // Tour Isométrique B-44, Boulevard des Matrices Solides, 75011 Paris, FR |
| Clé PGP | Bloc décoratif « CYBERPAINT PUBLIC KEY » (`==VOXEL-HASH-2025`) |

Pour brancher un vrai backend (email, CRM), il faudrait remplacer le `preventDefault` du formulaire et ajouter un endpoint sécurisé (voir section 13).

---

## 7. Fonctionnalités

### 7.1 Studio (`index.html`)

- Ruban de commande : titre **CYBERPAINT 3D STUDIO v3.8**, badges STAGE / CANVAS / COLOR-DEPTH
- Modes de viewport (UI) : ORTHO, PERSPECTIVE 3D, WIREFRAME, RAY-TRACE FLAT
- Panneau **TOOL PARAMETERS** : poids de trait (1–128 px), dureté, opacité, motifs dither 8-bit, extrusion, formes de brosse
- **Viewport Three.js** : cube, cylindre, prisme, icosaèdre, mini-cubes en orbite, HUD CAD
- Panneau calques (Poly-Prism, Iso-Cylinder, Vector-Cube, Background) + actions ADD / MERGE / EXTRUDE (présentation)
- Palette 28 couleurs solides + INVERT / MONOCHROME
- Lecture mock des coordonnées curseur

### 7.2 À propos (`propos.html`)

- Manifeste « Architecture & Vision 3D »
- Polyèdre CSS 3D : rotation manuelle (drag), ROT Y±, SPIN AUTO
- Timeline **PHASE_01** (2021) → **PHASE_05** (2025)
- Équipe : Dr. Elena Vance, Kaelen Voss, Maya Lin, Tarek Sol
- Bannière de certification + CTA vers Studio / Services

### 7.3 Services (`services.html`)

| Code | Module |
|------|--------|
| MTR-01 | Moteur Pinceau |
| MTR-02 | Extrusion Volumétrique |
| MTR-03 | Typographie Spatiale |
| MTR-04 | Sélection Quantique |

| Plan | Prix (affiché) |
|------|----------------|
| PIXEL ESSENTIAL | 0 € |
| HYPER-CHISEL STUDIO | 29 € |
| MAINFRAME CLUSTER | 99 € / nœud / an |

CTA vers Contact, Studio et page À propos (« Documentation SDK »).

### 7.4 Contact (`contact.html`)

- Formulaire « Canal de contact 3D »
- Types de signal : PROJET STUDIO, LICENCE CHISEL, SUPPORT MOTEUR, AUTRE VECTEUR
- Panneaux QG Paris, statut moteur, copie PGP, swatches chromatiques
- Notice de succès simulée après envoi

### 7.5 Démo Three.js (`three.js/code.html`)

Scène WebGL autonome, même logique visuelle que l’embed Studio, sans chrome de navigation du site.

### 7.6 Chrome partagé (toutes les pages principales)

- TOOL-RACK (12 outils), PIXEL STEP (1 / 4 / 8)
- Palette footer + taille de brosse
- Boutons EXPORT et FLIP 3D
- Télémétrie décorative (FPS, RAM, ZOOM, XY)

---

## 8. Navigation entre les Pages

### Menu principal (header)

| Lien | Cible | Visible |
|------|-------|---------|
| Logo / marque PAINT.SYS | `index.html` | Toujours |
| Studio | `index.html` | `lg+` |
| À Propos | `propos.html` | `lg+` |
| Services | `services.html` | `lg+` |
| Contact | `contact.html` | `lg+` |

La page active utilise `aria-current="page"` et un style « bouton enfoncé » cyan.

### Liens transverses (CTA)

```
index.html  ←→  propos.html  ←→  services.html  ←→  contact.html
     ↑_______________|_______________|_________________|
```

- **propos** → Studio, Services  
- **services** → Contact (modules/plans), Studio, propos  
- **contact** → navigation header uniquement vers les autres pages  

### Limitation

Sous le breakpoint `lg`, le menu horizontal est masqué (`hidden lg:flex`) **sans menu hamburger alternatif**. La navigation mobile repose alors sur l’URL directe ou l’accès depuis un autre appareil / favori.

---

## 9. Composants et Éléments de l’Interface

### Shell global (présent sur les 4 pages principales)

| Composant | Description |
|-----------|-------------|
| **Header fixe** | Marque, nav, télémétrie (xl), EXPORT, FLIP 3D, avatar |
| **Aside gauche fixe** | TOOL-RACK + PIXEL STEP (`w-28`) |
| **Footer fixe** | HEX actif, grille de swatches, taille brosse, ENGINE: READY |
| **Zone `main`** | Contenu page avec `pl-28 pb-14 pt-14` pour dégager le chrome |

### Composants par page

| Page | Composants notables |
|------|---------------------|
| Studio | Ruban commande, inspecteurs gauche/droite, canvas Three.js, palette bas |
| À propos | Carte manifeste, polyèdre 3D CSS, timeline, cartes équipe |
| Services | Cartes modules MTR, matrice tarifaire 3 colonnes, bandeau CTA |
| Contact | Canvas sheet quadrillé, formulaire, notice `#statusNotice`, panneaux latéraux |

### Langage UI

- Bordures noires 2–3 px, ombres décalées type « push button »
- Pas de modales
- Pas de cartes génériques « soft UI » : relief tactile volontaire
- Icônes Material Symbols pour chaque outil

---

## 10. Boutons et Actions

### Actions globales (`js/site.js`)

| Contrôle | Comportement |
|----------|--------------|
| Boutons TOOL-RACK | Basculent la classe `.tool-active` (UI seule, pas de dessin) |
| PIXEL STEP 1 / 4 / 8 | Style actif cyan |
| Swatches palette | Met à jour `ACTIVE_HEX` et le label footer |
| Brosse − / + | Taille clampée entre 1 et 128 px |
| **EXPORT** | Télécharge `cyberpaint-export.txt` (`ACTIVE_HEX` + taille brosse) |
| **FLIP 3D** | Anime `<main>` avec `.flip-3d-anim` (rotation perspective) |

### Studio (scripts inline)

| Contrôle | Action |
|----------|--------|
| Modes viewport | `selectViewportMode()` — bascule visuelle |
| Stroke weight | `setStrokeWeight()` — met à jour le label |
| `applyColor(hex)` | Couleur FG + code HEX |
| INVERT COLORS | Alterne `#00F0FF` / `#FF007A` |
| MONOCHROME SWITCH | Force `#FFFFFF` |
| Clic canvas Three.js | Burst de rotation |
| Mousemove | Parallaxe / coords mock |

Certains boutons géométrie / SAMPLE SCREEN / EXPORT PALETTE restent **décoratifs** (pas de handler).

### À propos

| Contrôle | Action |
|----------|--------|
| ROT Y− / ROT Y+ | Rotation ±30° sur l’axe Y |
| SPIN: AUTO | Démarre/arrête la rotation `requestAnimationFrame` |
| Drag sur le polyèdre | Rotation X/Y à la souris |

### Contact

| Contrôle | Action |
|----------|--------|
| Type de signal | `selectType()` — style actif |
| TRANSMETTRE | `triggerPhysicalSubmit()` — animation + notice succès |
| COPIER (PGP) | `navigator.clipboard.writeText` + `alert` |
| FERMER | Masque `#statusNotice` |

---

## 11. Animations et Interactions

### CSS (`css/site.css`)

| Classe / keyframe | Effet |
|-------------------|--------|
| `page-in` | Entrée fade + translateY du contenu `main` |
| `float-y` / `float-y-slow` | Flottement décoratif SVG |
| `pulse-edge` | Pulsation de l’ombre (bordure « vivante ») |
| `blink-dot` | Clignotement statut |
| `slide-in-left` | Entrée latérale |
| `press-pop` / `.btn-press:active` | Feedback pression bouton |
| `reveal-on-scroll` → `.is-visible` | Apparition au scroll |
| `flip-3d` | Rotation 360° perspective (FLIP 3D) |

### JavaScript

- **IntersectionObserver** (seuil 0.12) pour le reveal ; fallback : force `.is-visible` si API absente
- Boucle d’animation Three.js continue
- Spin / drag du cube CSS (propos)
- Timeout de « dépression » du bouton TRANSMETTRE (~150 ms)

### Accessibilité motion

```css
@media (prefers-reduced-motion: reduce) { /* animations quasi désactivées */ }
```

---

## 12. Responsive Design

Approche basée sur les breakpoints Tailwind.

| Breakpoint | Comportements principaux |
|------------|--------------------------|
| Défaut | Layout empilé, chrome fixe (header/aside/footer) |
| `sm` | Badges supplémentaires, palette footer élargie |
| `md` | SVG décoratifs, ENGINE READY, grilles 2 colonnes |
| `lg` | Navigation principale visible, layouts densifiés |
| `xl` | Chassis Studio 3 colonnes ; bandeau télémétrie header |

### Points d’attention

- L’aside TOOL-RACK (`w-28`) reste toujours visible et réduit la largeur utile sur petit écran.
- Pas de navigation mobile de remplacement pour le menu `hidden lg:flex`.
- `select-none` sur le `body` limite la sélection de texte (choix esthétique).
- Scrollbars WebKit masquées via `::-webkit-scrollbar { display: none; }`.

---

## 13. Gestion des Formulaires

### Formulaire unique : `#cyberContactForm` (`contact.html`)

| Aspect | Implémentation |
|--------|----------------|
| Soumission | `onsubmit="event.preventDefault(); triggerPhysicalSubmit();"` |
| Champs | Nom, email (`type="email"`), sujet, message — `required` HTML5 |
| Type de demande | Boutons UI (PROJET / LICENCE / SUPPORT / AUTRE) — non envoyés au serveur |
| Case télémétrie | Cochée par défaut, cosmétique |
| Validation custom | Aucune (uniquement native navigateur) |
| Envoi réel | **Aucun** — notice `#statusNotice` avec hash fictif (`PACKET_HASH: 0x9AF4B01`) |

### Pour une mise en production

1. Connecter un service (Formspree, Netlify Forms, API maison).
2. Ajouter CSRF / honeypot / CAPTCHA selon le risque.
3. Persister le type de signal dans un champ `hidden`.
4. Remplacer la notice simulée par un retour serveur authentique.

---

## 14. Gestion des Données

| Source | Statut |
|--------|--------|
| Contenu textuel | Statique, en dur dans les HTML |
| Fichiers JSON / CMS | Absents |
| `localStorage` / `sessionStorage` | Non utilisés |
| Appels `fetch` / API | Aucuns |
| État Three.js | Mémoire volatile de la session navigateur |
| EXPORT | Blob client → fichier `.txt` local uniquement |

Il n’y a **pas de couche de persistance**. Toute évolution (comptes, licences, tickets) nécessiterait un backend et un modèle de données dédiés.

---

## 15. Architecture du Site

```
┌─────────────────────────────────────────────────────────┐
│                    Navigateur client                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  Tailwind   │  │ Google Fonts│  │   Three.js CDN  │  │
│  │    CDN      │  │ + Symbols   │  │     (r125)      │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
│                          │                               │
│  ┌───────────────────────────────────────────────────┐  │
│  │              Shell HTML (dupliqué)                 │  │
│  │   Header + Aside TOOL-RACK + Footer palette        │  │
│  │              + css/site.css + js/site.js           │  │
│  └───────────────────────────────────────────────────┘  │
│       │           │            │            │            │
│  index.html  propos.html  services.html  contact.html    │
│   (+ WebGL)   (+ CSS 3D)   (statique)    (form mock)     │
└─────────────────────────────────────────────────────────┘
```

Caractéristiques architecturales :

- **MPA** (Multi-Page Application), pas de SPA ni de routeur
- Shell de navigation **dupliqué** dans chaque page (pas de partials serveur)
- Meta `shell-type=web_dashboard` ; classe `html.dark` + `darkMode: "class"` Tailwind
- Scripts spécifiques aux pages en inline ; logique commune dans `site.js`
- Origine design probable : export type Google Stitch (marqueurs dans le code Three.js)

---

## 16. Sécurité

### Points positifs / neutres

- Aucun secret, clé API ou mot de passe dans le dépôt
- Le formulaire ne transmet aucune donnée à un serveur tiers
- `use strict` dans `js/site.js`
- Contenu majoritairement statique (surface d’attaque XSS limitée)

### Limitations et risques

| Sujet | Détail |
|-------|--------|
| Soumission factice | L’utilisateur peut croire que le message a été envoyé |
| CDN sans SRI | Tailwind, fonts et Three.js chargés sans hash d’intégrité |
| Pas de CSP | Aucun en-tête Content-Security-Policy (dépend de l’hébergeur) |
| Clipboard | `navigator.clipboard` sans gestion d’erreur / nécessite HTTPS |
| Inline `onclick` | Moins compatible avec une CSP stricte |
| Contenu fictionnel | Téléphone, Matrix, PGP factices — à clarifier si publication publique |

### Recommandations

- Ajouter SRI ou auto-héberger les assets critiques
- Brancher un backend de contact réel avant mise en ligne « produit »
- Servir le site en HTTPS
- Définir une CSP adaptée si les handlers inline sont refactorisés

---

## 17. Compatibilité des Navigateurs

| Fonctionnalité | Exigence |
|----------------|----------|
| Tailwind CDN | JavaScript moderne |
| Three.js / WebGL | GPU WebGL ; `pixelRatio` plafonné à 2 ; ombres `BasicShadowMap` |
| IntersectionObserver | Fallback prévu dans `site.js` |
| Blob / `URL.createObjectURL` | EXPORT (navigateurs récents) |
| Clipboard API | Contexte sécurisé (HTTPS) recommandé |
| CSS 3D (`preserve-3d`) | Page À propos |
| ES6+ | `const`, arrow functions, classes dans la scène Three.js |
| IE / Edge Legacy | **Non supporté** |

### Navigateurs cibles

Chrome, Firefox, Safari et Edge **versions actuelles** (dernières 2 années environ).

### Notes i18n / a11y

- Contenu en français mais `lang="en"` : à corriger en `lang="fr"` pour les lecteurs d’écran et le SEO.
- Respect de `prefers-reduced-motion` dans `site.css`.
- Attributs `aria-current` sur la navigation active.
- Contraste élevé (cyan / jaune sur fond sombre) cohérent avec le thème néo-brutaliste.

---

*Document généré à partir de l’analyse du dépôt Paint_website — CyberPaint 3D Studio v3.8.*
)
