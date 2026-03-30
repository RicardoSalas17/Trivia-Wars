# Trivia Wars

Star Wars inspired trivia game rebuilt as a frontend portfolio case study.

Live demo: https://ricardosalas17.github.io/Trivia-Wars/

## Why this project matters

- Rebuilt an older trivia project into a cleaner, recruiter-friendly frontend sample.
- Demonstrates API integration, state-driven UI, timed game logic and local persistence.
- Uses vanilla JavaScript intentionally to show DOM orchestration without relying on a framework.
- Ships as a static app with Webpack, Babel, Sass and automated GitHub Pages deployment.

## Key features

- Custom match setup with category, difficulty and question type filters.
- Open Trivia DB integration with client-side normalization and HTML entity decoding.
- Timed rounds with difficulty-aware scoring and progress tracking.
- Best score persistence using `localStorage`.
- Responsive interface with stronger visual hierarchy for portfolio presentation.
- Error and retry states for failed API requests.

## Technical highlights

- `Vanilla JavaScript` for rendering, interaction flow and state transitions.
- `Fetch API` for third-party data retrieval.
- `Webpack 5 + Babel + Sass` for bundling and styling.
- `GitHub Actions + GitHub Pages` for static deployment.

## Architecture at a glance

The app follows a simple client-side flow:

1. User configures a round.
2. The app fetches categories/questions from Open Trivia DB.
3. Raw API responses are normalized, decoded and shuffled.
4. The UI renders the active question, timer and score state.
5. The session ends with summary metrics and best score persistence.

## Files that matter

- `src/index.js` - application bootstrap.
- `src/app.js` - main rendering flow, game state and event handling.
- `src/api.js` - category and question requests.
- `src/utils.js` - normalization, scoring and persistence helpers.
- `src/styles/main.scss` - visual system, layout and responsive styling.
- `.github/workflows/deploy.yml` - automated GitHub Pages deployment.

## Run locally

```bash
npm install
npm start
```

## Production build

```bash
npm run build
```

## Deployment

The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.
After merging to `master`, GitHub Pages deploys the contents of `dist/` automatically.

## Suggested screenshots

- Setup screen
- Gameplay screen
- Results screen

## What I improved from the legacy version

- Replaced fragile global flow with a clearer state-driven structure.
- Removed deployment risks from external hotlinked assets.
- Modernized the build pipeline and GitHub Pages publishing flow.
- Improved visual hierarchy, responsive behavior and recruiter-facing presentation.

## Known limitations

- The experience depends on Open Trivia DB availability.
- There is no backend; persistence is limited to browser storage.
- Automated tests are not added yet.

## Next steps

- Add tests for score calculation and state transitions.
- Add screenshots or a short GIF to improve skim value for recruiters.
- Add session history or lightweight analytics.
- Do an accessibility pass focused on keyboard flow and reduced motion.
