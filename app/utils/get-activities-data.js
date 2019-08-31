import updateProgressBar from './update-progress-bar';

export default async function(stravaToolkit, rootElement, total, perPage) {

    const progressBar = rootElement.querySelector('[data-role="progress-bar"]');

    let activitiesData = [];

    if (!total) {
        total = 30;
    }

    if (!perPage) {
        perPage = 30;
    }

    function generatePageUrls() {
        const pages = Math.ceil(total / perPage);
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
        if (progressBar) {
            progressBar.removeAttribute('hidden');
        }

        for (let [index, pageUrl] of pageUrls.entries()) {
            let data = await requestPage(pageUrl)

            activitiesData = activitiesData.concat(data)

            if (progressBar) {
                updateProgressBar(progressBar, index + 1, pageUrls.length, false);
            }

            if (data.length < perPage) {
                break;
            }
        }

        if (progressBar) {
            updateProgressBar(progressBar, pageUrls.length, pageUrls.length, true);
        }

        console.log(activitiesData)

        return activitiesData;
    }

    return await requestPages(generatePageUrls());

}