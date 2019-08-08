import routes from '../config/routes';

export default function(stravaToolkit) {

    routes(stravaToolkit);

    let currentRoute = '';

    function resolveRoute(route) {
        try {
            currentRoute = route
            return stravaToolkit.view.routes['/'+route];
        } catch (error) {
            throw new Error("The route is not defined");
        }
    };

    function router() {
        const url = window.location.hash.slice(1);
        const routeResolved = resolveRoute(url);
        routeResolved();
        setActiveStates();
    };

    function setActiveStates() {
        const links = stravaToolkit.getElementsByTagName('a');

        Array.from(links).forEach(function(link) {
            if (link.hash.substr(1) == currentRoute) {
                link.setAttribute('active', '');
            } else {
                link.removeAttribute('active');
            }
        });
    }

    router();

    window.addEventListener('hashchange', router);
    
}