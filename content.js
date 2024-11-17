function redirectToPerplexity(query) {
    window.location.href = `https://www.perplexity.ai/?q=${encodeURIComponent(query)}`;
}

function checkAndRedirect() {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('q');

    if (query && query.trim().toLowerCase().startsWith('@perplexity ')) {
    const perplexityQuery = query.trim().slice(11); // Remove '@perplexity '
    if (perplexityQuery) {
        redirectToPerplexity(perplexityQuery);
    }
    }
}

// Check immediately when the script runs
checkAndRedirect();

// Also check when the page content changes (for dynamic search results)
const observer = new MutationObserver(checkAndRedirect);
observer.observe(document.documentElement, { childList: true, subtree: true });

// Listen for changes to the input field
document.addEventListener('input', function(event) {
    if (event.target.name === 'q') {
    const query = event.target.value;
    if (query.trim().toLowerCase().startsWith('@perplexity ')) {
        const perplexityQuery = query.trim().slice(11); // Remove '@perplexity '
        if (perplexityQuery) {
        redirectToPerplexity(perplexityQuery);
        }
    }
    }
});