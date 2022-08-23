class decisionView {
    _parentEl = document.querySelector('.descision__container');

    renderDecision() {

    }

    _generateMarkupDecision() {
        return `
        <span class="decision">YOU WIN</span>
        <button class="play__again__btn">PLAY AGAIN</button>
        `
    }
}

export default new decisionView();