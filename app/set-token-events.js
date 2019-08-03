import getAccessToken from './get-access-token';
import getAuthCode from './get-auth-code';

export default function(rootElement) {

    const getTokenButton = rootElement.querySelector('[data-role="get-token-button"]');
    const getAuthCodeButton = rootElement.querySelector('[data-role="get-auth-code-button"]');

    getTokenButton.onclick = function(e) {
        e.preventDefault();
    
        getAccessToken(rootElement);
    }

    getAuthCodeButton.onclick = function(e) {
        e.preventDefault();
    
        getAuthCode(rootElement);
    }

}