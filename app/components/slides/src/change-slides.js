export default function(rootElement) {

    const slidesContainer = rootElement.querySelector('[data-role="slides-container"]');
    const slides = slidesContainer.querySelectorAll('[data-role="slide"]');
    const currentSlide = slidesContainer.getAttribute('data-current-slide');

    slidesContainer.style.transform = 'translateX(-' + currentSlide * 100 + '%)';

    if (rootElement.config.timeline) {
        const timelineNodes = rootElement.querySelectorAll('[data-role="timeline-node"]');

        Array.from(timelineNodes).forEach(function(node, index) {
            const nodeButton = node.querySelector('[data-role="timeline-node-button"]');

            node.setAttribute('active', '');

            if (rootElement.config.disableInactive) {
                nodeButton.removeAttribute('disabled');
            }

            if (parseInt(node.getAttribute('data-slide')) <= currentSlide) {
                if (index >= 1) {
                    timelineNodes[index - 1].setAttribute('completed', '');
                }
            } else {
                // if (slides[index].innerHTML == '') {
                //     node.removeAttribute('active');

                //     if (rootElement.config.disableInactive) {
                //         nodeButton.setAttribute('disabled', '');
                //     }
                // }

                node.removeAttribute('active');

                if (rootElement.config.disableInactive) {
                    nodeButton.setAttribute('disabled', '');
                }

                if (index >= 1) {
                    timelineNodes[index - 1].removeAttribute('completed');
                }
            }
        });
    }

    Array.from(slides).forEach(function(slide) {
        if (slide.getAttribute('data-slide') != currentSlide) {
            slide.setAttribute('inactive', '');
        } else {
            slide.removeAttribute('inactive');
        }
    });

}