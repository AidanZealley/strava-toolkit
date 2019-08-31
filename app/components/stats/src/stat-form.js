import modal from '../../modal';
import slides from '../../slides';
import newStatSetupForm from './new-stat-setup-form';
import newStatTypeForm from './new-stat-type-form';
import newStatFilterForm from './new-stat-filter-form';
import createFilteredData from './create-filtered-data';
import createFilter from './create-filter';
import readFilter from './read-filter';
import saveStat from './save-stat';
import renderStat from './render-stat';

export default function(stravaToolkit, renderLocation, statObject) {

    function loadModal() {
        let modalConfig = {};

        modalConfig.heading = 'New Statistic';
    
        modal(stravaToolkit, modalConfig);    
    }

    function firstSlide() {
        formSlides[0].insertAdjacentHTML('beforeend', newStatSetupForm(statObject));

        const nextButton = formSlides[0].querySelector('[data-role="next"]');
        const timelineNodeButtons = slidesTimeline.querySelectorAll('[data-role="timeline-node-button"]');
        const name = formSlides[0].querySelector('[name="name"]');
        const field = formSlides[0].querySelector('[name="field"]');

        if (statObject.field) {
            field.value = statObject.field;
        }

        function completeSlide1() {
            statObject.name = name.value;
            statObject.field = field.value;
            
            if (name.value && field.value) {
                slidesContainer.setAttribute('data-current-slide', 1);
            }
        }

        Array.from(timelineNodeButtons).forEach(function(timelineNodeButton) {
            timelineNodeButton.onclick = function(e) {
                e.preventDefault();
    
                completeSlide1();
            }
        });

        nextButton.onclick = function(e) {
            e.preventDefault();

            completeSlide1();
        }
    }

    function secondSlide() {
        formSlides[1].insertAdjacentHTML('beforeend', newStatTypeForm(statObject));

        const prevButton = formSlides[1].querySelector('[data-role="prev"]');
        const nextButton = formSlides[1].querySelector('[data-role="next"]');
        const timelineNodeButtons = slidesTimeline.querySelectorAll('[data-role="timeline-node-button"]');

        prevButton.onclick = function(e) {
            e.preventDefault();

            slidesContainer.setAttribute('data-current-slide', 0);
        }

        function completeSlide2() {
            statObject.order = formSlides[1].querySelector('[name="order"]:checked').value;
            statObject.limit = formSlides[1].querySelector('[name="limit"]').value;

            slidesContainer.setAttribute('data-current-slide', 2);

        }

        Array.from(timelineNodeButtons).forEach(function(timelineNodeButton) {
            timelineNodeButton.onclick = function(e) {
                e.preventDefault();
    
                completeSlide2();
            }
        });

        nextButton.onclick = function(e) {
            e.preventDefault();
            
            completeSlide2();
        }
    }

    function thirdSlide() {
        formSlides[2].insertAdjacentHTML('beforeend', newStatFilterForm(statObject));

        const prevButton = formSlides[2].querySelector('[data-role="prev"]');
        const saveButton = formSlides[2].querySelector('[data-role="save"]');
        const filterContainer = formSlides[2].querySelector('[data-role="filter-container"]')
        const addFilterButton = formSlides[2].querySelector('[data-role="add-filter-button"]');
        let removeFilterButtons = filterContainer.querySelectorAll('[data-role="remove-filter"]');

        Array.from(removeFilterButtons).forEach(function(removeFilterButton) {
            removeFilterButton.onclick = function(e) {
                e.preventDefault();

                removeFilterButton.parentElement.setAttribute('hidden', '')
            }
        });

        prevButton.onclick = function(e) {
            e.preventDefault();

            slidesContainer.setAttribute('data-current-slide', 1);
        }

        addFilterButton.onclick = function(e) {
            e.preventDefault();

            let newFilter = {};

            newFilter.field = formSlides[2].querySelector('[name="filter"]').value;

            filterContainer.insertAdjacentHTML('beforeend', createFilter(newFilter));

            removeFilterButtons = filterContainer.querySelectorAll('[data-role="remove-filter"]');

            Array.from(removeFilterButtons).forEach(function(removeFilterButton) {
                removeFilterButton.onclick = function(e) {
                    e.preventDefault();

                    removeFilterButton.parentElement.setAttribute('hidden', '')
                }
            });
        }

        saveButton.onclick = function(e) {
            e.preventDefault();

            const filters = filterContainer.querySelectorAll('[data-role="filter"]');

            statObject.filters = [];

            Array.from(filters).forEach(function(filter) {
                if (!filter.hasAttribute('hidden')) {
                    let newFilter = {};

                    newFilter.field = filter.getAttribute('data-filter');
                    newFilter.value = readFilter(filter);

                    statObject.filters.push(newFilter);
                }
            });

            statObject.data = createFilteredData(stravaToolkit, statObject);

            saveStat(statObject);

            renderStat(stravaToolkit, renderLocation, statObject);
        }
    }

    loadModal();
    const modalBody = stravaToolkit.querySelector('[data-role="modal-body"]');

    let slidesConfig = {};

    slidesConfig.total = 3;
    slidesConfig.timeline = true;
    slidesConfig.modifiers = 'slides--light-timeline'

    slides(modalBody, slidesConfig);

    const slidesContainer = modalBody.querySelector('[data-role="slides-container"]');
    const slidesTimeline = modalBody.querySelector('[data-role="slides-timeline"]');
    const formSlides = slidesContainer.querySelectorAll('[data-role="slide"]');

    firstSlide();
    secondSlide();
    thirdSlide();

}