export default function(stravaToolkit) {

    return `
        <div class="activities__activity-selection" data-role="activity-selection">
            <h3 class="heading heading--light heading--m">Select activity type</h3>

            <form class="form" data-role="activity-selection">
                <div class="form__block">
                    <div class="form__selection-grid">
                        ${stravaToolkit.view.sortedActivitiesData.map(function (activityType) {
                            return `
                                <div class="form__selection-grid-item" data-type="${activityType.name}">
                                    <input id="${activityType.name}" class="form__input form__input--radio" data-role="activity-option" type="radio" name="Activity Type" value="${activityType.name}">
                                    <div class="form__visual-toggle">
                                        <label class="form__label" for="${activityType.name}">
                                            <span>${activityType.name}</span>
                                            <span class="form__label-secondary">${activityType.activities.length}</span>
                                        </label>
                                    </div>
                                </div>
                            `
                        }).join('')}
                    </div>
                </div>
            </form>
        </div>
    `;

}