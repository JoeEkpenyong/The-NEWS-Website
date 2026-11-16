import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { getCurrentRoute } from "./router.js";
import { renderHome } from "./pages/home.js";
import { renderWorldNews } from "./pages/worldNews.js";
import { renderPolitics } from "./pages/politics.js";
import { renderBusiness } from "./pages/business.js";
import { renderTechnology } from "./pages/technology.js";
import { renderHealth } from "./pages/health.js";
import { renderSports } from "./pages/sports.js";
import { renderCulture } from "./pages/culture.js";
import { renderCultureArticle } from "./pages/cultureArticle.js";
import { renderPodcast } from "./pages/podcast.js";
import { renderSearch } from "./pages/search.js";

// Connect each URL route to the function that renders its page.
const routes = {
  "/": renderHome,
  "/world-news": renderWorldNews,
  "/politics": renderPolitics,
  "/business": renderBusiness,
  "/technology": renderTechnology,
  "/health": renderHealth,
  "/sports": renderSports,
  "/culture": renderCulture,
  "/culture-article": renderCultureArticle,
  "/podcast": renderPodcast
};

// Render the shared header and footer around the changing page content.
const app = document.querySelector("#app");
app.innerHTML = `${createHeader()}<div id="page-content"></div>${createFooter()}`;

// Display the page that matches the current URL hash.
function renderRoute() {
  const { path, params } = getCurrentRoute();
  const pageContent = document.querySelector("#page-content");
  const pageRenderer = routes[path];

  if (path === "/search") {
    pageContent.innerHTML = renderSearch(params.get("q") || "");
  } else if (pageRenderer) {
    pageContent.innerHTML = pageRenderer();
  } else {
    pageContent.innerHTML = '<main class="page-container"><h1>Page not found</h1><p>The page you requested does not exist.</p></main>';
  }

  updateActiveNavigation(path);
  initializeLoadMore();
  window.scrollTo(0, 0);
}

// Highlight the active category and update the menu label.
function updateActiveNavigation(path) {
  const labels = {
    "/": "Home", "/world-news": "World News", "/politics": "Politics",
    "/business": "Business", "/technology": "Technology", "/health": "Health",
    "/sports": "Sports", "/culture": "Culture", "/culture-article": "Culture",
    "/podcast": "Podcast", "/search": "Search"
  };

  const menuLabel = document.querySelector(".menu-button-label");
  if (menuLabel) menuLabel.textContent = labels[path] || "Menu";

  const activePath = path === "/culture-article" ? "/culture" : path;
  document.querySelectorAll(".main-nav a").forEach(link => {
    const active = link.getAttribute("href") === "#" + activePath;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

// Reveal category cards three at a time, then two more per click.
function initializeLoadMore() {
  const grids = document.querySelectorAll(
    ".world-grid, .politics-grid, .business-grid, .technology-grid, .health-grid, .sports-grid, .culture-grid, .podcast-page .podcast-grid"
  );

  grids.forEach(grid => {
    const cards = Array.from(grid.querySelectorAll(":scope > article"));
    const firstBatch = 3;
    let visibleCount = firstBatch;

    if (cards.length <= firstBatch) return;

    cards.forEach((card, index) => {
      card.hidden = index >= firstBatch;
    });

    const button = document.createElement("button");
    button.type = "button";
    button.className = "load-more-button";
    button.textContent = "Load More";

    button.addEventListener("click", () => {
      visibleCount = Math.min(visibleCount + 2, cards.length);
      cards.forEach((card, index) => {
        card.hidden = index >= visibleCount;
      });
      if (visibleCount === cards.length) button.remove();
    });

    grid.insertAdjacentElement("afterend", button);
  });
}

// Open and close the existing mobile navigation menu.
const menuButton = document.querySelector(".menu-button");
const mainNavigation = document.querySelector("#main-navigation");

if (menuButton && mainNavigation) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
    mainNavigation.classList.toggle("is-open", !expanded);
  });

  mainNavigation.addEventListener("click", event => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
      mainNavigation.classList.remove("is-open");
    }
  });
}

// Handle both the header search and the search-page form in the SPA.
document.addEventListener("submit", event => {
  if (!event.target.matches(".search-form")) return;

  event.preventDefault();
  const formData = new FormData(event.target);
  const term = String(formData.get("q") || "").trim();

  if (term) {
    window.location.hash = "/search?q=" + encodeURIComponent(term);
  }
});

// Close the mobile menu with Escape or when returning to desktop width.
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton && mainNavigation) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    mainNavigation.classList.remove("is-open");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 600 && menuButton && mainNavigation) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    mainNavigation.classList.remove("is-open");
  }
});

// Add the existing Back to Top control and show it after scrolling.
const backToTopButton = document.createElement("button");
backToTopButton.type = "button";
backToTopButton.className = "back-to-top";
backToTopButton.textContent = "↑";
backToTopButton.setAttribute("aria-label", "Back to top");
backToTopButton.title = "Back to top";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 400);
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Re-render the page whenever the URL hash changes.
window.addEventListener("hashchange", renderRoute);
renderRoute();
