import getUserData from './get-user-data';
import getStatsData from './get-stats-data';

export default function(rootElement) {

    const accessTokenForm = rootElement.querySelector('[data-role="access-token-form"]');
    const accessTokenFormInputs = accessTokenForm.getElementsByTagName('input');
    let requestUrl = 'https://www.strava.com/oauth/token?';
    let requestParams = [];

    Array.from(accessTokenFormInputs).forEach(function(accessTokenFormInput) {
        if (accessTokenFormInput.value) {
            let newParam = {};

            newParam.name = accessTokenFormInput.name;
            newParam.value = accessTokenFormInput.value;

            requestParams.push(newParam);
        }
    });

    if (requestParams.length == accessTokenFormInputs.length) {
        requestParams.forEach(function(requestParam, index) {
            requestUrl += requestParam.name + '=' + requestParam.value;

            if (index < requestParams.length - 1) {
                requestUrl += '&';
            }
        });
    }

    fetch(requestUrl, {
        method: 'post'
    })
    .then(response => response.json())
    .then(function(data){
        rootElement.view.oauthData = data;
    })
    .then(function() {
        console.log(rootElement.view.oauthData.access_token)
    })
    .then(function() {
        getUserData(rootElement);
        getStatsData(rootElement);
    })
    .catch(function(err) {
        alert('Failed to retrieve token.')
    });

}