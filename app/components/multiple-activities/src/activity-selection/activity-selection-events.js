import selectedActivities from '../selected-activities';
import addUpdateActivitiesForm from '../add-update-activities-form';

export default function(stravaToolkit, rootElement) {

    const activityOptions = rootElement.querySelectorAll('[data-role="activity-option"]');

    function setSelectionAndAddForm(activityType) {
        selectedActivities(stravaToolkit, activityType);
        addUpdateActivitiesForm(stravaToolkit, rootElement);
    }

    Array.from(activityOptions).forEach(function(activityOption) {
        const activityType = activityOption.value;

        activityOption.onclick = setSelectionAndAddForm.bind(this, activityType);
    });

}