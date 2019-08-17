import newStat from './new-stat';
import getActivitiesData from '../../../utils/get-activities-data';
import loadingScreen from '../../loading-screen';
import hideLoadingScreen from '../../../utils/hide-loading-screen';
import renderStats from './render-stats';

export default async function(stravaToolkit, rootElement) {

    const newStatButton = rootElement.querySelector('[data-role="new-stat"]');
    const statsGrid = rootElement.querySelector('[data-role="stats-grid"]');

    const loadingScreenConfig = {
        message: 'Loading stats...'
    }

    loadingScreen(rootElement, loadingScreenConfig);

    await getActivitiesData(stravaToolkit, rootElement, 100, 50, false)
    .then(function(data) {
        hideLoadingScreen(stravaToolkit);
        newStatButton.onclick = newStat.bind(this, stravaToolkit, rootElement);

        renderStats(stravaToolkit, statsGrid);
    })

}