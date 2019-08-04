import getAuthCode from './get-auth-code';

export default function(rootElement) {

    const connectAccountForm = rootElement.querySelector('[data-role="connect-account-form"]');
    const clientID = connectAccountForm.querySelector('[name="client_id"]').value;
    const clientSecret = connectAccountForm.querySelector('[name="client_secret"]').value;

    const stravaToolkitAuth = {
        clientID: clientID,
        clientSecret: clientSecret
    }

    localStorage.setItem('stravaToolkitAuth', JSON.stringify(stravaToolkitAuth));

    getAuthCode(clientID);

}