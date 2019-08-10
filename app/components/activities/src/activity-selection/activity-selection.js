import activityTypes from './activity-types';
import activitySelectionForm from './activity-selection-form';
import activitySelectionEvents from './activity-selection-events';

export default function(stravaToolkit, rootElement, renderLocation) {

    renderLocation.innerHTML = '';

    activityTypes(stravaToolkit);

    renderLocation.insertAdjacentHTML('beforeend', activitySelectionForm(stravaToolkit));

    activitySelectionEvents(stravaToolkit, rootElement);

}