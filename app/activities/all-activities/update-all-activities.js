import updateActivity from "../update-activity";
import updateActivityData from "../update-activity-data";
import updateProgressBar from "../../ui/update-progress-bar";

export default function(rootElement, form) {

    const updateButton = form.querySelector('[data-role="submit-button"]');
    const progressBar = form.querySelector('[data-role="progress-bar"]');
    const progressIndicator = progressBar.querySelector('[data-role="progress-indicator"]');

    const requestBody = updateActivity(form);

    const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

    async function asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    }

    async function start() {
        await asyncForEach(rootElement.view.activitiesData, async (activity, index) => {
            await waitFor(20);
            // await updateActivityData(rootElement, requestBody, activity.id)

            updateProgressBar(progressBar, index + 1, rootElement.view.activitiesData.length, false);
        });

        updateProgressBar(progressBar, progressIndicator, 100, true);
        updateButton.removeAttribute('disabled')
        return true;
    }

    updateButton.setAttribute('disabled', '');
    progressBar.removeAttribute('hidden');

    start();

}