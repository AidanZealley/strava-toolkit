import hoursMinutesSeconds from '../../../utils/hours-minutes-seconds';
import unitConversion from '../../../utils/unit-conversion';
import statForm from './stat-form';

export default function(stravaToolkit, renderLocation, statObject) {

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
            case 'moving_time':
                return hoursMinutesSeconds(data);        
            
            case 'distance':
                return unitConversion(stravaToolkit, data, 2, true);
        }
    }

    const statWrapper = renderLocation.querySelector('[data-id="' + statObject.id + '"]');
    const statContent = `
        <h4 class="heading heading--xs">${statObject.name}</h4>
            ${statObject.data ? `
                ${statObject.data.map(function(dataPoint) {
                    return `
                        <p>${statType(dataPoint)}</p>
                    `
                }).join('')}
            `: ''}
        <button class="button button--small" data-role="edit"><span>Edit</span></button>
        <button class="button button--secondary button--small" data-role="delete"><span>Delete</span></button>
    `;

    statWrapper.insertAdjacentHTML('beforeend', statContent);

    const editStatButton = statWrapper.querySelector('[data-role="edit"]');

    editStatButton.onclick = statForm.bind(this, stravaToolkit, renderLocation, statObject);
    
}