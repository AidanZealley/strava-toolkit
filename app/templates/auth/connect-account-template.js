export default function() {

    return `
        <div class="strava-toolkit__tool" data-role="connect-account">
            <h2>Connect Account</h2>

            <form class="strava-toolkit__form" data-role="connect-account-form">
                <div>
                    <label>Client ID</label>
                    <input type="text" name="client_id" placeholder="Client ID">
                </div>
                <div>
                    <label>Client Secret</label>
                    <input type="password" name="client_secret" placeholder="Client Secret">
                </div>
                <button data-role="submit-button">Connect</button>
            </form>
        </div>
    `

}