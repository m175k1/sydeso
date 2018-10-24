// SIDE BAR
const openSideMenu = document.querySelector('.hamburger-icon');
const sideMenu = document.querySelector('.sidenav');
const closeSideMenu = document.querySelector('.sidenav-close');

openSideMenu.addEventListener('click', openMenu);
closeSideMenu.addEventListener('click', closeMenu);

function openMenu() {
    sideMenu.style.width = '100%';
}

function closeMenu() {
    sideMenu.style.width = "0";
}