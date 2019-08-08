import getAuthCode from './get-auth-code';

export default function(connectAccountForm) {

    const clientID = connectAccountForm.querySelector('[name="client_id"]').value;
    const clientSecret = connectAccountForm.querySelector('[name="client_secret"]').value;

    if (clientID.value != '' || clientSecret.value != '') {
        const stravaToolkitAuth = {
            clientID: clientID,
            clientSecret: clientSecret
        }

        localStorage.setItem('stravaToolkitAuth', JSON.stringify(stravaToolkitAuth));

        getAuthCode(clientID);
    }

}