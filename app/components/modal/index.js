import modal from './src/modal'

export default function(renderLocation, config) {
    
    let rootElement = renderLocation.querySelector('[data-component-name="modal"]');

    if (!rootElement) {
        const component = `
            <div class="modal" data-component-name="modal" hidden>
                <div class="modal__inner" data-role="modal-inner">                
                    <button class="modal__close" data-role="modal-close">Close</button>

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