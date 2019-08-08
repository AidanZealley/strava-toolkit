export default function(stravaToolkit) {

    const activityTypes = [];

    function newActivityType(type, count) {
        let newActivityType = {};

        newActivityType.name = type;

        if (count) {
            newActivityType.count = count;
        } else {
            newActivityType.count = 1;
        }

        return newActivityType;
    }

    stravaToolkit.view.activitiesData.forEach(function(activity) {
        let typeFound = false;

        activityTypes.forEach(function(activityType) {
            // Increment count if it's an existing activity
            if (activityType.name == activity.type) {
                typeFound = true
                activityType.count++;
            }
        });

        // Creat new type if not found
        if (!typeFound) {
            activityTypes.push(newActivityType(activity.type, false));
        }
    });

    // Add an option to use all activities if there's more than one type
    if (activityTypes.length > 1) {
        activityTypes.unshift(newActivityType('All', stravaToolkit.view.activitiesData.length))
    }

    return activityTypes;

}