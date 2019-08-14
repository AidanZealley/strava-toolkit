import hoursMinutesSeconds from '../../../utils/hours-minutes-seconds';
import unitConversion from '../../../utils/unit-conversion';
import formatDate from '../../../utils/format-date';

export default function(stravaToolkit, headings, activities) {

    let tableData = {};
    
    tableData.tableHeadings = headings;
    tableData.tableRows = [];

    activities.forEach(function(activity) {
        let newActivity = {};
        
        newActivity.id = activity.id;
        newActivity.cells = [];

        newActivity.cells.push(activity.type);
        newActivity.cells.push(formatDate(activity.start_date_local));
        newActivity.cells.push(activity.name);
        newActivity.cells.push(hoursMinutesSeconds(activity.moving_time));
        newActivity.cells.push(unitConversion(stravaToolkit, activity.distance, 2, true));
        newActivity.cells.push(unitConversion(stravaToolkit, activity.total_elevation_gain, 0, false));

        tableData.tableRows.push(newActivity);
    });

    return tableData;

}