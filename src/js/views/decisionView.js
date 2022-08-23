class decisionView {
    _parentEl = document.querySelector('.decision__container');

    renderDecision(decision) {
        const markup = this._generateMarkupDecision(decision);
        this._parentEl.classList.remove('hidden');
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    _generateMarkupDecision(decision) {
        return `
        <span class="decision">${decision === 'DRAW' ? 'DRAW' : 'YOU' + ' ' + decision}</span>
        <button class="play__again__btn">PLAY AGAIN</button>
        `
    }
}

export default new decisionView();