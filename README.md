# Trivia Wars

Star Wars inspired trivia game rebuilt as a cleaner frontend portfolio piece.

Live demo: https://ricardosalas17.github.io/Trivia-Wars/

## What it shows

- API consumption with Open Trivia DB
- Dynamic UI rendering in vanilla JavaScript
- Game state management, timer, scoring and local persistence
- Responsive interface with a clear visual direction
- Modernized Webpack build ready for GitHub Pages

## Local development

```bash
npm install
npm start
```

## Production build

```bash
npm run build
```

## Deploy

The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.
After merging to `master`, GitHub Pages can deploy the contents of `dist/` automatically.

## Project structure

- `src/index.js` - bootstraps the app
- `src/app.js` - UI rendering and interaction flow
- `src/api.js` - category and trivia requests
- `src/utils.js` - formatting, decode and score helpers
- `src/styles/main.scss` - visual system and responsive styles

## Next improvements

- Add automated tests for score calculation and trivia flow
- Add gameplay analytics or session history
