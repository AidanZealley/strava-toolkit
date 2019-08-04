import connectAccount from "./auth/connect-account";
import allActivities from "./activities/all-activities/all-activities";

let rootElement = document.querySelector('[data-role="strava-toolkit"]');

rootElement.view = {};

async function start() {
    await connectAccount(rootElement);

    if (rootElement.view.isConnected) {
        allActivities(rootElement);
    }
}

start();