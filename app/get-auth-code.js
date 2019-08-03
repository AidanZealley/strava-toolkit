export default function(rootElement) {

    const authCodeForm = rootElement.querySelector('[data-role="authorisation-code-form"]');
    const authCodeFormInputs = authCodeForm.getElementsByTagName('input');
    let requestUrl = 'https://www.strava.com/oauth/authorize?';
    let requestParams = [];
    let scope = [];

    Array.from(authCodeFormInputs).forEach(function(authCodeFormInput) {
        if (authCodeFormInput.value) {
            if (authCodeFormInput.name == 'scope' && authCodeFormInput.checked) {
                scope.push(authCodeFormInput.value)
            } else {
                let newParam = {};

                newParam.name = authCodeFormInput.name;
                newParam.value = authCodeFormInput.value;

                requestParams.push(newParam);
            }
        }
    });

    requestParams.forEach(function(requestParam) {
        requestUrl += requestParam.name + '=' + requestParam.value + '&';
    });

    requestUrl += 'scope='

    scope.forEach(function(scopeItem, index) {
        requestUrl += scopeItem;

        if (index < scope.length - 1) {
            requestUrl += ',';
        }
    });

    window.location.href = requestUrl;

}