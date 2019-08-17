import uniqueId from '../../../utils/unique-id';
import statForm from './stat-form';

export default function(stravaToolkit, rootElement) {

    const statsGrid = rootElement.querySelector('[data-role="stats-grid"]');
    let statObject = {};

    statObject.id = uniqueId();
    statObject.limit = 3;
    
    statForm(stravaToolkit, statsGrid, statObject);
}