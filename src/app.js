import heroLogo from "./images/logo.png";
import { fetchCategories, fetchQuestions } from "./api";
import {
  calculateQuestionScore,
  escapeHtml,
  formatConfigSummary,
  getBestScore,
  getDifficultyMeta,
  getQuestionTimeLimit,
  normalizeQuestions,
  saveBestScore,
} from "./utils";

const GAME_LENGTH = 10;

function createTriviaWarsApp(container) {
  const state = {
    status: "booting",
    config: {
      amount: GAME_LENGTH,
      category: "any",
      difficulty: "any",
      type: "any",
    },
    categories: [],
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    score: 0,
    bestScore: getBestScore(),
    timerId: null,
    secondsLeft: 0,
    errorMessage: "",
  };

  function setStatus(status) {
    state.status = status;
    render();
  }

  function stopTimer() {
    if (state.timerId) {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function startTimer() {
    stopTimer();
    state.secondsLeft = getQuestionTimeLimit(state.questions[state.currentQuestionIndex]);
    state.timerId = window.setInterval(() => {
      state.secondsLeft -= 1;

      if (state.secondsLeft <= 0) {
        stopTimer();
        registerAnswer(null);
        return;
      }

      render();
    }, 1000);
  }

  function registerAnswer(selectedAnswer) {
    const question = state.questions[state.currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;
    const timedOut = selectedAnswer === null;

    if (isCorrect) {
      state.score += calculateQuestionScore(question, state.secondsLeft);
    }

    state.answers.push({
      questionId: question.id,
      selectedAnswer,
      correctAnswer: question.correctAnswer,
      isCorrect,
      timedOut,
    });

    stopTimer();

    if (state.currentQuestionIndex === state.questions.length - 1) {
      state.bestScore = saveBestScore(state.score);
      setStatus("results");
      return;
    }

    state.currentQuestionIndex += 1;
    startTimer();
    render();
  }

  async function startGame() {
    stopTimer();
    state.errorMessage = "";
    state.questions = [];
    state.answers = [];
    state.currentQuestionIndex = 0;
    state.score = 0;
    setStatus("loading");

    try {
      const questions = await fetchQuestions(state.config);
      state.questions = normalizeQuestions(questions);
      startTimer();
      setStatus("playing");
    } catch (error) {
      state.errorMessage = error.message;
      setStatus("error");
    }
  }

  function resetToSetup() {
    stopTimer();
    state.questions = [];
    state.answers = [];
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.errorMessage = "";
    setStatus("ready");
  }

  function updateConfig(field, value) {
    state.config[field] = value;
  }

  function getCategoriesById() {
    return new Map(state.categories.map((category) => [category.id, category.name]));
  }

  function getCurrentQuestion() {
    return state.questions[state.currentQuestionIndex];
  }

  function renderShell(content) {
    container.innerHTML = `
      <div class="app-shell">
        <header class="hero-panel">
          <div class="hero-copy">
            <p class="eyebrow">Frontend portfolio rebuild</p>
            <h1>Trivia Wars</h1>
            <p class="hero-text">
              A polished browser trivia game that mixes API consumption, game logic,
              local persistence and a stronger visual presentation.
            </p>
            <div class="hero-badges">
              <span>Vanilla JS</span>
              <span>Open Trivia DB</span>
              <span>Responsive UI</span>
            </div>
          </div>
          <div class="hero-side">
            <img src="${heroLogo}" alt="Trivia Wars logo" class="hero-logo">
            <button class="secondary-button" type="button" id="reset-score-button">Reset best score</button>
            <div class="stat-card">
              <span>Best score</span>
              <strong>${state.bestScore}</strong>
            </div>
          </div>
        </header>
        ${content}
      </div>
    `;

    container.querySelector("#reset-score-button").addEventListener("click", () => {
      window.localStorage.removeItem("trivia-wars-best-score");
      state.bestScore = 0;
      render();
    });
  }

  function renderSetup() {
    const categoryOptions = state.categories
      .map((category) => `<option value="${category.id}">${escapeHtml(category.name)}</option>`)
      .join("");

    renderShell(`
      <main class="panel-grid">
        <section class="content-card setup-card">
          <div>
            <p class="section-label">Mission briefing</p>
            <h2>Build your custom match</h2>
            <p class="muted-text">
              Recruiter-friendly version: cleaner architecture, better feedback states,
              reliable scoring and a more intentional visual system.
            </p>
          </div>

          <form class="setup-form" id="setup-form">
            <label>
              <span>Category</span>
              <select name="category">
                <option value="any">Any category</option>
                ${categoryOptions}
              </select>
            </label>

            <label>
              <span>Difficulty</span>
              <select name="difficulty">
                <option value="any">Any difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>

            <label>
              <span>Question type</span>
              <select name="type">
                <option value="any">Mixed format</option>
                <option value="multiple">Multiple choice</option>
                <option value="boolean">True / False</option>
              </select>
            </label>

            <button class="primary-button" type="submit">Start mission</button>
          </form>
        </section>

        <aside class="content-card info-card">
          <p class="section-label">What changed</p>
          <ul class="feature-list">
            <li>Modernized build and assets</li>
            <li>Cleaner state flow without global DOM hacks</li>
            <li>Improved timing, scoring and replay flow</li>
            <li>Responsive layout for desktop and mobile</li>
          </ul>
        </aside>
      </main>
    `);

    const form = container.querySelector("#setup-form");
    form.category.value = state.config.category;
    form.difficulty.value = state.config.difficulty;
    form.type.value = state.config.type;

    form.addEventListener("change", (event) => {
      const target = event.target;
      updateConfig(target.name, target.value);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      startGame();
    });
  }

  function renderLoading() {
    renderShell(`
      <main class="content-card state-card">
        <p class="section-label">Preparing the match</p>
        <h2>Fetching questions from the outer rim...</h2>
        <p class="muted-text">This should only take a moment.</p>
      </main>
    `);
  }

  function renderError() {
    const categoriesFailed = state.categories.length === 0;

    renderShell(`
      <main class="content-card state-card">
        <p class="section-label">Transmission failed</p>
        <h2>We could not start that round.</h2>
        <p class="muted-text">${escapeHtml(state.errorMessage)}</p>
        <button class="primary-button" type="button" id="retry-button">${categoriesFailed ? "Reload app" : "Try again"}</button>
      </main>
    `);

    container.querySelector("#retry-button").addEventListener("click", () => {
      if (categoriesFailed) {
        initialize();
        return;
      }

      resetToSetup();
    });
  }

  function renderPlaying() {
    const question = getCurrentQuestion();
    const progress = `${state.currentQuestionIndex + 1} / ${state.questions.length}`;
    const meta = getDifficultyMeta(question.difficulty);
    const progressWidth = ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
    const isWarning = state.secondsLeft <= 5;
    const categoriesById = getCategoriesById();

    renderShell(`
      <main class="panel-grid play-grid">
        <section class="content-card question-card">
          <div class="question-topbar">
            <div>
              <p class="section-label">Question ${progress}</p>
              <h2>${escapeHtml(question.question)}</h2>
            </div>
            <div class="timer ${isWarning ? "warning" : ""}">${state.secondsLeft}s</div>
          </div>

          <div class="question-meta">
            <span>${escapeHtml(question.category)}</span>
            <span>${meta.label}</span>
            <span>${question.type === "boolean" ? "True / False" : "Multiple choice"}</span>
          </div>

          <div class="progress-track">
            <span style="width: ${progressWidth}%"></span>
          </div>

          <div class="answers-grid">
            ${question.answers
              .map(
                (answer) => `
                  <button class="answer-button" type="button" data-answer="${escapeHtml(answer)}">
                    ${escapeHtml(answer)}
                  </button>
                `
              )
              .join("")}
          </div>
        </section>

        <aside class="content-card status-card">
          <p class="section-label">Run status</p>
          <div class="status-stack">
            <div>
              <span>Score</span>
              <strong>${state.score}</strong>
            </div>
            <div>
              <span>Best score</span>
              <strong>${state.bestScore}</strong>
            </div>
            <div>
              <span>Setup</span>
              <strong>${escapeHtml(formatConfigSummary(state.config, categoriesById))}</strong>
            </div>
          </div>
          <button class="secondary-button" type="button" id="quit-button">Quit round</button>
        </aside>
      </main>
    `);

    container.querySelectorAll(".answer-button").forEach((button) => {
      button.addEventListener("click", () => registerAnswer(button.dataset.answer));
    });

    container.querySelector("#quit-button").addEventListener("click", resetToSetup);
  }

  function renderResults() {
    const correctAnswers = state.answers.filter((answer) => answer.isCorrect).length;
    const timedOutAnswers = state.answers.filter((answer) => answer.timedOut).length;
    const accuracy = Math.round((correctAnswers / state.answers.length) * 100);
    const performanceTitle = state.score >= 1800 ? "Mission accomplished" : state.score >= 1000 ? "Solid run" : "Training complete";

    renderShell(`
      <main class="panel-grid">
        <section class="content-card results-card">
          <p class="section-label">Run complete</p>
          <h2>${performanceTitle}</h2>
          <p class="muted-text">
            You answered ${correctAnswers} out of ${state.answers.length} questions correctly.
          </p>

          <div class="results-metrics">
            <div>
              <span>Final score</span>
              <strong>${state.score}</strong>
            </div>
            <div>
              <span>Accuracy</span>
              <strong>${accuracy}%</strong>
            </div>
            <div>
              <span>Timeouts</span>
              <strong>${timedOutAnswers}</strong>
            </div>
            <div>
              <span>Best score</span>
              <strong>${state.bestScore}</strong>
            </div>
          </div>

          <div class="results-actions">
            <button class="primary-button" type="button" id="play-again-button">Play again</button>
            <button class="secondary-button" type="button" id="adjust-button">Adjust setup</button>
          </div>
        </section>

        <aside class="content-card info-card">
          <p class="section-label">Portfolio notes</p>
          <ul class="feature-list">
            <li>Questions are decoded and shuffled client-side</li>
            <li>Scores reward both difficulty and speed</li>
            <li>Best score persists with local storage</li>
            <li>Ready for GitHub Pages static hosting</li>
          </ul>
        </aside>
      </main>
    `);

    container.querySelector("#play-again-button").addEventListener("click", startGame);
    container.querySelector("#adjust-button").addEventListener("click", resetToSetup);
  }

  function render() {
    if (state.status === "booting" || state.status === "ready") {
      renderSetup();
      return;
    }

    if (state.status === "loading") {
      renderLoading();
      return;
    }

    if (state.status === "error") {
      renderError();
      return;
    }

    if (state.status === "playing") {
      renderPlaying();
      return;
    }

    renderResults();
  }

  async function initialize() {
    setStatus("loading");

    try {
      state.categories = await fetchCategories();
      setStatus("ready");
    } catch (error) {
      state.errorMessage = "Categories could not be loaded. Please try again.";
      setStatus("error");
    }
  }

  initialize();

  return {
    destroy() {
      stopTimer();
      container.innerHTML = "";
    },
  };
}

export { createTriviaWarsApp };
