import hoursMinutesSeconds from '../../../utils/hours-minutes-seconds';
import unitConversion from '../../../utils/unit-conversion';

export default function(stravaToolkit, renderLocation, stat) {

    function statType(data) {
        switch(stat.field) {
            case 'moving_time':
                return hoursMinutesSeconds(data);        
            
            case 'distance':
                return unitConversion(stravaToolkit, data, 2, true);
        }
    }

    const statContainer = `
        <div class="stats__stat">
            ${stat.data.map(function(dataPoint) {
                return `
                    <p>${statType(dataPoint)}</p>
                `
            }).join('')}
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', statContainer);

}