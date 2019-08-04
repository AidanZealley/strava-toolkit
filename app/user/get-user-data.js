export default async function(rootElement) {

    const requestUrl = 'https://www.strava.com/api/v3/athlete?access_token=' + rootElement.view.oauthData.access_token;

    let response = await fetch(requestUrl);
    let data = await response.json();
    
    rootElement.view.userData = data;

    return data;

}