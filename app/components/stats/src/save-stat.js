export default function(statObject, remove) {

    let stravaToolkitStats = JSON.parse(localStorage.getItem('stravaToolkitStats'));

    if (!stravaToolkitStats) {
        stravaToolkitStats = [];
    }

    let foundMatchingStat = false;

    stravaToolkitStats.forEach(function(storedStat, index) {
        if (storedStat.id == statObject.id) {
            foundMatchingStat = true;

            if (remove) {
                stravaToolkitStats.splice(index, 1);
            } else {
                stravaToolkitStats[index] = statObject;
            }
        }
    });

    if (!foundMatchingStat) {
        stravaToolkitStats.push(statObject);
    }

    localStorage.setItem('stravaToolkitStats', JSON.stringify(stravaToolkitStats));

}