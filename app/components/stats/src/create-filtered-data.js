export default function(stravaToolkit, stat) {

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

    let filteredStats = [];

    // For each filter loop through and add matching activities to filteredData 
    stat.filters.forEach(function(filter) {
        stravaToolkit.view.activitiesData.forEach(function(activity) {
            if (activity[filter.field] == filter.value) {
                filteredStats.push(activity);
            }
        });
    });

    // Sort filteredData in chosen direction
    filteredStats.sort(compareValues(stat.field, stat.order));

    stat.data = [];

    for (let i = 0; i < stat.limit; i++) {
        stat.data.push(filteredStats[i][stat.field]);
    }

    console.log(filteredStats, stat.field, stat.data);

    return stat;

}