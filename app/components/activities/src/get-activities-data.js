import updateProgressBar from '../../../utils/update-progress-bar';

export default async function(stravaToolkit, rootElement, number, perPage) {

    const progressBar = rootElement.querySelector('[data-role="progress-bar"]');
    const updateButton = rootElement.querySelector('[data-role="submit-button"]');

    if (stravaToolkit.view.activitiesData) {
        return stravaToolkit.view.activitiesData;
    }

    stravaToolkit.view.activitiesData = [];

    if (!number) {
        number = stravaToolkit.view.statsData.all_ride_totals.count;
    }

    if (!perPage) {
        perPage = 50;
    }

    function generatePageUrls() {
        const pages = Math.ceil(number / perPage);
        let urls = [];

        for (let i = 0; i < pages; i++) {
            urls.push('https://www.strava.com/api/v3/athlete/activities?before=' + Date.now() + '&page=' + (i+1) + '&per_page=' + perPage + '&access_token=' + stravaToolkit.view.oauthData.access_token)
        }

        return urls;
    }


    async function requestPage(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async function requestPages(pageUrls) {
        progressBar.removeAttribute('hidden');

        for (let [index, pageUrl] of pageUrls.entries()) {
            let data = await requestPage(pageUrl)

            stravaToolkit.view.activitiesData = stravaToolkit.view.activitiesData.concat(data)

            updateProgressBar(progressBar, index + 1, pageUrls.length, false);
        }

        updateButton.removeAttribute('disabled')
        updateProgressBar(progressBar, pageUrls.length, pageUrls.length, true);

        return stravaToolkit.view.activitiesData;
    }

    updateButton.setAttribute('disabled', '');

    return await requestPages(generatePageUrls());

}