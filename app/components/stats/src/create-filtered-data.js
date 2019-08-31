export default function(stravaToolkit, statObject) {

    function compareValues(key, order='asc') {
        return function(a, b) {
            if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }
        
            const varA = (typeof a[key] === 'string') ?
                a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ?
                b[key].toUpperCase() : b[key];
        
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order == 'desc') ? (comparison * -1) : comparison
            );
        };
    }

    let filteredActivities = stravaToolkit.view.activitiesData.slice(0);

    if (statObject.filters.length > 0) {
        statObject.filters.forEach(function(filter) {
            filteredActivities = filteredActivities.filter(function(activity) {
                if (typeof filter.value == 'string') {
                    return activity[filter.field].toLowerCase().includes(filter.value.toLowerCase());
                } else {
                    return activity[filter.field] == filter.value;
                }
            })
        });
    }

    filteredActivities.sort(compareValues(statObject.field, statObject.order));

    let statData = [];

    for (let i = 0; i < statObject.limit; i++) {
        if (filteredActivities[i]) {
            statData.push(filteredActivities[i]);
        }
    }

    return statData;

}