class rulesView {
    _rulesParentEl = document.querySelector('.modal');

    renderRules() {

    }

    _generateRulesMarkup() {
        return `
        <img class="close__btn" src="./src/images/icon-close.svg" alt="close button">
        <img class="rules__image" src="./src/images/image-rules.svg" alt="rules image">
        `
    }
}

export default new rulesView();