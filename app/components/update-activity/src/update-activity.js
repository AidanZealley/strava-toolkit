import populateGearField from './populate-gear-field';
import updateActivityEvents from './update-activity-events';

export default function(stravaToolkit, rootElement) {

    const name = rootElement.querySelector('[name="name"]');
    const description = rootElement.querySelector('[name="description"]');
    const type = rootElement.querySelector('[name="type"]');
    const gearField = rootElement.querySelector('[name="gear_id"]');
    const gearBlock = rootElement.querySelector('[data-role="gear"]');
    const commute = rootElement.querySelector('[name="commute"]');
    const activity = stravaToolkit.view.activitiesData[rootElement.config.row];

    function gearType(activity) {
        let gearType = '';

        if (activity == 'Ride') {
            gearType = 'bikes';
        } else if (activity == 'Run') {
            gearType = 'shoes';
        } else {
            gearType = false;
        }

        return gearType;
    }

    name.value = activity.name;

    if (activity.description) {
        description.value = activity.description;
    }

    type.value = activity.type;

    populateGearField(stravaToolkit, gearType(activity.type), gearField, gearBlock, activity);

    if (activity.commute) {
        commute.checked = true;
    }

    type.addEventListener('change', function() {
        populateGearField(stravaToolkit, gearType(type.value), gearField, gearBlock, activity);
    }, false);

    updateActivityEvents(stravaToolkit, rootElement);

}