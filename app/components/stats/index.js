import stats from './src/stats'

export default function(stravaToolkit, renderLocation, config) {

    const component = `
        <div class="stats" data-component-name="stats">
            <div class="progress-bar" data-role="progress-bar" hidden><div class="progress-bar__indicator" data-role="progress-bar-indicator"></div></div>

            <div class="stats__grid" data-role="stats-grid">
                <button class="button" data-role="new-stat">New Stat</a>
            </div>
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', component);

    const rootElement = renderLocation.querySelector('[data-component-name="stats"]');

    rootElement.config = config;

    stats(stravaToolkit, rootElement);

}