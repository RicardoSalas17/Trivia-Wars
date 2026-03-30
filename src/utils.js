function decodeHtml(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function shuffle(array) {
  const clonedArray = [...array];

  for (let index = clonedArray.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [clonedArray[index], clonedArray[randomIndex]] = [clonedArray[randomIndex], clonedArray[index]];
  }

  return clonedArray;
}

function normalizeQuestions(questions) {
  return questions.map((question, index) => {
    const correctAnswer = decodeHtml(question.correct_answer);
    const incorrectAnswers = question.incorrect_answers.map((answer) => decodeHtml(answer));
    const answers = shuffle([correctAnswer, ...incorrectAnswers]);

    return {
      id: `${question.category}-${index}`,
      index,
      category: decodeHtml(question.category),
      difficulty: question.difficulty,
      type: question.type,
      question: decodeHtml(question.question),
      correctAnswer,
      answers,
    };
  });
}

function getDifficultyMeta(difficulty) {
  const meta = {
    easy: { label: "Easy", points: 100, timeLimit: 18 },
    medium: { label: "Medium", points: 160, timeLimit: 15 },
    hard: { label: "Hard", points: 240, timeLimit: 12 },
  };

  return meta[difficulty] ?? { label: "Mixed", points: 140, timeLimit: 15 };
}

function getQuestionTimeLimit(question) {
  return getDifficultyMeta(question.difficulty).timeLimit;
}

function calculateQuestionScore(question, secondsLeft) {
  const meta = getDifficultyMeta(question.difficulty);
  const safeSecondsLeft = Math.max(secondsLeft, 0);
  return meta.points + safeSecondsLeft * 10;
}

function formatConfigSummary(config, categoriesById) {
  const categoryName = config.category === "any" ? "Any category" : categoriesById.get(Number(config.category)) ?? "Custom category";
  const difficultyName = config.difficulty === "any" ? "Any difficulty" : getDifficultyMeta(config.difficulty).label;
  const typeName = config.type === "any" ? "Mixed format" : config.type === "boolean" ? "True or false" : "Multiple choice";

  return [categoryName, difficultyName, typeName].join(" | ");
}

function saveBestScore(score) {
  const currentBest = Number(window.localStorage.getItem("trivia-wars-best-score") ?? 0);
  const nextBest = Math.max(currentBest, score);
  window.localStorage.setItem("trivia-wars-best-score", String(nextBest));
  return nextBest;
}

function getBestScore() {
  return Number(window.localStorage.getItem("trivia-wars-best-score") ?? 0);
}

export {
  calculateQuestionScore,
  escapeHtml,
  formatConfigSummary,
  getBestScore,
  getDifficultyMeta,
  getQuestionTimeLimit,
  normalizeQuestions,
  saveBestScore,
};
