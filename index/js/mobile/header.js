
var mainOverlay = document.querySelector('.header-main-overlay');
var leftOverlay = document.querySelector('.left-menu-overlay');
var rightOverlay = document.querySelector('.right-menu-overlay');
var overlayBackground = document.querySelector('.header-background-overlay');
var menuActiveItem = document.querySelector('.left-menu-overlay .menu__item--enabled');

function closeOverlay (overlay) {
    if (overlay == mainOverlay) {
        mainOverlay.classList.remove('header-main-overlay--enabled');
        overlayBackground.classList.remove('header-background-overlay--enabled');
        mainOverlay.classList.add('header-main-overlay--disabled');
        overlayBackground.classList.add('header-background-overlay--disabled');
    }
    if (overlay == leftOverlay) {
        leftOverlay.classList.remove('left-menu-overlay--enabled');
        overlayBackground.classList.remove('header-background-overlay--enabled');
        leftOverlay.classList.add('left-menu-overlay--disabled');
        overlayBackground.classList.add('header-background-overlay--disabled');
    }
    if (overlay == rightOverlay) {
        rightOverlay.classList.remove('right-menu-overlay--enabled');
        overlayBackground.classList.remove('header-background-overlay--enabled');
        rightOverlay.classList.add('right-menu-overlay--disabled');
        overlayBackground.classList.add('header-background-overlay--disabled');
    }
}


document.querySelector('.header__button--type--profile').addEventListener('click', function() {
    rightOverlay.classList.remove('right-menu-overlay--disabled');
    overlayBackground.classList.remove('header-background-overlay--disabled');
    rightOverlay.classList.add('right-menu-overlay--enabled');
    overlayBackground.classList.add('header-background-overlay--enabled');
});

document.querySelector('.header__button--type--project-select').addEventListener('click', function() {
    mainOverlay.classList.remove('header-main-overlay--disabled');
    overlayBackground.classList.remove('header-background-overlay--disabled');
    mainOverlay.classList.add('header-main-overlay--enabled');
    overlayBackground.classList.add('header-background-overlay--enabled');
});

document.querySelector('.header__button--type--menu').addEventListener('click', function() {
    leftOverlay.classList.remove('left-menu-overlay--disabled');
    overlayBackground.classList.remove('header-background-overlay--disabled');
    leftOverlay.classList.add('left-menu-overlay--enabled');
    overlayBackground.classList.add('header-background-overlay--enabled');
});

document.querySelector('.header-background-overlay').addEventListener('click', function() {
    closeOverlay(mainOverlay);
    closeOverlay(leftOverlay);
    closeOverlay(rightOverlay);
});

document.querySelector('.left-menu-overlay .menu__item--enabled').addEventListener('click', function() {
    closeOverlay(leftOverlay);
});

document.querySelector('.header-main-overlay .active-button').addEventListener('click', function() {
    closeOverlay(mainOverlay);
});



