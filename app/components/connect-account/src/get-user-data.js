export default async function(stravaToolkit) {

    const requestUrl = 'https://www.strava.com/api/v3/athlete?access_token=' + stravaToolkit.view.oauthData.access_token;

    let response = await fetch(requestUrl);
    let data = await response.json();

    console.log(data)
    
    stravaToolkit.view.userData = data;

    return data;

}