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

    let filteredActivities = [];

    if (statObject.filters.length > 0) {
        // For each filter loop through and add matching activities to filteredActivities 
        statObject.filters.forEach(function(filter) {
            stravaToolkit.view.activitiesData.forEach(function(activity) {
                let match = false;

                if (typeof filter.value == 'string') {
                    if (activity[filter.field] == filter.value || activity[filter.field].toLowerCase().includes(filter.value.toLowerCase())) {
                        match = true;
                    }
                } else if (activity[filter.field] == filter.value) {
                    match = true;
                }
                
                if (match) {
                    filteredActivities.push(activity);
                }
            });
        });
    } else {
        filteredActivities = stravaToolkit.view.activitiesData;
    }

    // Sort filteredActivities in chosen direction
    filteredActivities.sort(compareValues(statObject.field, statObject.order));

    let statData = [];

    for (let i = 0; i < statObject.limit; i++) {
        if (filteredActivities[i]) {
            statData.push(filteredActivities[i][statObject.field]);
        }
    }

    return statData;

}