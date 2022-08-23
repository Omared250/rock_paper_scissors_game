import decisionView from "./views/decisionView.js";
import pickedView from "./views/pickedView.js";

const controlPick = function() {
    const userChoice = document.querySelector('.user__choice').querySelector('img');
    const pcChoice = document.querySelector('.pc__choice').querySelector('img');

    if (userChoice.id === pcChoice.id) {
        decisionView.renderDecision('DRAW')
    } else if (userChoice.id === 'paper' & pcChoice.id === 'rock') {
        decisionView.renderDecision('WIN')
    } else if (userChoice.id === 'paper' & pcChoice.id === 'scissors') {
        decisionView.renderDecision('LOSE')
    } else if (userChoice.id === 'scissors' & pcChoice.id === 'paper') {
        decisionView.renderDecision('WIN')
    } else if (userChoice.id === 'scissors' & pcChoice.id === 'rock') {
        decisionView.renderDecision('LOSE')
    } else if (userChoice.id === 'rock' & pcChoice.id === 'scissors') {
        decisionView.renderDecision('WIN')
    } else if (userChoice.id === 'rock' & pcChoice.id === 'paper') {
        decisionView.renderDecision('LOSE')
    }
}

const init = function() {
    pickedView.pick(controlPick);
}
init();