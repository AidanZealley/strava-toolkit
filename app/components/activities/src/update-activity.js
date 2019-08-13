export default async function(stravaToolkit, requestBody, activityId) {

    const requestUrl = 'https://www.strava.com/api/v3/activities/' + activityId + '?access_token=' + stravaToolkit.view.oauthData.access_token;
    const settings = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    };

    let response = await fetch(requestUrl, settings);
    let data = await response.json()
    return data;

}