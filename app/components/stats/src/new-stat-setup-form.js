export default function(statObject) {

    return `
        <form class="form form--light" data-role="add-stat">
            <div class="form__block">
                <label class="form__label">Statistic name</label>
                <input class="form__input" type="text" name="name"${statObject.name ? ` value="${statObject.name}"` : ''}>
            </div>

            <div class="form__block">
                <label class="form__label">Choose field</label>
                <select name="field">
                    <option value="moving_time">Moving time</option>
                    <option value="total_elevation_gain">Elevation Gain</option>
                    <option value="distance">Distance</option>
                    <option value="average_speed">Average Speed</option>
                    <option value="average_watts">Average Watts</option>
                    <option value="max_speed">Max Speed</option>calories
                    <option value="achievement_count">Achievement Count</option>
                </select>
            </div>

            <div class="form__block">
                <button class="button button--right" data-role="next"><span>Next</span></button>
            </div>
        </form>
    `;

}