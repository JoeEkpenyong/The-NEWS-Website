// Creates a consistent article card for search results.
export function createNewsCard(article) {
  return `<article class="search-result"><p class="search-result-category">${article.category}</p><h2><a href="${article.route}">${article.title}</a></h2></article>`;
}
