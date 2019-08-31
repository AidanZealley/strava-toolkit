export default function(stravaToolkit, measurement, decimal, large) {

    let newMeasurement = 0;
    let measurementString = '';
    let sizeConversion = 1000;

    if (stravaToolkit.view.userData.measurement_preference == 'feet') {
        newMeasurement = measurement * 3.28084;
        sizeConversion = 5280;
    } else {
        newMeasurement = measurement;
    }

    if (large) {
        measurementString = (newMeasurement / sizeConversion).toFixed(decimal);
    } else {
        measurementString = (newMeasurement).toFixed(decimal);
    }

    return measurementString;

}