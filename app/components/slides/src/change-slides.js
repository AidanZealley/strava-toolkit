export default function(rootElement) {

    const slidesContainer = rootElement.querySelector('[data-role="slides-container"]');
    const currentSlide = slidesContainer.getAttribute('data-current-slide');
    const timelineNodes = rootElement.querySelectorAll('[data-role="timeline-node"]');

    slidesContainer.style.transform = 'translateX(-' + currentSlide * 100 + '%)';

    Array.from(timelineNodes).forEach(function(node, index) {
        node.setAttribute('active', '');

        if (parseInt(node.getAttribute('data-slide')) <= currentSlide) {
            node.setAttribute('active', '');
            if (index >= 1) {
                timelineNodes[index - 1].setAttribute('completed', '');
            }
        } else {
            node.removeAttribute('active');

            if (index >= 1) {
                timelineNodes[index - 1].removeAttribute('completed');
            }
        }
    });

}