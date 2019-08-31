import getActivitiesData from '../../../utils/get-activities-data';
import createTableData from './create-table-data';
import dataTable from '../../data-table';
import modal from '../../modal';
import updateActivity from '../../update-activity';
import pagination from '../../pagination';
import loadingScreen from '../../loading-screen';
import hideLoadingScreen from '../../../utils/hide-loading-screen';
import activitiesFilter from '../../activities-filter';

export default async function(stravaToolkit, rootElement, page) {

    const activitiesFilterPanel = rootElement.querySelector('[data-role="activities-filter"]');
    const activitiesContentPanel = rootElement.querySelector('[data-role="activities-content"]');
    const activitiesFooterPanel = rootElement.querySelector('[data-role="activities-footer"]');

    async function applyFilters() {
        defaults.total = activitiesFilterPanel.querySelector('[name="number"]').value;

        await getActivitiesData(stravaToolkit, rootElement, defaults.total, defaults.perPage)
        .then(function(data) {
            let activityData = data;

            activityData = filteredActivitiesData(data);

            localStorage.setItem('stravaToolkitActivities', JSON.stringify(activityData));

            renderPage(activityData);
        });
    }

    function populateFiltersPanel() {
        const activitiesFilterConfig = {
            render: 'afterbegin',
            filters: filtersObject
        };
        
        activitiesFilter(activitiesFilterPanel, activitiesFilterConfig);

        const applyFiltersButton = activitiesFilterPanel.querySelector('[data-role="submit"]');

        applyFiltersButton.onclick = function(e) {
            e.preventDefault();

            applyFilters();

            window.location = '#activities';

            page = 1;
        }
    }

    function tableRowEvents() {

        const table = activitiesContentPanel.querySelector('[data-component-name="data-table"]');
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

    function activitiesTable(data) {
        activitiesContentPanel.innerHTML = '';

        const tableHeadings = [
            'Route',
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

        dataTable(activitiesContentPanel, tableConfig);
        tableRowEvents();
    }

    function addPagination(total) {
        activitiesFooterPanel.innerHTML = '';

        if (total <= defaults.perPage) {
            return;
        }

        let paginationConfig = {};

        paginationConfig.pages = Math.ceil(total / defaults.perPage);
        paginationConfig.currentPage = page;
        paginationConfig.rootUrl = '#activities';

        pagination(activitiesFooterPanel, paginationConfig); 
    }

    function filteredActivitiesData(data) {
        const activitiesFilterConfig = {
            activities: data
        };

        return activitiesFilter(activitiesFilterPanel, activitiesFilterConfig);
    }

    async function getActivities() {
        await getActivitiesData(stravaToolkit, rootElement, defaults.total, defaults.perPage)
        .then(function(data) {
            let activitiesData = data;

            if (filtersObject) {
                activitiesData = filteredActivitiesData(data);
            }

            localStorage.setItem('stravaToolkitActivities', JSON.stringify(activitiesData));

            renderPage(activitiesData);
        });
    }

    function getPage(data) {
        return data.slice((page-1)*defaults.perPage, page*defaults.perPage);
    }

    function renderPage(data) {
        const displayData = getPage(data);
        activitiesTable(displayData);
        addPagination(data.length);
        hideLoadingScreen(stravaToolkit);
    }

    const loadingScreenConfig = {
        message: 'Loading activities...'
    }
    loadingScreen(rootElement, loadingScreenConfig);

    let defaults = {
        total: 100,
        perPage: 25
    }

    const filtersObject = JSON.parse(localStorage.getItem('stravaToolkitActivitiesFilter'));
    const storedActivities = JSON.parse(localStorage.getItem('stravaToolkitActivities'));

    populateFiltersPanel();

    defaults.total = activitiesFilterPanel.querySelector('[name="number"]').value;

    if (storedActivities) {
        renderPage(storedActivities);
    } else {
        getActivities();
    }
    
}