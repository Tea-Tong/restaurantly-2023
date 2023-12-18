// Default click on the top button
document.querySelector('.menu-btn').click();

function showMenu(menuId) {
    // Hide all menu content
    document.querySelectorAll('.spec-content').forEach(function (specContent) {
        specContent.style.opacity = 0;
        specContent.style.visibility = 'hidden';
    });

    // Show the selected menu content
    var selectedMenu = document.getElementById(menuId);
    selectedMenu.style.opacity = 1;
    selectedMenu.style.visibility = 'visible';

        // Change the button's background color
    // button.style.backgroundColor = '#CDA45E';
}

// function showMenu(menuId, button) {
//     // Hide all menu content
//     document.querySelectorAll('.menu-content').forEach(function (menuContent) {
//         menuContent.style.opacity = 0;
//         menuContent.style.visibility = 'hidden';
//     });

//     // Show the selected menu content
//     var selectedMenu = document.getElementById(menuId);
//     selectedMenu.style.opacity = 1;
//     selectedMenu.style.visibility = 'visible';

// }