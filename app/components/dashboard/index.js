import dashboard from './src/dashboard.js'

export default function(stravaToolkit, renderLocation) {

    const component = `
        <div class="dashboard" data-component-name="dashboard">
            <div class="dashboard__sidebar">
                <div class="dashboard__sidebar-content">
                    <div class="dashboard__user" data-role="user-info">
                    </div>

                    <div data-role="dashboard-nav">
                    </div>
                </div>
            </div>

            <div class="dashboard__content" data-role="dashboard-content">
            </div>
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', component);

    const rootElement = renderLocation.querySelector('[data-component-name="dashboard"]');

    rootElement.view = {};

    dashboard(stravaToolkit, rootElement);

}