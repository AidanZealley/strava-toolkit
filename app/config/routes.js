import activities from '../activities';
import statistics from '../statistics';
import disconnect from '../disconnect';

export default function(stravaToolkit) {

    stravaToolkit.view.routes = {};

    function route(path, page) {
        return stravaToolkit.view.routes[path] = page;
    };

    route('/', function(params) { activities(stravaToolkit, params) });
    route('/activities', function(params) { activities(stravaToolkit, params) });
    route('/statistics', function(params) { statistics(stravaToolkit, params) });
    route('/disconnect', function(params) { disconnect() });

}