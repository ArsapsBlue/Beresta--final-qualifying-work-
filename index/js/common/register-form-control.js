var elementsStep1 = document.querySelectorAll(".enter-container__item--step1");
var elementsStep2 = document.querySelectorAll(".enter-container__item--step2");
var elementsStep3 = document.querySelectorAll(".enter-container__item--step3");

var leftButton = document.getElementById("leftButton");
var rightButton = document.getElementById("rightButton");
var stepCounter = 1;

//console.log(document.querySelectorAll(".enter-container__item--step1"));


function changeStep (action) {
    if (action == 1 && stepCounter != 3) {
        stepCounter++;
    }
    else if (action == 0) {

    }
    else if (action == -1 && stepCounter != 1) {
        stepCounter--;
    }

    if (stepCounter == 1) {
        for (let i = 0; i < elementsStep1.length; i++) {
            elementsStep1[i].classList.remove('enter-container__item--disabled')
        }
        for (let i = 0; i < elementsStep2.length; i++) {
            elementsStep2[i].classList.add('enter-container__item--disabled')
        }
        for (let i = 0; i < elementsStep3.length; i++) {
            elementsStep3[i].classList.add('enter-container__item--disabled')
        }
    }
    else if (stepCounter == 2) {
        for (let i = 0; i < elementsStep1.length; i++) {
            elementsStep1[i].classList.add('enter-container__item--disabled')
        }
        for (let i = 0; i < elementsStep2.length; i++) {
            elementsStep2[i].classList.remove('enter-container__item--disabled')
        }
        for (let i = 0; i < elementsStep3.length; i++) {
            elementsStep3[i].classList.add('enter-container__item--disabled')
        }
    }
    else if (stepCounter == 3) {
        for (let i = 0; i < elementsStep1.length; i++) {
            elementsStep1[i].classList.add('enter-container__item--disabled')
        }
        for (let i = 0; i < elementsStep2.length; i++) {
            elementsStep2[i].classList.add('enter-container__item--disabled')
        }
        for (let i = 0; i < elementsStep3.length; i++) {
            elementsStep3[i].classList.remove('enter-container__item--disabled')
        }
    }
}

changeStep (0);