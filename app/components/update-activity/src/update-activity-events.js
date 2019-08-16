import preparePostObject from './prepare-post-object';
import updateActivityData from './update-activity-data';
import loadingScreen from '../../loading-screen';
import hideLoadingScreen from '../../../utils/hide-loading-screen';

export default function(stravaToolkit, rootElement) {

    const updateActivityButton = rootElement.querySelector('[data-role="submit-button"]');
    const activityId = rootElement.querySelector('[name="id"]');

    async function updateActivity() {
        if (activityId.value) {
            const requestBody = preparePostObject(rootElement);

            if (requestBody) {
                const loadingScreenConfig = {
                    message: 'Updating activity...'
                }
            
                loadingScreen(rootElement, loadingScreenConfig);
            
                await updateActivityData(stravaToolkit, requestBody, activityId.value)
                .then(function(data) {
                    hideLoadingScreen(stravaToolkit);
                })
                .then(function() {
                    rootElement.config.updatingFor.setAttribute('updated', '');
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