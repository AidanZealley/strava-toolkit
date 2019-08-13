export default async function(stravaToolkit) {

    const dashboardContent = stravaToolkit.querySelector('[data-role="dashboard-content"]');

    dashboardContent.innerHTML = '<p>Statistics</p> <p>Fastest commutes</p> <p>Bar chart of weekly activity counts/distance over time</p> <p></p> <p></p> <p></p>'

}