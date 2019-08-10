export default function(stravaToolkit) {

    stravaToolkit.view.sortedActivitiesData = [];

    function newActivityType(name, activity) {
        let newActivityType = {};

        newActivityType.name = name;

        if (Array.isArray(activity)) {
            newActivityType.activities = activity
        } else {
            newActivityType.activities = [activity];
        }

        return newActivityType;
    }

    stravaToolkit.view.activitiesData.forEach(function(activity) {
        let typeFound = false;

        stravaToolkit.view.sortedActivitiesData.forEach(function(activityType) {
            // Add to type if it's an existing activity
            if (activityType.name == activity.type) {
                typeFound = true;
                activityType.activities.push(activity);
            }
        });

        // Creat new type if not found
        if (!typeFound) {
            stravaToolkit.view.sortedActivitiesData.push(newActivityType(activity.type, activity));
        }

        // console.log(stravaToolkit.view.sortedActivitiesData[0])
    });

    // Add an option to use all activities if there's more than one type
    if (stravaToolkit.view.sortedActivitiesData.length > 1) {
        stravaToolkit.view.sortedActivitiesData.unshift(newActivityType('All', stravaToolkit.view.activitiesData))
    }

    console.log(stravaToolkit.view.sortedActivitiesData)

}