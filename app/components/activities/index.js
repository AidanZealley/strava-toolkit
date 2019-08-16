import activities from './src/activities.js'

export default function(stravaToolkit, renderLocation, params) {

    const component = `
        <div class="activities" data-component-name="activities">
            <div class="progress-bar" data-role="progress-bar" hidden><div class="progress-bar__indicator" data-role="progress-bar-indicator"></div></div>

            <div class="activities__filter" data-role="activities-filter">
            </div>

            <div class="activities__content" data-role="activities-content">
            </div>

            <div class="activities__footer" data-role="activities-footer">
            </div>
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', component);

    const rootElement = renderLocation.querySelector('[data-component-name="activities"]');

    rootElement.view = {};

    activities(stravaToolkit, rootElement, params.page ? params.page : 1);

}