# Thamires Morais Portfolio

Personal portfolio built with React, i18next and Tailwind CSS.

## Scripts

```bash
npm start
```

Runs the app locally at `http://localhost:3000`.

```bash
npm run build
```

Creates the production build in `build/`.

```bash
npm run deploy
```

Builds and publishes the static site with `gh-pages`.

## Structure

```text
src/
  Assets/
    Img/                     # shared images and visual assets
    Portfolio/Arquivos/       # portfolio project screenshots
  components/
    Topbar/                   # app navigation
    ui/                       # reusable UI primitives
    ScrollReveal.js           # reveal-on-scroll helper
    Timeline.js               # resume timeline item
  locales/
    en/
    pt/
  Pages/
    Index.js                  # page composition and lazy section loading
  Sections/
    Contato/
    Curriculo/
    Footer/
    Inicio/
    Portfolio/
    Skills/
    Sobre/
```

## Component Boundaries

`Sections` contains full page sections only.

Reusable pieces live in `components`, including navigation, timeline rows, scroll helpers and UI primitives such as `UIButton`, `UICard`, `UITag`, `UIIconButton`, `UIIcon` and `UICarrousel`.

Static images stay in `Assets`, outside of sections.

## Styling

Tailwind is configured in `tailwind.config.js` with project color scales such as `plum`, `orchid`, `lavender` and `mist`.

Examples:

```text
bg-lavender-100
text-plum-700
border-lavender-300
```

## Notes

The project currently uses Create React App. Production builds may show CRA dependency warnings, but the app still compiles successfully.
