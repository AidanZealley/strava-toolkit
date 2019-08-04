export default function() {

    return `
        <div class="strava-toolkit__tool">
            <h2>Update Single Activity</h2>

            <form class="strava-toolkit__form" data-role="get-activity-form">
                <h3>Get Activity</h3>

                <div>
                    <label>Activity ID</label>
                    <input type="text" name="id" placeholder="Activity ID">        
                </div>
                <button data-role="submit-button">Get Activity</button>
            </form>

            <form class="strava-toolkit__form" data-role="update-activity-form" hidden>
                <h3>Update Activity</h3>

                <div>
                    <label>Commute</label>
                    <input type="checkbox" name="commute">
                </div>
                <div>
                    <label>Trainer</label>
                    <input type="checkbox" name="trainer">       
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Activity description">        
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Activity name">        
                </div>
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
                    </select>
                </div>
                <div data-role="activity-gear-input" hidden>
                    <label>Gear</label>
                    <select name="gear_id">

                    </select>
                </div>
                <button data-role="submit-button">Update Activity</button>
            </form>
        </div>
    `;

}