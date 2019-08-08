export default function(activityTypes) {

    return `
        <div class="multiple-activities__activity-selection" data-role="activity-selection">
            <h3 class="heading heading--light heading--m">Which activities would you like to update?</h3>

            <form class="form" data-role="activity-selection">
                <div class="form__block">
                    <div class="form__selection-grid">
                        ${activityTypes.map(function (activityType) {
                            return `
                                <div class="form__selection-grid-item" data-role="activity-option">
                                    <input id="${activityType.name}" class="form__input form__input--radio" type="radio" name="subscription_package" value="${activityType.name}">
                                    <div class="form__visual-toggle">
                                        <label class="form__label" for="${activityType.name}">
                                            <span>${activityType.name}</span>
                                            <span class="form__label-secondary">${activityType.count}</span>
                                        </label>
                                    </div>
                                </div>
                            `
                        }).join("")}
                    </div>
                </div>
            </form>
        </div>
    `;

}