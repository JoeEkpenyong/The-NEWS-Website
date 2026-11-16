import { searchArticles } from "../data.js";
import { createNewsCard } from "../components/newsCard.js";

// Render the search page and show headlines that match the user's query.
export function renderSearch(query = "") {
  const term = query.trim();
  const normalizedTerm = term.toLowerCase();
  const matches = normalizedTerm
    ? searchArticles.filter(article =>
        article.title.toLowerCase().includes(normalizedTerm) ||
        article.category.toLowerCase().includes(normalizedTerm)
      )
    : [];

  const summary = term
    ? `${matches.length} result(s) for "${escapeHtml(term)}"`
    : "Enter a word or phrase in the search box to find articles.";

  const results = matches.length
    ? matches.map(createNewsCard).join("")
    : (term ? '<p class="no-search-results">No articles found. Try another search.</p>' : "");

  return `<main class="search-results-page">
    <h1>Search The News</h1>
    <form class="search-form search-page-form">
      <input type="search" name="q" placeholder="Search news..." aria-label="Search news" value="${escapeHtml(term)}" required>
      <button type="submit">Search</button>
    </form>
    <p id="search-summary" aria-live="polite">${summary}</p>
    <section id="search-results" class="search-results-list" aria-label="Search results">${results}</section>
  </main>`;
}

// Escape user-entered text before inserting it into the page.
function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}
