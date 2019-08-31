export default function(rootElement) {

    const keywords = rootElement.querySelector('[name="keywords"]');
    const useNames = rootElement.querySelector('[name="names"]');
    const useDescriptions = rootElement.querySelector('[name="descriptions"]');
    const type = rootElement.querySelector('[name="type"]');
    const number = rootElement.querySelector('[name="number"]');
    const commute = rootElement.querySelector('[name="commute"]');
    const privateActivities = rootElement.querySelector('[name="private"]');

    keywords.value = rootElement.config.filters.keywords;
    type.value = rootElement.config.filters.type;
    number.value = rootElement.config.filters.number;

    if (rootElement.config.filters.useNames) {
        useNames.checked = true;
    } else {
        useNames.checked = false;
    }

    if (rootElement.config.filters.useDescriptions) {
        useDescriptions.checked = true;
    } else {
        useDescriptions.checked = false;
    }

    if (rootElement.config.filters.commute) {
        commute.checked = true;
    } else {
        commute.checked = false;
    }

    if (rootElement.config.filters.privateActivities) {
        privateActivities.checked = true;
    } else {
        privateActivities.checked = false;
    }

}