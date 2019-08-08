import activityTypes from './activity-types';
import activitySelectionForm from './activity-selection-form';
import activitySelectionEvents from './activity-selection-events';

export default function(stravaToolkit, rootElement) {

    const multipleActivitiesContent = rootElement.querySelector('[data-role="multiple-activities-content"]');

    multipleActivitiesContent.innerHTML = '';

    multipleActivitiesContent.insertAdjacentHTML('beforeend', activitySelectionForm(activityTypes(stravaToolkit)));

    activitySelectionEvents(stravaToolkit, rootElement);

}