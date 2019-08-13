import activities from './components/activities';

export default async function(stravaToolkit, params) {

    const dashboardContent = stravaToolkit.querySelector('[data-role="dashboard-content"]');

    dashboardContent.innerHTML = '';

    activities(stravaToolkit, dashboardContent, params);

}