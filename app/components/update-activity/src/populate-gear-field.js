export default function(stravaToolkit, gearType, gearField, gearBlock, activity) {

    gearField.innerHTML = '';

    const noGearOption = `
        <option value="none">None</option>
    `;

    gearField.insertAdjacentHTML('beforeend', noGearOption);

    function createGearOptions(gearType) {
        stravaToolkit.view.userData[gearType].forEach(function(gearItem) {
            const gearOption = `
                <option value="${gearItem.id}">${gearItem.name}</option>
            `;

            gearField.insertAdjacentHTML('beforeend', gearOption);

            if (gearItem.id == activity.gear_id) {
                gearField.value = gearItem.id;
            }
        });
    }

    if (gearType) {
        createGearOptions(gearType);
        gearBlock.removeAttribute('hidden');
    } else {
        gearField.value = 'none';
        gearBlock.setAttribute('hidden', '');
    }

}