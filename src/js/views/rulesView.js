class rulesView {
    _rulesParentEl = document.querySelector('.modal');

    renderRules(handler) {
        const markup = this._generateRulesMarkup();
        this._rulesParentEl.insertAdjacentHTML('afterbegin', markup);
        handler();
    }

    _generateRulesMarkup() {
        return `
        <span class="rules__title">RULES</span>
        <img class="rules__image" src="./src/images/image-rules.svg" alt="rules image">
        <img class="close__btn" src="./src/images/icon-close.svg" alt="close button">
        `
    }
}

export default new rulesView();