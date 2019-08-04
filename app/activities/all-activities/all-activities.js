import getAllActivitiesTemplate from '../../templates/activities/all-activities/get-all-activities-template';
import updateAllActivitiesFormTemplate from '../../templates/activities/all-activities/update-all-activities-form-template';
import getActivitiesData from './get-activities-data';
import populateGearField from './../populate-gear-field';
import setActivitiesEvents from './set-activities-events';

export default async function(rootElement) {

    rootElement.insertAdjacentHTML('afterbegin', getAllActivitiesTemplate());

    const getAllActivities = rootElement.querySelector('[data-role="get-all-activities"]');
    const getAllActivitiesButton = getAllActivities.querySelector('[data-role="submit-button"]');

    async function addUpdateAllActivitiesForm() {
        getAllActivities.insertAdjacentHTML('beforeend', updateAllActivitiesFormTemplate(rootElement));

        const gearField = getAllActivities.querySelector('[data-role="gear-field"]');

        populateGearField(rootElement, false, gearField);

        setActivitiesEvents(rootElement);
    }

    async function getDataAndShowForm() {
        await getActivitiesData(rootElement).then(function() {addUpdateAllActivitiesForm()})
    }

    getAllActivitiesButton.onclick = getDataAndShowForm;
    

}