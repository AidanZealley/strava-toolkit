import populateGearField from './populate-gear-field';

export default function(rootElement) {

    const updateActivityFieldset = rootElement.querySelector('[data-role="update-activity"]');
    const activityGearInput = updateActivityFieldset.querySelector('[data-role="activity-gear-input"]');
    const commute = updateActivityFieldset.querySelector('[name="commute"]');
    const trainer = updateActivityFieldset.querySelector('[name="trainer"]');
    const description = updateActivityFieldset.querySelector('[name="description"]');
    const name = updateActivityFieldset.querySelector('[name="name"]');
    const type = updateActivityFieldset.querySelector('[name="type"]');
    const typeOptions = type.getElementsByTagName('option');
    const gearField = updateActivityFieldset.querySelector('[name="gear_id"]');

    if (rootElement.view.currentActivity.commute) {
        commute.checked = true;
    }

    if (rootElement.view.currentActivity.trainer) {
        trainer.checked = true;
    }

    description.value = rootElement.view.currentActivity.description;

    name.value = rootElement.view.currentActivity.name;

    Array.from(typeOptions).forEach(function(typeOption) {
        if (typeOption.value == rootElement.view.currentActivity.type) {
            typeOption.setAttribute('selected', '');
        }
    });

    if (rootElement.view.currentActivity.type == 'Ride' || rootElement.view.currentActivity.type == 'Run') {
        let gearType = '';

        if (rootElement.view.currentActivity.type == 'Ride') {
            gearType = 'bikes';
        } else {
            gearType = 'shoes'
        }

        populateGearField(rootElement, gearType, gearField);

        const gearFieldOptions = gearField.getElementsByTagName('option');

        Array.from(gearFieldOptions).forEach(function(gearFieldOption) {
            if (gearFieldOption.value == rootElement.view.currentActivity.gear_id) {
                gearFieldOption.setAttribute('selected', '');
            }
        });

        activityGearInput.removeAttribute('hidden');
    }

    updateActivityFieldset.removeAttribute('hidden');

}