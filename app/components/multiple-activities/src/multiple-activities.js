import getActivitiesData from './get-activities-data';
import activitySelection from './activity-selection/activity-selection'

export default async function(stravaToolkit, rootElement) {

    const getAllActivitiesButton = rootElement.querySelector('[data-role="submit-button"]');
    
    async function getDataAndShowForm() {
        await getActivitiesData(stravaToolkit, rootElement, false, 20)
        .then(function() {
            activitySelection(stravaToolkit, rootElement);
        });
    }

    getAllActivitiesButton.onclick = getDataAndShowForm;
    
}