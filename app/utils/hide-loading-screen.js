export default function(stravaToolkit) {

    const loadingScreen = stravaToolkit.querySelector('[data-component-name="loading-screen"]');

    loadingScreen.parentElement.removeChild(loadingScreen);

}