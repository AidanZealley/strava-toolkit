import routes from '../config/routes';

export default function(stravaToolkit) {

    routes(stravaToolkit);

    let currentRoute = '';

    function createParamsObject(urlParams) {
        let params = {};

        if (urlParams.length) {
            const rawParams = urlParams.split('&');
        
            rawParams.forEach(function(rawParam) {
                params[rawParam.slice(0, rawParam.indexOf('='))] = rawParam.slice(rawParam.indexOf('=') + 1, rawParam.length);
            });
        }

        return params;
    }

    function resolveRoute(route) {
        try {
            currentRoute = route
            return stravaToolkit.view.routes['/'+route];
        } catch (error) {
            throw new Error("The route is not defined");
        }
    };

    function router() {
        let url = window.location.hash.slice(1);
        let trimmedUrl = url;
        let urlParams = [];

        if (url.indexOf('?') != -1) {
            trimmedUrl = url.slice(0, url.indexOf('?'));
            urlParams = url.slice(url.indexOf('?') + 1, url.length)    
        }

        const routeResolved = resolveRoute(trimmedUrl);
        routeResolved(createParamsObject(urlParams));
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