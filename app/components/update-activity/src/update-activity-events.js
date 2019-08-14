import preparePostObject from './prepare-post-object';
import updateActivityData from './update-activity-data';

export default function(stravaToolkit, rootElement) {

    const updateActivityButton = rootElement.querySelector('[data-role="submit-button"]');
    const activityId = rootElement.querySelector('[name="id"]');

    async function updateActivity() {
        if (activityId.value) {
            const requestBody = preparePostObject(rootElement);

            if (requestBody) {
                await updateActivityData(stravaToolkit, requestBody, activityId.value)
                .then(function(data) {
                    console.log(data)
                })
                .catch(function(err) {
                    console.log(err)
                });
            }
        }
    }

    updateActivityButton.onclick = function(e) {
        e.preventDefault();

        updateActivity();
    }

}