import updateProgressBar from '../../ui/update-progress-bar';

export default async function(rootElement, number, perPage, ) {

    const getAllActivities = rootElement.querySelector('[data-role="get-all-activities"]');
    const progressBar = getAllActivities.querySelector('[data-role="progress-bar"]');
    const updateButton = getAllActivities.querySelector('[data-role="submit-button"]');

    rootElement.view.activitiesData = [];

    if (!number) {
        number = rootElement.view.statsData.all_ride_totals.count;
    }

    if (!perPage) {
        perPage = 50;
    }

    function generatePageUrls() {
        const pages = Math.ceil(number / perPage);
        let urls = [];

        for (let i = 0; i < pages; i++) {
            urls.push('https://www.strava.com/api/v3/athlete/activities?before=' + Date.now() + '&page=' + (i+1) + '&per_page=' + perPage + '&access_token=' + rootElement.view.oauthData.access_token)
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

            rootElement.view.activitiesData = rootElement.view.activitiesData.concat(data)

            updateProgressBar(progressBar, index + 1, pageUrls.length, false);
        }

        updateButton.removeAttribute('disabled')
        updateProgressBar(progressBar, pageUrls, pageUrls, true);

        return rootElement.view.activitiesData;
    }

    updateButton.setAttribute('disabled', '');

    return await requestPages(generatePageUrls());

}