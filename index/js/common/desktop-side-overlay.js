var sideOverlayCloseButton = document.querySelector('.side-overlay__close-button');
var sideOverlay = document.querySelector('.side-overlay--desktop');
var sideOvelayActivator = document.querySelectorAll('.task__heading, .task__desc-block, task__members');
var mainColMainRow = document.querySelector(".main-col__main-row"); 



sideOverlayCloseButton.addEventListener('click', event => {
    sideOverlay.classList.remove('side-overlay--desktop--enabled');
    mainColMainRow.classList.remove('main-col__main-row--side-overlay-place');
});


sideOvelayActivator.forEach(actionSideOverlay => {

    actionSideOverlay.addEventListener('click', event => {
        sideOverlay.classList.add('side-overlay--desktop--enabled'); 
        mainColMainRow.classList.add('main-col__main-row--side-overlay-place');
   });

});