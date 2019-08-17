import renderStat from './render-stat';

export default function(stravaToolkit, renderLocation) {

    let stravaToolkitStats = JSON.parse(localStorage.getItem('stravaToolkitStats'));

    if (stravaToolkitStats) {
        stravaToolkitStats.forEach(function(storedStat) {
            renderStat(stravaToolkit, renderLocation, storedStat)
        });
    }

}