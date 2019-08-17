export default function(statObject) {

    return `
        <form class="form form--light" data-role="add-stat">
            <div class="form__block">
                <label class="form__label">Statistic name</label>
                <input class="form__input" type="text" name="name"${statObject.name ? ` value="${statObject.name}"` : ''}>
            </div>

            <div class="form__block">
                <label class="form__label">Choose field</label>
                <select name="field"${statObject.field ? ` value="${statObject.field}"` : ''}>
                    <option value="moving_time">Moving time</option>
                    <option value="distance">Distance</option>
                </select>
            </div>

            <div class="form__block">
                <button class="button button--right" data-role="next"><span>Next</span></button>
            </div>
        </form>
    `;

}