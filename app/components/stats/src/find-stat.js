export default function(statId) {

    let stravaToolkitStats = JSON.parse(localStorage.getItem('stravaToolkitStats'));

    if (stravaToolkitStats) {
        stravaToolkitStats.forEach(function(storedStat) {
            if (storedStat.id == statId) {    
                return storedStat;
            }
        });
    }

}