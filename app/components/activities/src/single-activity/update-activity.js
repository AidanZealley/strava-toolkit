export default function(form) {

    const commute = form.querySelector('[name="commute"]');
    const trainer = form.querySelector('[name="trainer"]');
    const description = form.querySelector('[name="description"]');
    const name = form.querySelector('[name="name"]');
    const type = form.querySelector('[name="type"]');
    const gear = form.querySelector('[name="gear_id"]');

    let requestBody = {};

    if (commute) {
        if (commute.checked) {
            requestBody.commute = 'true';
        } else {
            requestBody.commute = 'false';
        }
    }

    if (trainer) {
        if (trainer.checked) {
            requestBody.trainer = true;
        } else {
            requestBody.trainer = false;
        }
    }

    if (description) {
        requestBody.description = description.value;
    }

    if (name) {
        if (name.value) {
            requestBody.name = name.value
        } else {
            return false;
        }
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

    return requestBody;

}