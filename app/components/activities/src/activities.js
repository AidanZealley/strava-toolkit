import slides from '../../slides';
import getActivitiesData from './get-activities-data';
import activitySelection from './activity-selection/activity-selection';

export default async function(stravaToolkit, rootElement) {

    const getAllActivitiesButton = rootElement.querySelector('[data-role="submit-button"]');
    const multipleActivitiesContent = rootElement.querySelector('[data-role="activities-content"]');

    async function startSlides() {
        await getActivitiesData(stravaToolkit, rootElement, 40, 20)
        .then(function() {
            slides(multipleActivitiesContent, {total: 3});

            const slidesContainer = multipleActivitiesContent.querySelector('[data-role="slides-container"]');
            const slide1 = slidesContainer.querySelector('[data-slide="0"]');

            slide1.insertAdjacentHTML('beforeend', activitySelection(stravaToolkit, rootElement, slide1));
        });
    }

    if (stravaToolkit.view.activitiesData) {
        startSlides();
    }

    getAllActivitiesButton.onclick = startSlides;
    
}