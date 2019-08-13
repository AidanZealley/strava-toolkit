import getActivitiesData from './get-activities-data';
import createTableData from './create-table-data';
import dataTable from '../../data-table';

export default async function(stravaToolkit, rootElement, page) {

    // const getAllActivitiesButton = rootElement.querySelector('[data-role="submit-button"]');
    const multipleActivitiesContent = rootElement.querySelector('[data-role="activities-content"]');

    // function loadFirstSLide() {
    //     multipleActivitiesContent.innerHTML = '';

    //     slides(multipleActivitiesContent, {total: 3, disableInactive: true});

    //     const slidesContainer = multipleActivitiesContent.querySelector('[data-role="slides-container"]');
    //     const slide1 = slidesContainer.querySelector('[data-slide="0"]');

    //     slide1.insertAdjacentHTML('beforeend', activitySelection(stravaToolkit, rootElement, slide1));
    // }

    // async function startSlides(refresh) {
    //     multipleActivitiesContent.innerHTML = '';

    //     if (refresh) {
    //         await getActivitiesData(stravaToolkit, rootElement, 40, 20)
    //         .then(function() {
    //             loadFirstSLide()
    //         });    
    //     } else {
    //         loadFirstSLide()
    //     }
    // }

    // if (stravaToolkit.view.activitiesData) {
    //     startSlides(false);
    // }

    // getAllActivitiesButton.onclick = startSlides.bind(this, true);


    // import createTableData from './create-table-data';
    // import dataTable from '../../../data-table';
    // import modal from '../../../modal';

    await getActivitiesData(stravaToolkit, rootElement, 30, 30, page)
    .then(function(data) {
        const tableHeadings = [
            'Sport',
            'Date',
            'Title',
            'Time',
            'Distance',
            'Elevation'
        ];
        let tableConfig = {}
        tableConfig.data = createTableData(stravaToolkit, tableHeadings, data);
        tableConfig.modifiers = 'data-table--clickable-rows';

        dataTable(multipleActivitiesContent, tableConfig);
    });
    
}