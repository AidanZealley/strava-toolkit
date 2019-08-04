export default async function(rootElement) {

    const requestUrl = 'https://www.strava.com/api/v3/athletes/35130920/stats?access_token=' + rootElement.view.oauthData.access_token;

    let response = await fetch(requestUrl);
    let data = await response.json();
    
    rootElement.view.statsData = data;

    return data;

}