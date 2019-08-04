import requestAuth from './request-auth';

export default function(rootElement) {

    const connectAccountForm = rootElement.querySelector('[data-role="connect-account-form"]');
    const connectAccountButton = connectAccountForm.querySelector('[data-role="submit-button"]');

    connectAccountButton.onclick = function(e) {
        e.preventDefault();
    
        requestAuth(rootElement);
    }

}