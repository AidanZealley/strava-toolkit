import userInfo from './user-info';
import dashboardNav from './dashboard-nav';

export default function(stravaToolkit, rootElement) {

    userInfo(stravaToolkit, rootElement);
    dashboardNav(stravaToolkit, rootElement);
    
}