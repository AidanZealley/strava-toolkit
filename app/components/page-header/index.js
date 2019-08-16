import pageHeader from './src/page-header'

export default function(renderLocation, config) {

    const component = `
        <div class="page-header" data-component-name="page-header">
            <div class="page-header__content">
                <h2 class="heading heading--heavy heading--l">${config.heading}</h2>
            </div>
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', component);

    const rootElement = renderLocation.querySelector('[data-component-name="page-header"]');

    rootElement.config = config;

    pageHeader(rootElement);

}