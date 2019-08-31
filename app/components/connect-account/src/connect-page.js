export default function() {

    return `
        <div class="connect-account" data-component-name="connect-page">
            <div class="connect-account-info">
                <div class="logo">
                    <svg class="logo-icon" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" height="120" width="120" xml:space="preserve" id="svg2" version="1.1"><metadata id="metadata8"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/></cc:Work></rdf:RDF></metadata><defs id="defs6"/><g transform="matrix(1.3333333,0,0,-1.3333333,0,120)" id="g10"><g transform="scale(0.1)" id="g12"><path id="path14" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" d="m 533.516,302.531 -52.848,103.84 H 403.457 L 533.891,150 662.988,406.371 h -77.347 l -52.125,-103.84"/><path id="path16" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" d="M 410.789,545.414 481.742,405.852 H 585.301 L 410.273,750 237.012,405.852 h 103.715 l 70.062,139.562"/></g></g></svg>
                    <h1 class="logo-text">strava<span>toolkit</span></h1>
                </div>

                <div class="connect-account-info-box">
                    <h2>Hi.</h2>
                    <p>To use Strava Toolkit you must first set up an application in your <a href="https://www.strava.com/settings/api">Strava account settings</a>.</p>
                    <p>The Client ID and Secret from your application are then used by Strava Toolkit to connect to your Strava account.</p>
                </div>
            </div>

            <div class="connect-account-login">
                <form class="form" data-role="connect-account-form">
                    <h2 class="connect-heading">Connect Account</h2>

                    <div class="form__block">
                        <input class="form__input form__input--placeholder" type="text" name="client_id" required>
                        <label class="form__label" data-text="Client ID"><span>Client ID</span></label>
                    </div>
                    <div class="form__block">
                        <input class="form__input form__input--placeholder" type="password" name="client_secret" required>
                        <label class="form__label" data-text="Client Secret"><span>Client Secret</span></label>
                    </div>
                    <div class="form__block">
                        <button class="button button--right" data-role="submit-button"><span>Connect Account</span></button>
                    </div>
                </form>
            </div>
        </div>
    `;

}