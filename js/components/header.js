// Shared website header. This markup is rendered once by the SPA.
export function createHeader() {
  return `<header class="site-header">
        <div class="top-bar">
            <time class="date-info" datetime="2024-10-29">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20"></path>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
    <span>Tuesday, October 29, 2024</span>
</time>
         <div class="top-actions">
    <button class="menu-button" type="button" aria-label="Open menu" aria-controls="main-navigation" aria-expanded="false">
        <span class="menu-button-label">Home</span>
        <span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>

   <span class="action-arrow" aria-hidden="true">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="m9 18 6-6-6-6"></path>
    </svg>
</span>

   


<div class="search-container">
    <input type="checkbox" id="search-toggle" class="search-toggle">

    <label for="search-toggle" class="search-button" aria-label="Open or close search">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="20" height="20" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" stroke-linejoin="round"
             aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5"></circle>
            <path d="m15.5 15.5 5 5"></path>
        </svg>
    </label>

    <form class="search-form" action="#/search" method="get">
        <input type="search" name="q" placeholder="Search news..." required>
        <button type="submit">Search</button>
    </form>
</div>




</div>
        </div>
         <div class="logo">
    <a href="#/" aria-label="The NEWS home">
        <span class="logo-the">The</span>
        <span class="logo-news">NEWS</span>
        <span class="logo-star" aria-hidden="true">*</span>
    </a>
</div>

<nav class="main-nav" id="main-navigation">
    <a href="#/world-news">World News</a>
    <a href="#/politics">Politics</a>
    <a href="#/business">Business</a>
    <a href="#/technology">Technology</a>
    <a href="#/health">Health</a>
    <a href="#/sports">Sports</a>
    <a href="#/culture">Culture</a>
    <a href="#/podcast">Podcast</a>
    
</nav>
</header>`;
}
