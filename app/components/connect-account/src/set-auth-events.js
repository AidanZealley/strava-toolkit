import requestAuth from './request-auth';

export default function(stravaToolkit) {

    const connectAccountForm = stravaToolkit.querySelector('[data-role="connect-account-form"]');
    const connectAccountButton = connectAccountForm.querySelector('[data-role="submit-button"]');

    connectAccountButton.onclick = function(e) {
        e.preventDefault();
    
        requestAuth(connectAccountForm);
    }

}