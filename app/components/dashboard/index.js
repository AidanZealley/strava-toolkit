import dashboard from './src/dashboard.js'

export default function(stravaToolkit, renderLocation) {

    const component = `
        <div class="dashboard" data-component-name="dashboard">
            <div class="dashboard-sidebar">
                <div class="dashboard-user" data-role="user-info">
                </div>

                <div data-role="dashboard-nav">
                </div>
            </div>

            <div class="dashboard-content" data-role="dashboard-content">
            </div>
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', component);

    const rootElement = renderLocation.querySelector('[data-component-name="dashboard"]');

    rootElement.view = {};

    dashboard(stravaToolkit, rootElement);

}