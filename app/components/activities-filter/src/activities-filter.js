export default function(rootElement) {

    let filtersObject = {
        keywords: rootElement.querySelector('[name="keywords"]').value,
        type: rootElement.querySelector('[name="type"]').value,
        number: rootElement.querySelector('[name="number"]').value,
        useNames: rootElement.querySelector('[name="names"]').checked ? true : false,
        useDescription: rootElement.querySelector('[name="descriptions"]').checked ? true : false,
        commute: rootElement.querySelector('[name="commute"]').checked ? true : false,
        privateActivities: rootElement.querySelector('[name="private"]').checked ? true : false,
    };

    console.log(filtersObject)

    localStorage.setItem('stravaToolkitActivitiesFilter', JSON.stringify(filtersObject));

    let keywordsArray = filtersObject.keywords.split(' ');
    let filteredActivities = rootElement.config.activities.slice(0);

    function keywordsFilter(activity) {
        let matchFound = false;

        for (let i = 0; i < keywordsArray.length; i++) {
            if (filtersObject.useNames && activity.name.toLowerCase().includes(keywordsArray[i].toLowerCase())) {
                matchFound = true;
                break;
            } else if (filtersObject.useDescription && activity.description.toLowerCase().includes(keywordsArray[i].toLowerCase())) {
                matchFound = true;
                break;
            }
        }

        return matchFound;
    }

    if (filtersObject.keywords) {
        filteredActivities = filteredActivities.filter(function(activity) {
            return keywordsFilter(activity);
        });
    }

    if (filtersObject.type != 'All') {
        filteredActivities = filteredActivities.filter(function(activity) {
            return activity.type == filtersObject.type;
        });
    }

    if (filtersObject.commute) {
        filteredActivities = filteredActivities.filter(function(activity) {
            return activity.commute;
        });
    }

    if (filtersObject.privateActivities) {
        filteredActivities = filteredActivities.filter(function(activity) {
            return activity.private;
        });
    }

    return filteredActivities;

}