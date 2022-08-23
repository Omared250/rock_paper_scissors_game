import decisionView from "./views/decisionView.js";
import pickedView from "./views/pickedView.js";
import * as model from "./model.js"

const controlPick = function() {
    const userChoice = document.querySelector('.user__choice').querySelector('img');
    const pcChoice = document.querySelector('.pc__choice').querySelector('img');

    controlScore(model.score.currentScore);

    if (userChoice.id === pcChoice.id) {
        decisionView.renderDecision('DRAW');

    } else if (userChoice.id === 'paper' & pcChoice.id === 'rock') {
        decisionView.renderDecision('WIN');
        model.score.currentScore++;

    } else if (userChoice.id === 'paper' & pcChoice.id === 'scissors') {
        decisionView.renderDecision('LOSE');
        model.score.currentScore <= 0 ? model.score.currentScore : model.score.currentScore--; 

    } else if (userChoice.id === 'scissors' & pcChoice.id === 'paper') {
        decisionView.renderDecision('WIN');
        model.score.currentScore++;

    } else if (userChoice.id === 'scissors' & pcChoice.id === 'rock') {
        decisionView.renderDecision('LOSE');
        model.score.currentScore <= 0 ? model.score.currentScore : model.score.currentScore--; 

    } else if (userChoice.id === 'rock' & pcChoice.id === 'scissors') {
        decisionView.renderDecision('WIN');
        model.score.currentScore++;

    } else if (userChoice.id === 'rock' & pcChoice.id === 'paper') {
        decisionView.renderDecision('LOSE');
        model.score.currentScore <= 0 ? model.score.currentScore : model.score.currentScore--;
    }

    controlScore(model.score.currentScore);
}

const controlScore = function(scoreNumber) {
    const score = document.querySelector('.score__number');
    score.textContent = scoreNumber;
}

const init = function() {
    pickedView.pick(controlPick);
}
init();