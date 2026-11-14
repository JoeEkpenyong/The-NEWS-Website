// The News - JavaScript

// Article titles currently published across The News website.
const articles = [
  {
    "title": "The effects of geopolitical shifts on global security",
    "url": "index.html",
    "category": "World News"
  },
  {
    "title": "Understanding the social movements reshaping our world today",
    "url": "culturepage.html",
    "category": "Culture"
  },
  {
    "title": "The global financial landscape and its implications for all",
    "url": "index.html",
    "category": "Business"
  },
  {
    "title": "Examining the challenges and responses of nations",
    "url": "index.html",
    "category": "World News"
  },
  {
    "title": "A comprehensive analysis of the state of global affairs",
    "url": "index.html",
    "category": "World News"
  },
  {
    "title": "Latest innovations pave the way to a sustainable future",
    "url": "index.html",
    "category": "Technology"
  },
  {
    "title": "Understanding the role of big data in driving technological progress",
    "url": "index.html",
    "category": "Technology"
  },
  {
    "title": "Exploring the latest developments in AI Robotics",
    "url": "index.html",
    "category": "Technology"
  },
  {
    "title": "Future of computing and what it means for society",
    "url": "index.html",
    "category": "Technology"
  },
  {
    "title": "Riding the tide of innovation and inspiration",
    "url": "index.html",
    "category": "Technology"
  },
  {
    "title": "Affect the integrity and future of professional sports",
    "url": "index.html",
    "category": "Sports"
  },
  {
    "title": "Leadership and the future of public policy",
    "url": "index.html",
    "category": "Politics"
  },
  {
    "title": "Inside the world of professional racing",
    "url": "index.html",
    "category": "Sports"
  },
  {
    "title": "Strategies for success in a competitive landscape",
    "url": "index.html",
    "category": "Business"
  },
  {
    "title": "Innovation hubs are transforming traditional business models",
    "url": "index.html",
    "category": "Business"
  },
  {
    "title": "Tailoring treatments to individual genetic profiles",
    "url": "index.html",
    "category": "Health"
  },
  {
    "title": "Understanding the global events reshaping our world today",
    "url": "worldnews.html",
    "category": "World News"
  },
  {
    "title": "How international markets respond to changing economic conditions",
    "url": "worldnews.html",
    "category": "World News"
  },
  {
    "title": "Nations consider new approaches to shared global challenges",
    "url": "worldnews.html",
    "category": "World News"
  },
  {
    "title": "A closer look at the issues influencing communities worldwide",
    "url": "worldnews.html",
    "category": "World News"
  },
  {
    "title": "Political Leaders Face New Challenges as Global Priorities Shift",
    "url": "politics.html",
    "category": "Politics"
  },
  {
    "title": "Governments Debate New Policies to Address Economic Pressures",
    "url": "politics.html",
    "category": "Politics"
  },
  {
    "title": "Election Developments Put Political Parties Under Pressure",
    "url": "politics.html",
    "category": "Politics"
  },
  {
    "title": "How Government Decisions Are Shaping the Future of Public Services",
    "url": "politics.html",
    "category": "Politics"
  },
  {
    "title": "Business Leaders Prepare for a Changing Global Economy",
    "url": "business.html",
    "category": "Business"
  },
  {
    "title": "Markets React as Investors Assess New Economic Developments",
    "url": "business.html",
    "category": "Business"
  },
  {
    "title": "Small Businesses Explore New Opportunities for Growth",
    "url": "business.html",
    "category": "Business"
  },
  {
    "title": "How New Investment Trends Are Reshaping Major Industries",
    "url": "business.html",
    "category": "Business"
  },
  {
    "title": "New Technology Developments Are Changing Everyday Life",
    "url": "technology.html",
    "category": "Technology"
  },
  {
    "title": "Artificial Intelligence Continues to Transform Major Industries",
    "url": "technology.html",
    "category": "Technology"
  },
  {
    "title": "Tech Companies Compete to Build the Next Generation of Devices",
    "url": "technology.html",
    "category": "Technology"
  },
  {
    "title": "How Digital Innovation Is Reshaping the Modern Workplace",
    "url": "technology.html",
    "category": "Technology"
  },
  {
    "title": "Healthcare Experts Highlight the Importance of Preventive Care",
    "url": "health.html",
    "category": "Health"
  },
  {
    "title": "Simple Lifestyle Changes That Can Support Better Health",
    "url": "health.html",
    "category": "Health"
  },
  {
    "title": "Researchers Explore New Approaches to Treating Common Diseases",
    "url": "health.html",
    "category": "Health"
  },
  {
    "title": "Communities Work to Improve Access to Essential Health Services",
    "url": "health.html",
    "category": "Health"
  },
  {
    "title": "Top Athletes Prepare for a New Season of Competition",
    "url": "sports.html",
    "category": "Sports"
  },
  {
    "title": "Teams Face Crucial Decisions Ahead of Major Fixtures",
    "url": "sports.html",
    "category": "Sports"
  },
  {
    "title": "Fans React as Competition Results Surprise Supporters",
    "url": "sports.html",
    "category": "Sports"
  },
  {
    "title": "Investment in Sports Facilities Creates New Opportunities",
    "url": "sports.html",
    "category": "Sports"
  },
  {
    "title": "Communities Celebrate Traditions That Connect Generations",
    "url": "culture.html",
    "category": "Culture"
  },
  {
    "title": "Artists Find New Ways to Share Their Work with the World",
    "url": "culture.html",
    "category": "Culture"
  },
  {
    "title": "Music and Film Continue to Influence Popular Culture",
    "url": "culture.html",
    "category": "Culture"
  },
  {
    "title": "Historic Landmarks Tell Stories About Our Shared Heritage",
    "url": "culture.html",
    "category": "Culture"
  },
  {
    "title": "Inside the Stories Behind Today's Biggest Headlines",
    "url": "podcast.html",
    "category": "Podcast"
  },
  {
    "title": "Experts Discuss the Issues Shaping Our World",
    "url": "podcast.html",
    "category": "Podcast"
  },
  {
    "title": "Conversations with People Making a Difference",
    "url": "podcast.html",
    "category": "Podcast"
  },
  {
    "title": "How New Ideas and Perspectives Are Changing the Conversation",
    "url": "podcast.html",
    "category": "Podcast"
  }
];

