import modal from './src/modal'

export default function(renderLocation, config) {
    
    let rootElement = renderLocation.querySelector('[data-component-name="modal"]');

    if (!rootElement) {
        const component = `
            <div class="modal" data-component-name="modal" hidden>
                <div class="modal__inner" data-role="modal-inner">
                    <div class="modal__header">
                        ${config && config.heading ? `
                        <h3 class="heading heading--s heading--dark">${config.heading}</h3>
                        ` : ''}             
                        <button class="modal__close" data-role="modal-close">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.8 489.8">
                                <g>
                                    <path d="M319,170.8c-4.8-4.8-12.5-4.8-17.3,0l-56.8,56.8l-56.8-56.8c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l56.8,56.8
                                        l-56.8,56.8c-4.8,4.8-4.8,12.5,0,17.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l56.8-56.8l56.8,56.8c2.4,2.4,5.5,3.6,8.7,3.6
                                        s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-57-56.8l56.8-56.8C323.8,183.3,323.8,175.6,319,170.8z"/>
                                </g>
                            </svg>
                        </button>
                    </div>

                    <div class="modal__body" data-role="modal-body">
                    </div>
                </div>
            </div>
        `;

        renderLocation.insertAdjacentHTML('beforeend', component);

        rootElement = renderLocation.querySelector('[data-component-name="modal"]');
    }

    rootElement.config = config;

    modal(rootElement);

}