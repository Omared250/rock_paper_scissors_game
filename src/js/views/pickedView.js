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
                    this._renderPicked();
                    this._renderUserChoice(e.target);
                    this._renderComputerChoice();

                } else if (e.target.id === 'scissors') {
                    this._parentEl.innerHTML = '';
                    this._renderPicked();
                    this._renderUserChoice(e.target);
                    this._renderComputerChoice();

                } else if (e.target.id === 'paper') {
                    this._parentEl.innerHTML = '';
                    this._renderPicked();
                    this._renderUserChoice(e.target);
                    this._renderComputerChoice();
                }

                handler()
            })
        })
    }

    _renderPicked() {
        const markup = this._generateMarkupPicked();
        this._parentEl.insertAdjacentHTML('beforeend', markup);
    }

    _renderUserChoice(picked) {
        const userChoice = document.querySelector('.user__choice');
        userChoice.insertAdjacentHTML('afterbegin', `<img class="${picked.id}__picked" src="${picked.src}" alt="${picked.id} image" id="${picked.id}">`);
    }

    _renderComputerChoice() {
        const pcChoice = document.querySelector('.pc__choice');
        const figure = document.querySelector('.figure');
        const choice = Math.trunc(Math.random() * 3) + 1;

        let markup;
        
        if (choice === 1) {
            markup = `<img class="paper__picked animation" src="./src/images/icon-paper.svg" alt="paper image" id="paper">`
        } else if (choice === 2) {
            markup = `<img class="scissors__picked animation" src="./src/images/icon-scissors.svg" alt="scissors image" id="scissors">`
        } else if (choice === 3) {
            markup = `<img class="rock__picked animation" src="./src/images/icon-rock.svg" alt="rock image" id="rock">`
        }

        figure.style.display = 'none';
        pcChoice.insertAdjacentHTML('afterbegin', markup);
    }

    _generateMarkupPicked() {
        return `
        <div class="user__choice">
            <p>YOU PICKED</p>
        </div>
        <div class="pc__choice">
            <span class="figure"></span>
            <p>THE HOUSE PICKED</p>
        </div>
        `
    }
}

export default new pickedView();