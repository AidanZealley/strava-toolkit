import setTokenEvents from './set-token-events';
import setActivitiesEvents from './set-activities-events';
import setActivityEvents from './set-activity-events';
import setUiEvents from './ui/set-ui-events';

let rootElement = document.querySelector('[data-role="strava-toolkit"]');

rootElement.view = {};
    
setTokenEvents(rootElement);
setActivitiesEvents(rootElement);
setActivityEvents(rootElement);
setUiEvents(rootElement);