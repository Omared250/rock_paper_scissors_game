import pickedView from "./views/pickedView.js";

const controlPick = function() {
    const userChoice = document.querySelector('.user__choice').querySelector('img');
    const pcChoice = document.querySelector('.pc__choice').querySelector('img');

    
}

const init = function() {
    pickedView.pick(controlPick);
}
init();