export default function(stravaToolkit, measurement, decimal, large) {

    let newMeasurement = 0;
    let measurementString = '';
    let sizeConversion = 1000;
    let smallUnits = 'm'
    let largeUnits = 'km'

    if (stravaToolkit.view.userData.measurement_preference == 'feet') {
        newMeasurement = measurement * 3.28084;
        sizeConversion = 5280;
        smallUnits = 'ft'
        largeUnits = 'mi'
    }

    if (large) {
        measurementString = (newMeasurement / sizeConversion).toFixed(decimal) + largeUnits
    } else {
        measurementString = (newMeasurement).toFixed(decimal) + smallUnits
    }

    return measurementString;

}