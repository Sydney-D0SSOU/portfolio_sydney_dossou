# Guide — architecture du projet

Ce document décrit l’organisation du portfolio **Next.js** dans le dossier `web/`. La racine du dépôt (`portfolio/`) contient en plus les sources de contenu (Markdown, PDF, captures) et les briefs ; l’application exécutable vit sous `web/`.

---

## 1. Vue d’ensemble

| Couche | Rôle |
|--------|------|
| **Next.js App Router** | Routage, layout global, page d’accueil. |
| **Providers client** | Thème clair/sombre et langue EN/FR, sans casser l’hydratation. |
| **Composants métier** | Header, sections de la home, composition de la page. |
| **shadcn/ui** | Primitives UI (bouton, carte, badge, switch, etc.) dans `components/ui/`. |
| **Design tokens** | Variables CSS dans `globals.css` (palettes dark/light, glass, nav). |
| **Contenu** | Textes bilingues centralisés dans `lib/copy.ts`. |

Stack principale : **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Phosphor Icons**.

---

## 2. Arborescence utile

```
web/
├── public/                    # Fichiers statiques servis à la racine URL
│   └── images/profile/        # Portraits (1.png … 6.png, etc.)
├── src/
│   ├── app/                   # App Router Next.js
│   │   ├── layout.tsx         # Shell HTML : fonts, providers, header
│   │   ├── page.tsx           # Point d’entrée : rend la home
│   │   └── globals.css        # Tailwind + thème + utilitaires (.glass-panel, .nav-pill)
│   ├── components/
│   │   ├── providers/         # Contextes globaux (client)
│   │   │   ├── theme-provider.tsx
│   │   │   └── locale-provider.tsx
│   │   ├── ui/                # Composants shadcn (Button, Card, Switch, …)
│   │   ├── site-header.tsx    # Navigation, thème, langue
│   │   └── home-content.tsx   # Sections hero, about, stack, projets, expérience, contact
│   └── lib/
│       ├── copy.ts            # Chaînes EN/FR pour l’UI
│       └── utils.ts           # Utilitaire `cn()` (fusion de classes)
├── components.json            # Config shadcn
├── package.json
└── tsconfig.json              # Alias `@/*` → `src/*`
```

À la racine du repo (`../` par rapport à `web/`) : `prompt.md`, `sections.md`, CV en PDF, `code1.md`, etc. — matière première pour enrichir le contenu plus tard, hors bundle Next sauf si copié dans `public/`.

---

## 3. Flux de rendu (App Router)

1. **`layout.tsx`** (Server Component possible, ici il compose surtout des clients)  
   - Définit `<html>`, polices (**Inter**, **Playfair Display**, **JetBrains Mono**).  
   - Enveloppe l’app avec **`ThemeProvider`** puis **`LocaleProvider`**.  
   - Affiche **`SiteHeader`** au-dessus de **`children`** (la page).

2. **`page.tsx`**  
   - Exporte la page d’accueil en important **`HomeContent`** (Client Component).

3. **`home-content.tsx`**  
   - Assemble les sections (`#home`, `#about`, `#stack`, …) avec les textes issus de **`copyByLocale`** selon la langue active.

---

## 4. Providers (état global côté client)

### `theme-provider.tsx`

- Gère **`light` | `dark`** (classe `.dark` sur `<html>`).
- Persistance via **`localStorage`** (`theme`).
- Pas d’injection de `<script>` tierce : évite les warnings Next/React liés à certains wrappers de thème.

### `locale-provider.tsx`

- Langue **`en` | `fr`**, défaut aligné SSR sur **`en`** pour l’hydratation.
- Synchronisation client via **`useSyncExternalStore`** + événement custom + `storage`, lecture/écriture **`localStorage`** (`locale`).

---

## 5. Composants

| Fichier | Responsabilité |
|---------|----------------|
| **`site-header.tsx`** | Logo, nav en capsule (`.nav-pill`), lien actif, toggle langue, toggle thème (avec garde `mounted` pour le switch). |
| **`home-content.tsx`** | Hero (image profil, CTA), cartes glass, grille projets/experience, contact. |
| **`components/ui/*`** | Primitives shadcn : styles cohérents, accessibilité de base. |

Convention : la logique d’affichage riche et les interactions restent dans des composants **client** (`"use client"`) lorsqu’ils touchent au thème, à la locale ou au DOM.

---

## 6. Contenu i18n

**`lib/copy.ts`** expose un objet `copyByLocale` avec les clés utilisées par le header et la home (titres, nav, CTA, paragraphes).  

Pour ajouter une langue ou une section : étendre ce fichier puis brancher les nouvelles clés dans les composants concernés.

---

## 7. Styles et design system

**`globals.css`** :

- Import **Tailwind v4**, **tw-animate-css**, **shadcn/tailwind.css**.
- Variables **`:root`** (light) et **`.dark`** (dark) : fonds, accents, textes, glass, nav pill, glows.
- **`@layer base`** : fond de page en dégradés, typo titres (Playfair).
- **`@layer utilities`** : **`.glass-panel`**, **`.nav-pill`**, **`.nav-pill-link`** (progression de couleur des liens via `--nav-link-mix`).

Les composants consomment ces tokens via **`var(--…)`** ou classes utilitaires Tailwind (`text-foreground`, `bg-background`, etc.) mappées dans le thème shadcn.

---

## 8. Assets

- **`public/images/profile/`** : images servies sous `/images/profile/...`.  
- **`next/image`** dans `home-content.tsx` pour optimisation (chemins relatifs à `public/`).

---

## 9. Commandes

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

---

## 10. Évolutions naturelles de l’architecture

- **`src/components/sections/`** : une fichier par section (Hero, About, …) si `home-content.tsx` grossit.
- **`src/lib/i18n/`** : JSON ou ICU par locale si le volume de texte augmente.
- **`src/app/[locale]/`** : routing par segment de langue si tu veux des URLs `/fr` et `/en` au lieu du toggle uniquement.
- **Données CV / projets** : module `src/data/` (TS ou MDX) alimenté depuis les fichiers à la racine du repo.

Ce document peut être complété au fil des refactors ; en cas de divergence, le code dans `src/` fait foi.
