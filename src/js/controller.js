import pickedView from "./views/pickedView.js";

const controlPick = function(picked) {
    const userChoice = document.querySelector('.user__choice');
    console.log(userChoice);
    console.log(picked.src);
    userChoice.insertAdjacentHTML('afterbegin', `<img class="scissors__picked" src="${picked.src}" alt="scissors image" id="scissors">`);
}

const init = function() {
    pickedView.pick(controlPick);
}
init();