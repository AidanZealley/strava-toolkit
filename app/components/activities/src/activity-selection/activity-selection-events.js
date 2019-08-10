import createTableData from './create-table-data';
import dataTable from '../../../data-table';

export default function(stravaToolkit, rootElement) {

    const activityOptions = rootElement.querySelectorAll('[data-role="activity-option"]');
    const slidesContainer = rootElement.querySelector('[data-role="slides-container"]');
    const slide2 = slidesContainer.querySelector('[data-slide="1"]');

    function setSelectionAndAddForm(activityType) {
        dataTable(slide2, createTableData(stravaToolkit, activityType));
        slidesContainer.setAttribute('data-current-slide', 1);
    }

    Array.from(activityOptions).forEach(function(activityOption) {
        console.log(activityOption)
        const activityType = activityOption.value;

        activityOption.onclick = setSelectionAndAddForm.bind(this, activityType);
    });

}