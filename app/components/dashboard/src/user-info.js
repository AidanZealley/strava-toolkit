export default function(stravaToolkit, rootElement) {

    const userInfo = rootElement.querySelector('[data-role="user-info"]');

    const userInfoContent = `
        <img src="${stravaToolkit.view.userData.profile}" alt="${stravaToolkit.view.userData.firstname} ${stravaToolkit.view.userData.firstname}" class="dashboard-profile-picture">
        <h2 class="dashboard-username">${stravaToolkit.view.userData.firstname} ${stravaToolkit.view.userData.lastname}</h2>
    `;

    userInfo.insertAdjacentHTML('beforeend', userInfoContent);

}