// Connect every search form to the on-site search page.
const searchForms = document.querySelectorAll(".search-form");

searchForms.forEach(function (form) {
    form.action = "search.html";
    form.method = "get";
});

// Read the search term from the URL on search.html.
const resultsContainer = document.querySelector("#search-results");
const searchSummary = document.querySelector("#search-summary");

if (resultsContainer && searchSummary) {
    const searchParams = new URLSearchParams(window.location.search);
    const searchTerm = (searchParams.get("q") || "").trim().toLowerCase();

    const matchingArticles = searchTerm
        ? articles.filter(function (article) {
            return article.title.toLowerCase().includes(searchTerm) ||
                article.category.toLowerCase().includes(searchTerm);
        })
        : [];

    searchSummary.textContent = searchTerm
        ? matchingArticles.length + ' result(s) for "' + searchParams.get("q") + '"'
        : "Enter a word or phrase in the search box to find articles.";

    if (searchTerm && matchingArticles.length === 0) {
        resultsContainer.textContent = "No articles found. Try another search.";
    } else {
        matchingArticles.forEach(function (article) {
            const articleCard = document.createElement("article");
            articleCard.className = "search-result";

            const category = document.createElement("p");
            category.className = "search-result-category";
            category.textContent = article.category;

            const heading = document.createElement("h2");
            const link = document.createElement("a");
            link.href = article.url;
            link.textContent = article.title;

            heading.appendChild(link);
            articleCard.appendChild(category);
            articleCard.appendChild(heading);
            resultsContainer.appendChild(articleCard);
        });
    }
}


// Mobile navigation: open, close, and keep accessibility state in sync.
const menuButton = document.querySelector(".menu-button");
const mainNavigation = document.querySelector("#main-navigation");

if (menuButton && mainNavigation) {
    menuButton.addEventListener("click", function () {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        menuButton.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
        mainNavigation.classList.toggle("is-open", !isExpanded);
    });

    mainNavigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open menu");
            mainNavigation.classList.remove("is-open");
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open menu");
            mainNavigation.classList.remove("is-open");
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 600) {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open menu");
            mainNavigation.classList.remove("is-open");
        }
    });
}


// Automatically highlight the navigation link for the current page.
const pageNavigation = document.querySelector(".main-nav");

if (pageNavigation) {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // The culture article belongs to the Culture navigation section.
    const activePage = currentPage === "culturepage.html"
        ? "culture.html"
        : currentPage;

    pageNavigation.querySelectorAll("a").forEach(function (link) {
        const linkPage = link.getAttribute("href");
        const isCurrentPage = linkPage === activePage;

        link.classList.toggle("active", isCurrentPage);

        if (isCurrentPage) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}
