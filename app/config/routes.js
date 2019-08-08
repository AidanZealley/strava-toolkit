import updateMultipleActivities from '../update-multiple-activities';
import statistics from '../statistics';
import disconnect from '../disconnect';

export default function(stravaToolkit) {

    stravaToolkit.view.routes = {};

    function route(path, page) {
        return stravaToolkit.view.routes[path] = page;
    };

    route('/', function() { updateMultipleActivities(stravaToolkit) });
    route('/update-multiple-activities', function() { updateMultipleActivities(stravaToolkit) });
    route('/statistics', function() { statistics(stravaToolkit) });
    route('/disconnect', function() { disconnect() });

}