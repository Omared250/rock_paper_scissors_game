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
    controlOptions();
}

const controlScore = function(scoreNumber) {
    const score = document.querySelector('.score__number');
    score.textContent = scoreNumber;
}

const controlOptions = function() {
    const gameContain = document.querySelector('#game__container');
    const pickedContain = document.querySelector('#picked__container');
    const decisionContain = document.querySelector('.decision__container');
    const playAgainBtn = document.querySelector('.play__again__btn');

    playAgainBtn.addEventListener('click', (e) => {
        e.preventDefault();

        pickedContain.innerHTML = '';
        pickedContain.classList.add('hidden');

        decisionContain.innerHTML = '';
        decisionContain.classList.add('hidden');

        gameContain.classList.remove('hidden');
    })
}

const controlRules = function() {
    
}


const init = function() {
    pickedView.pick(controlPick);
}
init();