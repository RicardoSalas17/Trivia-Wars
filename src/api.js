const API_BASE_URL = "https://opentdb.com";

async function requestJson(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

async function fetchCategories() {
  const data = await requestJson("/api_category.php");
  return data.trivia_categories ?? [];
}

async function fetchQuestions({ amount, category, difficulty, type }) {
  const params = new URLSearchParams({ amount: String(amount) });

  if (category !== "any") {
    params.set("category", category);
  }

  if (difficulty !== "any") {
    params.set("difficulty", difficulty);
  }

  if (type !== "any") {
    params.set("type", type);
  }

  const data = await requestJson(`/api.php?${params.toString()}`);

  if (data.response_code !== 0 || !Array.isArray(data.results) || data.results.length === 0) {
    throw new Error("No questions available for that configuration.");
  }

  return data.results;
}

export { fetchCategories, fetchQuestions };
