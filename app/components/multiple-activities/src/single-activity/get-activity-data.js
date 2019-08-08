export default async function(stravaToolkit, activityId) {

    const requestUrl = 'https://www.strava.com/api/v3/activities/' + activityId + '?include_all_efforts=true&access_token=' + stravaToolkit.view.oauthData.access_token;

    let response = await fetch(requestUrl);
    let data = await response.json();
    
    stravaToolkit.view.currentActivity = data;
    return data;

}