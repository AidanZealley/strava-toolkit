import activitySelection from "./activity-selection/activity-selection";

export default async function(stravaToolkit, rootElement) {

    let slides = [];

    slides.push(function() { activitySelection(stravaToolkit, rootElement) });
    slides.push(function() { fieldSelection(stravaToolkit, rootElement) });
    slides.push(function() { fieldUpdate(stravaToolkit, rootElement) });

}