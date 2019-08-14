export default function(rootElement) {

    const name = rootElement.querySelector('[name="name"]');
    const description = rootElement.querySelector('[name="description"]');
    const type = rootElement.querySelector('[name="type"]');
    const gear = rootElement.querySelector('[name="gear_id"]');
    const commute = rootElement.querySelector('[name="commute"]');

    let requestBody = {};

    if (name) {
        if (name.value) {
            requestBody.name = name.value
        } else {
            return false;
        }
    }

    if (description) {
        requestBody.description = description.textContent;
    }

    if (type) {
        if (type.value) {
            requestBody.type = type.value
        } else {
            return false;
        }
    }

    if (gear) {
        requestBody.gear_id = gear.value
    }

    if (commute) {
        if (commute.checked) {
            requestBody.commute = 'true';
        } else {
            requestBody.commute = 'false';
        }
    }

    return requestBody;

}