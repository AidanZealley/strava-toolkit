import changeSlides from './change-slides';

export default function(rootElement) {

    const slidesContainer = rootElement.querySelector('[data-role="slides-container"]');
    const nodes = rootElement.querySelectorAll('[data-role="timeline-node"]');
    const nodeButtons = rootElement.querySelectorAll('[data-role="timeline-node-button"]');

    Array.from(nodeButtons).forEach(function(nodeButton, index) {
        nodeButton.onclick = function() { slidesContainer.setAttribute('data-current-slide', nodes[index].getAttribute('data-slide')) };
    });

    const slidesObserver = new MutationObserver(function() {
        changeSlides(rootElement);
    });

    slidesObserver.observe(slidesContainer, {
        attributeFilter: [ 'data-current-slide' ]
    });

}