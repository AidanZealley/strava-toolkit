import getActivitiesData from '../../../utils/get-activities-data';
import createTableData from './create-table-data';
import dataTable from '../../data-table';
import modal from '../../modal';
import updateActivity from '../../update-activity';
import pagination from '../../pagination';
import loadingScreen from '../../loading-screen';
import hideLoadingScreen from '../../../utils/hide-loading-screen';

export default async function(stravaToolkit, rootElement, page) {

    const activitiesFilter = rootElement.querySelector('[data-role="activities-filter"]');
    const activitiesContent = rootElement.querySelector('[data-role="activities-content"]');
    const activitiesFooter = rootElement.querySelector('[data-role="activities-footer"]');

    function activitiesTable(data) {
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

        dataTable(activitiesContent, tableConfig);
    }

    function tableRowEvents() {

        const table = activitiesContent.querySelector('[data-component-name="data-table"]');
        const tableRows = table.querySelectorAll('[data-role="table-row"]');

        let modalConfig = {};

        modalConfig.heading = 'Update Activity';

        modal(stravaToolkit, modalConfig);

        Array.from(tableRows).forEach(function(tableRow) {
            tableRow.onclick = function() {
                const modal = stravaToolkit.querySelector('[data-component-name="modal"]');
                const modalBody = modal.querySelector('[data-role="modal-body"]');

                let updateConfig = {}

                updateConfig.activityId = tableRow.getAttribute('data-activity-id');
                updateConfig.row = tableRow.getAttribute('data-row');
                updateConfig.updatingFor = table;

                updateActivity(stravaToolkit, modalBody, updateConfig);
            };
        });
    }

    const loadingScreenConfig = {
        message: 'Loading activities...'
    }

    loadingScreen(activitiesContent, loadingScreenConfig);

    await getActivitiesData(stravaToolkit, rootElement, 30, 30, page)
    .then(function(data) {
        hideLoadingScreen(stravaToolkit);
        activitiesTable(data);
        tableRowEvents();

        let paginationConfig = {};

        paginationConfig.pages = Math.ceil((stravaToolkit.view.statsData.all_ride_totals.count + stravaToolkit.view.statsData.all_run_totals.count) / 30);
        paginationConfig.currentPage = page;
        paginationConfig.rootUrl = '#activities';

        pagination(activitiesFooter, paginationConfig); 
    });
    
}