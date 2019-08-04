import getActivityData from './get-activity-data';
import updateActivityData from '../update-activity-data';
import populateUpdateActivityForm from '../../ui/populate-update-activity-form';
import updateActivity from '../update-activity';

export default function(rootElement) {

    const getActivityForm = rootElement.querySelector('[data-role="get-activity-form"]');
    const getActivityButton = getActivityForm.querySelector('[data-role="submit-button"]');
    const updateActivityForm = rootElement.querySelector('[data-role="update-activity-form"]');
    const updateActivityButton = updateActivityForm.querySelector('[data-role="submit-button"]');
    const activityId = getActivityForm.querySelector('[name="id"]');

    getActivityButton.onclick = function(e) {
        e.preventDefault();

        if (activityId.value) {
            getActivityData(rootElement, activityId.value)
            .then(data => populateUpdateActivityForm(rootElement, data));
        } 
    }

    updateActivityButton.onclick = function(e) {
        e.preventDefault();

        if (activityId.value) {
            const requestBody = updateActivity(updateActivityForm);

            if (requestBody) {
                updateActivityData(rootElement, requestBody, rootElement.view.currentActivity.id)
                .then(console.log('Updated activity'))
                .catch(function(err) {
                    console.log(err)
                });
            }
        }
    }

}