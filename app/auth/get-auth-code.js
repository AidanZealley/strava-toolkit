export default function(clientID) {

    let requestUrl = 'https://www.strava.com/oauth/authorize?client_id=' + clientID + '&redirect_uri=http://localhost:3000/&response_type=code&scope=profile:write&scope=profile:read_all,activity:read_all,activity:write';

    window.location.href = requestUrl;

}