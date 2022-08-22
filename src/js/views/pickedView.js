class pickedView {
    _parentEl = document.querySelector('#game__container');
    _Elements = this._parentEl.querySelectorAll('img');

    pick(handler) {
        this._Elements.forEach(img => {
            img.addEventListener('click', (e) => {
                this._parentEl.classList.remove('game__container');
                this._parentEl.classList.add('picked__container');

                if (e.target.id === 'rock') {
                    this._parentEl.innerHTML = '';
                    this.renderPicked();
                    handler(e.target)

                } else if (e.target.id === 'scissors') {
                    this._parentEl.innerHTML = '';
                    this.renderPicked();
                    handler(e.target)

                } else if (e.target.id === 'paper') {
                    this._parentEl.innerHTML = '';
                    this.renderPicked();
                    handler(e.target)
                }
            })
        })
    }

    renderPicked() {
        const markup = this._generateMarkupPicked();
        this._parentEl.insertAdjacentHTML('beforeend', markup);
    }

    _generateMarkupPicked() {
        return `
        <div class="user__choice">
            <p>YOU PICKED</p>
        </div>
        <div class="pc__choice">
            <p>THE HOUSE PICKED</p>
        </div>
        `
    }
}

export default new pickedView();