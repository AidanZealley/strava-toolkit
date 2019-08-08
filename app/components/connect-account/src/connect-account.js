import getAccessToken from './get-access-token';
import getUserData from './get-user-data';
import getStatsData from './get-stats-data';
import setAuthEvents from './set-auth-events'
import connectPage from './connect-page';
import loadingScreen from '../../loading-screen';
import hideLoadingScreen from '../../../utils/hide-loading-screen';

export default async function(stravaToolkit) {

    // loadingScreen(stravaToolkit, loadingScreenConfig);

    if (!stravaToolkit.view.isConnected) {
        const stravaToolkitAuth = JSON.parse(localStorage.getItem('stravaToolkitAuth'));
        const loadingScreenConfig = {
            message: 'Connecting to your account...'
        }

        if (stravaToolkitAuth) {
            loadingScreen(stravaToolkit, loadingScreenConfig);

            stravaToolkit.view.oauthData = await getAccessToken();

            if (stravaToolkit.view.oauthData) {
                await getUserData(stravaToolkit);
                await getStatsData(stravaToolkit);
                
                stravaToolkit.view.isConnected = true;

                hideLoadingScreen(stravaToolkit);
            } else {
                localStorage.removeItem('stravaToolkitAuth');
                stravaToolkit.insertAdjacentHTML('beforeend', connectPage());
                setAuthEvents(stravaToolkit);
                hideLoadingScreen(stravaToolkit);
            }
        } else {
            stravaToolkit.insertAdjacentHTML('beforeend', connectPage());
            setAuthEvents(stravaToolkit);
        }
    } else {
        return;
    }

}