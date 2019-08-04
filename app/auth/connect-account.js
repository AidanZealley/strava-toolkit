import setAuthEvents from './set-auth-events';
import getAccessToken from './get-access-token';
import getUserData from '../user/get-user-data';
import getStatsData from '../user/get-stats-data';
import connectAccountTemplate from '../templates/auth/connect-account-template';
import connectingAccountTemplate from '../templates/auth/connecting-account-template';

export default async function(rootElement) {

    const stravaToolkitAuth = localStorage.getItem('stravaToolkitAuth');

    if (stravaToolkitAuth) {
        rootElement.insertAdjacentHTML('afterbegin', connectingAccountTemplate());

        rootElement.view.oauthData = await getAccessToken(rootElement);

        await getUserData(rootElement);
        await getStatsData(rootElement);
        
        const connectingAccount = rootElement.querySelector('[data-role="connecting-account"]');
        connectingAccount.parentNode.removeChild(connectingAccount);

        rootElement.view.isConnected = true;
    } else {
        rootElement.insertAdjacentHTML('afterbegin', connectAccountTemplate());
        setAuthEvents(rootElement);
    }

}