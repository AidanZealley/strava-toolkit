import updateActivity from './src/update-activity';

export default function(stravaToolkit, renderLocation, config) {

    renderLocation.innerHTML = '';

    const component = `
        <div class="update-activity" data-component-name="update-activity">

            <form class="form form--light">
                <div class="form__block">
                    <label class="form__label">Title</label>

                    <input class="form__input" type="text" name="name" value="">
                    <input type="hidden" name="id" value="${config.activityId}">
                </div>

                <div class="form__block">
                    <label class="form__label">Description</label>

                    <textarea class="form__input" name="description"></textarea>
                </div>

                <div class="form__block">
                    <label class="form__label">Sport</label>

                    <select name="type">
                        <optgroup label="Common">
                            <option value="Ride">Ride</option>
                            <option value="Run">Run</option>
                        </optgroup>
                        <optgroup>
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
                        </optgroup>
                    </select>
                </div>

                <div class="form__block" data-role="gear" hidden>
                    <label class="form__label">Gear</label>

                    <select name="gear_id">
                    </select>
                </div>

                <div class="form__block">
                    <label class="form__label">Commute</label>
                    <input type="checkbox" name="commute">
                </div>

                <div class="form__block">
                    <button class="button button--secondary" data-role="modal-close"><span>Cancel</span></button>
                    <button class="button button--right" data-role="submit-button"><span>Update</span></button>
                </div>
            </div>
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', component);

    const rootElement = renderLocation.querySelector('[data-component-name="update-activity"]');

    rootElement.config = config;

    updateActivity(stravaToolkit, rootElement);

}