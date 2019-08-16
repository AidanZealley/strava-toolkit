export default function() {

    return `
        <form class="form form--light" data-role="add-filter">
            <h4 class="heading heading--xs">Filter Activities</h4>
            <p>Choose which activities to include in the data.</p>

            <div class="form__block">
                <label class="form__label">Choose filters</label>
                <select name="filter">
                    <option value="name">Activity name</option>
                    <option value="commute">Commute</option>
                </select>
                <button class="button button--small button--right" data-role="submit"><span>Add Filter</span></button>
            </div>

            <div class="form__block stats__filters" data-role="filters">
                <div class="stats__filter" data-role="filter" data-filter="name" data-filter-value="Morning Ride">

                </div>
            </div>

            <div class="form__block">
                <button class="button button--secondary" data-role="prev"><span>Prev</span></button>
                <button class="button button--right" data-role="save"><span>Save</span></button>
            </div>
        </form>
    `;

}