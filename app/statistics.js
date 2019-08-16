import pageHeader from './components/page-header';
import stats from './components/stats';

export default async function(stravaToolkit) {

    const dashboardContent = stravaToolkit.querySelector('[data-role="dashboard-content"]');

    dashboardContent.innerHTML = '';

    let pageHeaderConfig = {};

    pageHeaderConfig.heading = 'Statistics';

    pageHeader(dashboardContent, pageHeaderConfig);
    stats(stravaToolkit, dashboardContent);

}