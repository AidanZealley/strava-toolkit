export default function(stravaToolkit, measurement, decimal) {

    let newMeasurement = measurement * 3.6;
    let measurementString = '';

    if (stravaToolkit.view.userData.measurement_preference == 'feet') {
        newMeasurement = newMeasurement * 0.621371;
    }

    measurementString = newMeasurement.toFixed(decimal);

    return measurementString;

}