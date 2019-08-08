export default function(stravaToolkit, selection) {

    if (selection == 'All') {
        stravaToolkit.view.selectedActivities =  stravaToolkit.view.activitiesData;
    } else {
        stravaToolkit.view.selectedActivities = [];

        stravaToolkit.view.activitiesData.forEach(function(activity) {
            if (activity.type == selection) {
                stravaToolkit.view.selectedActivities.push(activity);
            }
        });
    }

}