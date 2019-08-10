import activities from '../activities';
import statistics from '../statistics';
import disconnect from '../disconnect';

export default function(stravaToolkit) {

    stravaToolkit.view.routes = {};

    function route(path, page) {
        return stravaToolkit.view.routes[path] = page;
    };

    route('/', function() { activities(stravaToolkit) });
    route('/activities', function() { activities(stravaToolkit) });
    route('/statistics', function() { statistics(stravaToolkit) });
    route('/disconnect', function() { disconnect() });

}