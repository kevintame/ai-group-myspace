# Project Guidelines

## Code Style

- TypeScript strict mode is enabled — do not use `any`.
- Use ES module syntax (`import`/`export`).
- Prefer `const` over `let`; avoid `var`.
- CSS uses custom properties defined in `:root` in `src/style.css`.

## Architecture

This is a static landing page served by Vite. There is no framework — just vanilla TypeScript and CSS.

- `index.html` — Entry point. Vite processes this directly.
- `src/main.ts` — Client-side TypeScript loaded as a module.
- `src/style.css` — All styles; linked from `index.html`.

## Build and Test

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Type-check and produce production build in dist/
npm run preview    # Preview the production build locally
```

## Conventions

- Keep the page lightweight — no frameworks or heavy libraries unless explicitly requested.
- Styles go in `src/style.css`; avoid inline styles.
- All interactive behaviour belongs in `src/main.ts`.
