import activitiesFilter from './src/activities-filter'
import populateFilters from './src/populate-filters'

export default function(renderLocation, config) {

    if (config.render) {
        const component = `
            <div class="activities-filter" data-component-name="activities-filter">
                <form class="form">
                    <div class="auto-grid">
                        <div class="auto-grid__item auto-grid__item--span-all">
                            <label class="form__label">Keywords</label>
                            <input class="form__input" name="keywords" type="text" placeholder="e.g. morning sunny">
                        </div>

                        <div class="auto-grid__item auto-grid__item--span-2-1">
                            <div class="cols">
                                <div class="cols__col cols__col--2">
                                    <label class="form__label">Search activity names</label>
                                    <input class="form__input" name="names" type="checkbox" checked>
                                </div>

                                <div class="cols__col cols__col--2">
                                    <label class="form__label">Search activity descriptions</label>
                                    <input class="form__input" name="descriptions" type="checkbox">
                                </div>
                            </div>
                        </div>

                        <div class="auto-grid__item auto-grid__item--span-50">
                            <label class="form__label">Sport Type</label>
                            <select name="type">
                                <option value="All">All</option>
                                <option value="Ride">Ride</option>
                                <option value="Run">Run</option>
                                <option value="AlpineSki">AlpineSki</option>
                                <option value="BackcountrySki">BackcountrySki</option>
                                <option value="Canoeing">Canoeing</option>
                                <option value="Crossfit">Crossfit</option>
                                <option value="EBikeRide">EBikeRide</option>
                                <option value="Elliptical">Elliptical</option>
                                <option value="Golf">Golf</option>
                                <option value="Handcycle">Handcycle</option>
                                <option value="Hike">Hike</option>
                                <option value="IceSkate">IceSkate</option>
                                <option value="InlineSkate">InlineSkate</option>
                                <option value="Kayaking">Kayaking</option>
                                <option value="Kitesurf">Kitesurf</option>
                                <option value="NordicSki">NordicSki</option>
                                <option value="RockClimbing">RockClimbing</option>
                                <option value="RollerSki">RollerSki</option>
                                <option value="Rowing">Rowing</option>
                                <option value="Sail">Sail</option>
                                <option value="Skateboard">Skateboard</option>
                                <option value="Snowboard">Snowboard</option>
                                <option value="Snowshoe">Snowshoe</option>
                                <option value="Soccer">Soccer</option>
                                <option value="StairStepper">StairStepper</option>
                                <option value="StandUpPaddling">StandUpPaddling</option>
                                <option value="Surfing">Surfing</option>
                                <option value="Swim">Swim</option>
                                <option value="Velomobile">Velomobile</option>
                                <option value="VirtualRide">VirtualRide</option>
                                <option value="VirtualRun">VirtualRun</option>
                                <option value="Walk">Walk</option>
                                <option value="WeightTraining">WeightTraining</option>
                                <option value="Wheelchair">Wheelchair</option>
                                <option value="Windsurf">Windsurf</option>
                                <option value="Workout">Workout</option>
                                <option value="Yoga">Yoga</option>
                            </select>
                        </div>

                        <div class="auto-grid__item auto-grid__item--span-50">
                            <label class="form__label">Activities from</label>
                            <select name="number">
                                <option value="100">100</option>
                                <option value="250">250</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                            </select>
                        </div>

                        <div class="auto-grid__item auto-grid__item--span-50">
                            <div class="cols">
                                <div class="cols__col cols__col--2">
                                    <label class="form__label">Commute</label>
                                    <input class="form__input" name="commute" type="checkbox">
                                </div>

                                <div class="cols__col cols__col--2">
                                    <label class="form__label">Private</label>
                                    <input class="form__input" name="private" type="checkbox">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        `;

        renderLocation.insertAdjacentHTML(config.render, component);
    }

    const rootElement = renderLocation.querySelector('[data-component-name="activities-filter"]');

    rootElement.config = config;

    if (rootElement.config.filters) {
        populateFilters(rootElement);
    }

    if (rootElement.config.activities) {
        return activitiesFilter(rootElement);
    }

}