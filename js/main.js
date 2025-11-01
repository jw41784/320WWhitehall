// Mobile navigation toggle
document.querySelector('.nav-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    nav.classList.toggle('active');
    this.setAttribute('aria-expanded', !isExpanded);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Only handle internal links (starting with #)
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Close mobile nav
                document.querySelector('nav').classList.remove('active');

                // Try smooth scroll, fallback to regular scroll
                try {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } catch (error) {
                    // Fallback for older browsers
                    target.scrollIntoView();
                }
            }
        }
    });
});

// Collapsible sections
document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.parentElement.classList.toggle('active');
        this.setAttribute('aria-expanded', !isExpanded);
    });
});

// Service worker for offline capability (basic)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Service worker registration failed, app will still work online
        });
    });
}
