import populateGearField from '../../../update-activity/src/populate-gear-field';
import updateActivitiesFormTemplate from './update-activities-form';
import setUpdateActivitiesFormEvents from './set-update-activities-form-events';

export default async function(stravaToolkit, rootElement) {

    const updateActivities = rootElement.querySelector('[data-role="update-activities"]');

    if (updateActivities) {
        updateActivities.parentElement.removeChild(updateActivities);
    }

    rootElement.insertAdjacentHTML('beforeend', updateActivitiesFormTemplate(stravaToolkit));

    const gearField = rootElement.querySelector('[data-role="gear-field"]');

    populateGearField(stravaToolkit, false, gearField);

    setUpdateActivitiesFormEvents(stravaToolkit);

}