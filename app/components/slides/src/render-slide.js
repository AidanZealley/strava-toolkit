export default function(rootElement, index) {

    const slidesContainer = rootElement.querySelector('[data-role="slides-container"]');
    const slideFrame= `
        <div class="slides__slide" data-role="slide" data-slide="${index}"></div>
    `;

    slidesContainer.insertAdjacentHTML('beforeend', slideFrame);

}