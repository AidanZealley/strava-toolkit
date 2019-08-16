export default function() {

    return `
        <div class="activities__update-forms" data-role="update-activities">
            <h3 class="heading heading--light heading--m">How would you like to update your activities?</h3>

            <form class="form" data-role="update-all-commute-form">
                <div class="form__block">
                    <label class="form__label">Commute</label>
                    <input type="checkbox" name="commute">
                </div>
                <div class="form__block">
                    <button class="button" data-role="submit-button">Update Commute</button>
                </div>


                <div class="progress-bar" data-role="progress-bar" hidden><div class="progress-bar__indicator" data-role="progress-bar-indicator"></div></div>
            </form>
            <form class="form" data-role="update-all-trainer-form">
                <div class="form__block">
                    <label class="form__label">Trainer</label>
                    <input type="checkbox" name="trainer">
                </div>
                <div class="form__block">
                    <button class="button" data-role="submit-button">Update Trainer</button>    
                </div>

                <div class="progress-bar" data-role="progress-bar" hidden><div class="progress-bar__indicator" data-role="progress-bar-indicator"></div></div>
            </form>
            <form class="form" data-role="update-all-description-form">
                <div class="form__block">
                    <label class="form__label"><span>Description</span></label>
                    <input class="form__input" type="text" name="description">
                </div>
                <div class="form__block">
                    <button class="button" data-role="submit-button">Update Description</button>
                </div>

                <div class="progress-bar" data-role="progress-bar" hidden><div class="progress-bar__indicator" data-role="progress-bar-indicator"></div></div>
            </form>
            <form class="form" data-role="update-all-name-form">
                <div class="form__block">
                    <label class="form__label"><span>Name</span></label>
                    <input class="form__input" type="text" name="name">
                </div>
                <div class="form__block">
                    <button class="button" data-role="submit-button">Update Name</button>
                </div>

                <div class="progress-bar" data-role="progress-bar" hidden><div class="progress-bar__indicator" data-role="progress-bar-indicator"></div></div>
            </form>
            <form class="form" data-role="update-all-type-form">
                <div class="form__block">
                    <label class="form__label">Type</label>
                    <select name="type">
                        <option value="Ride">Ride</option>
                        <option value="Run">Run</option>
                        <option value="">-----</option>
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
                <div class="form__block">
                    <button class="button" data-role="submit-button">Update Type</button>
                </div>

                <div class="progress-bar" data-role="progress-bar" hidden><div class="progress-bar__indicator" data-role="progress-bar-indicator"></div></div>
            </form>
            <form class="form" data-role="update-all-gear-form">
                <div class="form__block">
                    <label class="form__label">Gear</label>
                    <select name="gear_id" data-role="gear-field">

                    </select>
                </div>
                <div class="form__block">
                    <button class="button" data-role="submit-button">Update Gear</button>
                </div>

                <div class="progress-bar" data-role="progress-bar" hidden><div class="progress-bar__indicator" data-role="progress-bar-indicator"></div></div>
            </form>
        </div>
    `

}