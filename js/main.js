// Collapsible sections use native <details>/<summary>, and navigation
// scrolling is handled by CSS scroll-behavior, so no JavaScript is
// needed for either. Everything below is progressive enhancement.

// Open every collapsible section for printing, then restore afterwards
const collapsibles = document.querySelectorAll('details.collapsible');
let openedForPrint = [];

window.addEventListener('beforeprint', () => {
    openedForPrint = [];
    collapsibles.forEach(d => {
        if (!d.open) {
            d.open = true;
            openedForPrint.push(d);
        }
    });
});

window.addEventListener('afterprint', () => {
    openedForPrint.forEach(d => { d.open = false; });
    openedForPrint = [];
});

// Service worker for offline capability
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Registration failed; the page still works online
        });
    });
}
