import hoursMinutesSeconds from '../../../utils/hours-minutes-seconds';
import distanceConversion from '../../../utils/distance-conversion';
import speedConversion from '../../../utils/speed-conversion';
import statForm from './stat-form';
import saveStat from './save-stat';

export default function(stravaToolkit, renderLocation, statObject) {

    function deleteStat() {
        saveStat(statObject, true);

        const statToRemove = renderLocation.querySelector('[data-id="' + statObject.id + '"]');

        renderLocation.removeChild(statToRemove);
    }

    const stat = renderLocation.querySelector('[data-id="' + statObject.id + '"]');

    if (!stat) {
        const statWrapper = `
            <div class="stats__stat" data-id="${statObject.id}">
            </div>
        `;

        renderLocation.insertAdjacentHTML('beforeend', statWrapper);
    } else {
        stat.innerHTML = '';
    }

    function statType(data) {
        switch(statObject.field) {
            case 'calories':
                return `${data[statObject.field]}<span class="stats__unit">cal</span>`;   

            case 'average_watts':
                return `${data[statObject.field]}<span class="stats__unit">W</span>`;

            case 'moving_time':
                return `${hoursMinutesSeconds(data[statObject.field])}`;        

            case 'max_speed':
            case 'average_speed':
                return `${speedConversion(stravaToolkit, data[statObject.field], 1)}<span class="measurement-unit">${stravaToolkit.view.userData.measurement_preference == 'feet' ? `mph` : `kph`}</span>`;
            
            case 'distance':
                return `${distanceConversion(stravaToolkit, data[statObject.field], 2, true)}<span class="measurement-unit">${stravaToolkit.view.userData.measurement_preference == 'feet' ? `mi` : `km`}</span>`;

            case 'total_elevation_gain':
                return `${distanceConversion(stravaToolkit, data[statObject.field], 0, false)}<span class="measurement-unit">${stravaToolkit.view.userData.measurement_preference == 'feet' ? `ft` : `m`}</span>`;

            case 'achievement_count':
                return data[statObject.field];
        
        }
    }

    const statWrapper = renderLocation.querySelector('[data-id="' + statObject.id + '"]');
    const statContent = `
        <h4 class="heading heading--xs">${statObject.name}</h4>
        <div class="stats__stat-items">
            ${statObject.data ? `
                ${statObject.data.map(function(dataPoint, index) {
                    return `
                        <div class="stats__stat-item">
                            <p>${statType(dataPoint)}</p>
                        </div>
                    `
                }).join('')}
            `: ''}
        </div>
        <button class="button button--small" data-role="edit"><span>Edit</span></button>
        <button class="button button--secondary button--small" data-role="delete"><span>Delete</span></button>
    `;

    statWrapper.insertAdjacentHTML('beforeend', statContent);

    const editStatButton = statWrapper.querySelector('[data-role="edit"]');
    const deleteStatButton = statWrapper.querySelector('[data-role="delete"]');

    editStatButton.onclick = statForm.bind(this, stravaToolkit, renderLocation, statObject);
    deleteStatButton.onclick = deleteStat.bind(this);
    
}