export default function(rootElement) {

    return `
        <h2>Update ${rootElement.view.activitiesData.length} Activities</h2>

        <form class="strava-toolkit__form" data-role="update-all-commute-form">
            <div>
                <label>Commute</label>
                <input type="checkbox" name="commute"><br>
                <button data-role="submit-button">Update Commute</button>
            </div>

            <div class="strava-toolkit__progress-bar" data-role="progress-bar" hidden><div class="strava-toolkit__progress-indicator" data-role="progress-indicator"></div></div>
        </form>
        <form class="strava-toolkit__form" data-role="update-all-trainer-form">
            <div>
                <label>Trainer</label>
                <input type="checkbox" name="trainer"><br>
                <button data-role="submit-button">Update Trainer</button>    
            </div>

            <div class="strava-toolkit__progress-bar" data-role="progress-bar" hidden><div class="strava-toolkit__progress-indicator" data-role="progress-indicator"></div></div>
        </form>
        <form class="strava-toolkit__form" data-role="update-all-description-form">
            <div>
                <label>Description</label>
                <input type="text" name="description" placeholder="Activity description"><br> 
                <button data-role="submit-button">Update Description</button>    
            </div>

            <div class="strava-toolkit__progress-bar" data-role="progress-bar" hidden><div class="strava-toolkit__progress-indicator" data-role="progress-indicator"></div></div>
        </form>
        <form class="strava-toolkit__form" data-role="update-all-name-form">
            <div>
                <label>Name</label>
                <input type="text" name="name" placeholder="Activity name"><br>
                <button data-role="submit-button">Update Name</button>     
            </div>

            <div class="strava-toolkit__progress-bar" data-role="progress-bar" hidden><div class="strava-toolkit__progress-indicator" data-role="progress-indicator"></div></div>
        </form>
        <form class="strava-toolkit__form" data-role="update-all-type-form">
            <div>
                <label>Type</label>
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
                    <option value="Yog">Yog</option>
                </select><br>
                <button data-role="submit-button">Update Type</button>
            </div>

            <div class="strava-toolkit__progress-bar" data-role="progress-bar" hidden><div class="strava-toolkit__progress-indicator" data-role="progress-indicator"></div></div>
        </form>
        <form class="strava-toolkit__form" data-role="update-all-gear-form">
            <div>
                <label>Gear</label>
                <select name="gear_id" data-role="gear-field">

                </select><br>
                <button data-role="submit-button">Update Gear</button>
            </div>

            <div class="strava-toolkit__progress-bar" data-role="progress-bar" hidden><div class="strava-toolkit__progress-indicator" data-role="progress-indicator"></div></div>
        </form>
    `

}