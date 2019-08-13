import createTableData from '../create-table-rows';
import dataTable from '../../../data-table';
import modal from '../../../modal';

export default function(stravaToolkit, rootElement) {

    const activityOptions = rootElement.querySelectorAll('[data-role="activity-option"]');
    const slidesContainer = rootElement.querySelector('[data-role="slides-container"]');
    const slide2 = slidesContainer.querySelector('[data-slide="1"]');

    function addTableToSlide(activityType) {
        slide2.innerHTML = '';

        let tableConfig = {}

        tableConfig.data = createTableData(stravaToolkit, activityType);
        tableConfig.modifiers = 'data-table--clickable-rows';

        dataTable(slide2, tableConfig);
        
        slidesContainer.setAttribute('data-current-slide', 1);

        const tableRows = slide2.querySelectorAll('[data-role="table-row"]');

        modal(stravaToolkit);

        Array.from(tableRows).forEach(function(tableRow) {
            tableRow.onclick = function() {
                const modal = stravaToolkit.querySelector('[data-component-name="modal"]');
                const modalBody = modal.querySelector('[data-role="modal-body"]');

                modalBody.innerHTML = '<p>bum</p>';
            };
        });
    }

    Array.from(activityOptions).forEach(function(activityOption) {
        const activityType = activityOption.value;

        activityOption.onclick = addTableToSlide.bind(this, activityType);
    });

}