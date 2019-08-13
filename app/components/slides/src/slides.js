import slidesTimeline from './slides-timeline';
import renderSlide from './render-slide';
import slidesEvents from './slides-events';
import changeSlides from './change-slides';

export default function(rootElement) {

    if (rootElement.config.timeline) {
        rootElement.insertAdjacentHTML('afterbegin', slidesTimeline(rootElement));
    }

    for (let i = 0; i < rootElement.config.total; i++) {
        renderSlide(rootElement, i);       
    }

    slidesEvents(rootElement);
    changeSlides(rootElement);

}