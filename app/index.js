import connectAccount from "./components/connect-account";
import header from './components/header';
import dashboard from './components/dashboard';
import router from './utils/router';

import "./styles/strava-toolkit.scss";

let stravaToolkit = document.querySelector('[data-role="strava-toolkit"]');

stravaToolkit.view = {};

async function start() {
    await connectAccount(stravaToolkit);

    if (stravaToolkit.view.isConnected) {
        header(stravaToolkit, stravaToolkit);
        dashboard(stravaToolkit, stravaToolkit);
        router(stravaToolkit);
    }
}

start();