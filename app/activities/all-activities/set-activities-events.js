import getActivitiesData from './get-activities-data';
import updateAllActivities from './update-all-activities';

export default async function(rootElement) {

    const updateAllCommuteForm = rootElement.querySelector('[data-role="update-all-commute-form"]');
    const updateAllCommuteButton = updateAllCommuteForm.querySelector('[data-role="submit-button"]');

    const updateAllTrainerForm = rootElement.querySelector('[data-role="update-all-trainer-form"]');
    const updateAllTrainerButton = updateAllTrainerForm.querySelector('[data-role="submit-button"]');

    const updateAllDescriptionForm = rootElement.querySelector('[data-role="update-all-description-form"]');
    const updateDescriptionButton = updateAllDescriptionForm.querySelector('[data-role="submit-button"]');

    const updateAllNameForm = rootElement.querySelector('[data-role="update-all-name-form"]');
    const updateAllNameButton = updateAllNameForm.querySelector('[data-role="submit-button"]');

    const updateAllTypeForm = rootElement.querySelector('[data-role="update-all-type-form"]');
    const updateAllTypeButton = updateAllTypeForm.querySelector('[data-role="submit-button"]');

    const updateAllGearForm = rootElement.querySelector('[data-role="update-all-gear-form"]');
    const updateAllGearButton = updateAllGearForm.querySelector('[data-role="submit-button"]');

    function updateAll(form) {
        event.preventDefault();

        updateAllActivities(rootElement, form);
    }

    updateAllCommuteButton.onclick = updateAll.bind(this, updateAllCommuteForm, event);
    updateAllTrainerButton.onclick = updateAll.bind(this, updateAllTrainerForm, event);
    updateDescriptionButton.onclick = updateAll.bind(this, updateAllDescriptionForm, event);
    updateAllNameButton.onclick = updateAll.bind(this, updateAllNameForm, event);
    updateAllTypeButton.onclick = updateAll.bind(this, updateAllTypeForm, event);
    updateAllGearButton.onclick = updateAll.bind(this, updateAllGearForm, event);

}