export default async function() {

    const stravaToolkitAuth = JSON.parse(localStorage.getItem('stravaToolkitAuth'));

    if (stravaToolkitAuth.clientID != '' || stravaToolkitAuth.clientSecret != '') {
        if (!stravaToolkitAuth.authCode) {
            const url_string = window.location.href;
            const url = new URL(url_string);
            const authCode = url.searchParams.get("code");

            stravaToolkitAuth.authCode = authCode;

            localStorage.setItem('stravaToolkitAuth', JSON.stringify(stravaToolkitAuth));

            history.pushState({}, document.title, window.location.origin);
        }

        let requestUrl = 'https://www.strava.com/oauth/token?client_id=' + stravaToolkitAuth.clientID + '&client_secret=' + stravaToolkitAuth.clientSecret + '&code=' + stravaToolkitAuth.authCode + '&grant_type=authorization_code';

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };

        try {
            let response = await fetch(requestUrl, settings);
            if (!response.ok)
                throw new Error(response.statusText);
            let data = await response.json();
            return data;
        } catch (err) {
            console.log(err)
        }
    } else {
        return false;
    }

}