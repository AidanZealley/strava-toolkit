export default function(rootElement) {

    const nav = rootElement.querySelector('[data-role="nav"]');
    const prev = rootElement.querySelector('[data-role="prev"]');
    const next = rootElement.querySelector('[data-role="next"]');

    function updatePagination() {
        for (let i = 0; i < rootElement.config.pages; i++) {
            const pageLink = `
                <a href="${rootElement.config.rootUrl}?page=${i + 1}" class="pagination__nav-link">${i + 1}</a>
            `;

            nav.insertAdjacentHTML('beforeend', pageLink);
        }

        if (rootElement.config.currentPage > 1) {
            prev.href = rootElement.config.rootUrl + '?page=' + (parseInt(rootElement.config.currentPage) - 1);
            prev.removeAttribute('hidden');
        } else {
            prev.setAttribute('hidden', '');
        }

        if (rootElement.config.currentPage < rootElement.config.pages) {
            next.href = rootElement.config.rootUrl + '?page=' + (parseInt(rootElement.config.currentPage) + 1);
            next.removeAttribute('hidden');
        } else {
            next.setAttribute('hidden', '');
        }
    }

    updatePagination();

}