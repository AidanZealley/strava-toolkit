export default function(stravaToolkit, activityType) {

    let tableData = {};

    tableData.tableHeadings = [
        'Sport',
        'Date',
        'Title',
        'Time',
        'Distance',
        'Elevation'
    ];

    tableData.tableRows = [];

    stravaToolkit.view.sortedActivitiesData.forEach(function(sortedActivityType) {
        console.log(sortedActivityType.name, activityType)
        if (sortedActivityType.name == activityType) {
            sortedActivityType.activities.forEach(function(activity) {
                let newActivity = [];

                newActivity.push(activity.type);
                newActivity.push(activity.start_date_local);
                newActivity.push(activity.name);
                newActivity.push(activity.moving_time);
                newActivity.push(activity.distance);
                newActivity.push(activity.total_elevation_gain);

                tableData.tableRows.push(newActivity);
            });
        }
    });

    console.log(tableData)

    return tableData;

}