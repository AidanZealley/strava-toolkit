import multipleActivities from './components/multiple-activities';

export default async function(stravaToolkit) {

    const dashboardContent = stravaToolkit.querySelector('[data-role="dashboard-content"]');

    dashboardContent.innerHTML = '';

    multipleActivities(stravaToolkit, dashboardContent);

}