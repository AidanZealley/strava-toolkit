import slides from './src/slides'

export default function(renderLocation, config) {

    const component = `
        <div class="slides${config.modifiers ? ` ${config.modifiers}` : ''}" data-component-name="slides">
            <div class="slides__container" data-role="slides-container" data-current-slide="0"></div>
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', component);

    const rootElement = renderLocation.querySelector('[data-component-name="slides"]');

    rootElement.config = config;

    slides(rootElement);

}