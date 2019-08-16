import modal from '../../modal';
import slides from '../../slides';
import newStatSetupForm from './new-stat-setup-form';
import newStatTypeForm from './new-stat-type-form';
import newStatFilterForm from './new-stat-filter-form';
import createFilteredData from './create-filtered-data';
import renderStat from './render-stat';

export default function(stravaToolkit, rootElement) {

    function loadModal() {
        let modalConfig = {};

        modalConfig.heading = 'New Statistic';
    
        modal(stravaToolkit, modalConfig);    
    }

    function loadSlides() {
        let slidesConfig = {};

        slidesConfig.total = 3;
        slidesConfig.timeline = true;
        slidesConfig.modifiers = 'slides--light-timeline'

        slides(modalBody, slidesConfig);
    }

    function firstSlide() {
        formSlides[0].insertAdjacentHTML('beforeend', newStatSetupForm());

        const nextButton = formSlides[0].querySelector('[data-role="next"]');

        nextButton.onclick = function(e) {
            e.preventDefault();

            const name = formSlides[0].querySelector('[name="name"]');
            const field = formSlides[0].querySelector('[name="field"]');

            statObject.name = name.value;
            statObject.field = field.value;
            
            if (name.value && field.value) {
                slidesContainer.setAttribute('data-current-slide', 1);
            }
        }
    }

    function secondSlide() {
        formSlides[1].insertAdjacentHTML('beforeend', newStatTypeForm());

        const prevButton = formSlides[1].querySelector('[data-role="prev"]');
        const nextButton = formSlides[1].querySelector('[data-role="next"]');

        prevButton.onclick = function(e) {
            e.preventDefault();

            slidesContainer.setAttribute('data-current-slide', 0);
        }

        nextButton.onclick = function(e) {
            e.preventDefault();
            
            statObject.order = formSlides[1].querySelector('[name="order"]:checked').value;

            slidesContainer.setAttribute('data-current-slide', 2);
        }
    }

    function thirdSlide() {
        formSlides[2].insertAdjacentHTML('beforeend', newStatFilterForm());

        const prevButton = formSlides[2].querySelector('[data-role="prev"]');
        const saveButton = formSlides[2].querySelector('[data-role="save"]');
        const filters = formSlides[2].querySelectorAll('[data-role="filter"]')

        prevButton.onclick = function(e) {
            e.preventDefault();

            slidesContainer.setAttribute('data-current-slide', 1);
        }

        saveButton.onclick = function(e) {
            e.preventDefault();

            statObject.filters = [];

            Array.from(filters).forEach(function(filter) {
                let newFilter = {};

                newFilter.field = filter.getAttribute('data-filter');
                newFilter.value = filter.getAttribute('data-filter-value');

                statObject.filters.push(newFilter);
            });

            let stravaToolkitStats = JSON.parse(localStorage.getItem('stravaToolkitAuth'));

            if (!stravaToolkitStats) {
                stravaToolkitStats = [];
            }

            stravaToolkitStats.push(statObject);

            localStorage.setItem('stravaToolkitStats', JSON.stringify(stravaToolkitStats));

            renderStat(stravaToolkit, statsGrid, createFilteredData(stravaToolkit, statObject));
        }
    }

    const statsGrid = rootElement.querySelector('[data-role="stats-grid"]')

    let statObject = {};

    statObject.limit = 3;

    loadModal();
    const modalBody = stravaToolkit.querySelector('[data-role="modal-body"]');
    
    loadSlides();
    const slidesContainer = modalBody.querySelector('[data-role="slides-container"]');
    const formSlides = slidesContainer.querySelectorAll('[data-role="slide"]');

    firstSlide();
    secondSlide();
    thirdSlide();

}