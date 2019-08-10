export default function(stravaToolkit, gearType, gearField) {

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
        });
    }

    if (gearType) {
        createGearOptions(gearType);
    } else {
        createGearOptions('bikes');
        createGearOptions('shoes');
    }

}