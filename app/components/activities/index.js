import activities from './src/activities.js'

export default function(stravaToolkit, renderLocation) {

    const component = `
        <div class="activities" data-component-name="activities">
            <div class="activities__loader">
                <div class="activities__loader-content">
                    <h2 class="heading heading--heavy heading--medium">Update Multiple Activities</h2>

                    <button class="button" data-role="submit-button"><span>Get All Activities</span></button>
                </div>

                <div class="progress-bar" data-role="progress-bar" hidden><div class="progress-bar__indicator" data-role="progress-bar-indicator"></div></div>
            </div>

            <div class="activities__content" data-role="activities-content">
            </div>    
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', component);

    const rootElement = renderLocation.querySelector('[data-component-name="activities"]');

    rootElement.view = {};

    activities(stravaToolkit, rootElement);

}