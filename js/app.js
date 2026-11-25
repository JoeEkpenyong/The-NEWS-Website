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
  initializeHeroSlider();
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
  if (event.key === "Escape" && typeof closeHeroLightbox === "function") {
    closeHeroLightbox();
  }
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

// Start the homepage hero image carousel and manage its lightbox.
let heroSliderTimer;
let closeHeroLightbox = null;

function initializeHeroSlider() {
  window.clearInterval(heroSliderTimer);
  const hero = document.querySelector(".hero-image");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll(".hero-slide"));
  const dots = Array.from(hero.querySelectorAll(".hero-slider-dot"));
  const previousButton = hero.querySelector(".hero-slider-prev");
  const nextButton = hero.querySelector(".hero-slider-next");

  // Remove a previous lightbox if the SPA is rendering the homepage again.
  document.querySelector(".hero-lightbox")?.remove();
  closeHeroLightbox = null;

  // Create the lightbox once for the current homepage render.
  const lightbox = document.createElement("div");
  lightbox.className = "hero-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Featured image viewer");
  lightbox.hidden = true;

  const lightboxImage = document.createElement("img");
  lightboxImage.className = "hero-lightbox-image";
  lightboxImage.alt = "";

  const closeButton = document.createElement("button");
  closeButton.className = "hero-lightbox-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close image viewer");
  closeButton.textContent = "×";

  lightbox.append(lightboxImage, closeButton);
  document.body.appendChild(lightbox);

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
    closeHeroLightbox = null;
    startAutoSlide();
  }

  function openLightbox(slide) {
    lightboxImage.src = slide.currentSrc || slide.src;
    lightboxImage.alt = slide.alt || "Featured news image";
    lightbox.hidden = false;
    closeHeroLightbox = closeLightbox;
    window.clearInterval(heroSliderTimer);
    closeButton.focus();
  }

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
  });

  slides.forEach((slide, index) => {
    slide.tabIndex = 0;
    slide.setAttribute("role", "button");
    slide.setAttribute("aria-label", `Enlarge featured image ${index + 1}`);
    slide.addEventListener("click", () => {
      if (slide.classList.contains("is-active")) openLightbox(slide);
    });
    slide.addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && slide.classList.contains("is-active")) {
        event.preventDefault();
        openLightbox(slide);
      }
    });
  });

  if (slides.length < 2) return;

  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentSlide;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === currentSlide;
      dot.classList.toggle("is-active", active);
      if (active) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  function startAutoSlide() {
    window.clearInterval(heroSliderTimer);
    heroSliderTimer = window.setInterval(() => showSlide(currentSlide + 1), 3000);
  }

  previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startAutoSlide();
  });
  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startAutoSlide();
  });
  dots.forEach((dot, index) => dot.addEventListener("click", () => {
    showSlide(index);
    startAutoSlide();
  }));

  hero.addEventListener("mouseenter", () => window.clearInterval(heroSliderTimer));
  hero.addEventListener("mouseleave", startAutoSlide);
  hero.addEventListener("focusin", () => window.clearInterval(heroSliderTimer));
  hero.addEventListener("focusout", event => {
    if (!hero.contains(event.relatedTarget)) startAutoSlide();
  });

  showSlide(0);
  startAutoSlide();
}

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
