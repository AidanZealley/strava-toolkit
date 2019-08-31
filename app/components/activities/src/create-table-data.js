import hoursMinutesSeconds from '../../../utils/hours-minutes-seconds';
import distanceConversion from '../../../utils/distance-conversion';
import formatDate from '../../../utils/format-date';
import polyline from '../../../utils/activity-polyline';

export default function(stravaToolkit, headings, activities) {

    let tableData = {};
    
    tableData.tableHeadings = headings;
    tableData.tableRows = [];

    activities.forEach(function(activity) {
        let newActivity = {};
        
        newActivity.id = activity.id;
        newActivity.cells = [];

        newActivity.cells.push(polyline(activity));
        newActivity.cells.push(activity.type);
        newActivity.cells.push(formatDate(activity.start_date_local));
        newActivity.cells.push(activity.name);
        newActivity.cells.push(hoursMinutesSeconds(activity.moving_time));
        newActivity.cells.push(`${distanceConversion(stravaToolkit, activity.distance, 2, true)}<span class="measurement-unit">${stravaToolkit.view.userData.measurement_preference == 'feet' ? `mi` : `km`}</span>`);
        newActivity.cells.push(`${distanceConversion(stravaToolkit, activity.total_elevation_gain, 0, false)}<span class="measurement-unit">${stravaToolkit.view.userData.measurement_preference == 'feet' ? `ft` : `m`}</span>`);

        tableData.tableRows.push(newActivity);
    });

    return tableData;

}