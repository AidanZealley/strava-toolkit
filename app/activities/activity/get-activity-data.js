export default async function(rootElement, activityId) {

    const requestUrl = 'https://www.strava.com/api/v3/activities/' + activityId + '?include_all_efforts=true&access_token=' + rootElement.view.oauthData.access_token;

    let response = await fetch(requestUrl);
    let data = await response.json();
    
    rootElement.view.currentActivity = data;
    return data;

}