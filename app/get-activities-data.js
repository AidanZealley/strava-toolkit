export default function(rootElement) {

    const pages = Math.ceil(rootElement.view.statsData.all_ride_totals.count / 200);

    rootElement.view.activitiesData = [];

    function fetchUrls(pages) {
        let urls = [];

        for (let i = 0; i < pages; i++) {
            urls.push('https://www.strava.com/api/v3/athlete/activities?before=' + Date.now() + '&page=' + (i+1) + '&per_page=200&access_token=' + rootElement.view.oauthData.access_token)
        }

        return urls;
    }

    Promise.all(fetchUrls(pages).map(url =>
        fetch(url).then(response => response.json())
    )).then(dataPages => {
        dataPages.forEach(function(dataPage) {
            rootElement.view.activitiesData = rootElement.view.activitiesData.concat(dataPage)
        })
        console.log(rootElement.view.activitiesData);
    }).catch(function(err) {
        alert('Failed to retrieve activities data.')
    });

}