import updateActivity from "../../../update-activity/src/prepare-post-object";
import updateActivity from "../../../update-activity/src/update-activity-data";
import updateProgressBar from "../../../../utils/update-progress-bar";

export default function(stravaToolkit, form) {

    const updateButton = form.querySelector('[data-role="submit-button"]');
    const progressBar = form.querySelector('[data-role="progress-bar"]');

    const requestBody = updateActivity(form);

    const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

    async function asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    }

    async function start() {
        await asyncForEach(stravaToolkit.view.activitiesData, async (activity, index) => {
            await waitFor(20);
            // await updateActivity(stravaToolkit, requestBody, activity.id)

            updateProgressBar(progressBar, index + 1, stravaToolkit.view.activitiesData.length, false);
        });

        updateProgressBar(progressBar, stravaToolkit.view.activitiesData.length, stravaToolkit.view.activitiesData.length, true);
        updateButton.removeAttribute('disabled')
        return true;
    }

    updateButton.setAttribute('disabled', '');
    progressBar.removeAttribute('hidden');

    start();

}