export default function(stravaToolkit, rootElement) {

    const dashboardNav = rootElement.querySelector('[data-role="dashboard-nav"]');

    function addLink(path, text) {
        const link = `
            <a href="${path}" class="dashboard-link">${text}</button>
        `;

        dashboardNav.insertAdjacentHTML('beforeend', link);
    }

    addLink('#update-multiple-activities', 'Update Multiple Activities')
    addLink('#statistics', 'Statistics');

}