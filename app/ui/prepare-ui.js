import populateGearField from './populate-gear-field';

export default function(rootElement) {

    const updateAllGearForm = rootElement.querySelector('[data-role="update-all-gear-form"]');
    const updateAllActivitiesGear = updateAllGearForm.querySelector('[name="gear_id"]');


    populateGearField(rootElement, false, updateAllActivitiesGear);

}