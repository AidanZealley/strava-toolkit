export default async function(stravaToolkit) {

    const requestUrl = 'https://www.strava.com/api/v3/athletes/35130920/stats?access_token=' + stravaToolkit.view.oauthData.access_token;

    let response = await fetch(requestUrl);
    let data = await response.json();

    console.log(data)
    
    stravaToolkit.view.statsData = data;

    return data;

}