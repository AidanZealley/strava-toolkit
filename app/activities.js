import pageHeader from './components/page-header';
import activities from './components/activities';

export default async function(stravaToolkit, params) {

    const dashboardContent = stravaToolkit.querySelector('[data-role="dashboard-content"]');

    dashboardContent.innerHTML = '';

    let pageHeaderConfig = {};

    pageHeaderConfig.heading = 'Activities';

    pageHeader(dashboardContent, pageHeaderConfig);
    activities(stravaToolkit, dashboardContent, params);

}