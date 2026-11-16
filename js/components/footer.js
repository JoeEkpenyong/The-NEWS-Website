// Shared website footer. This markup is reused on every route.
export function createFooter() {
  return `<footer class="site-footer">
        <a href="#/" class="footer-logo" aria-label="The NEWS home"><span class="logo-the">The</span><span class="logo-news">NEWS</span><span class="logo-star" aria-hidden="true">*</span></a>
        <div class="footer-bottom">
            <p>© Copyright 2024 - The News - All rights reserved</p>
          <nav class="social-links" aria-label="Social media">
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <i class="fa-brands fa-instagram"></i>
    </a>

    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i class="fa-brands fa-linkedin-in"></i>
    </a>

    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <i class="fa-brands fa-x-twitter"></i>
    </a>

    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord">
        <i class="fa-brands fa-discord"></i>
    </a>
</nav>
        </div>
    </footer>`;
}
