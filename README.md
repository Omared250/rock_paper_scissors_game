# rock_paper_scissors_game

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- See the rules of the game clicking on the button "RULES"
- Know if the user won, lost or drawed

### Screenshot

- Desktop Desing
 
![Home Design](https://github.com/Omared250/rock_paper_scissors_game/blob/main/src/design/original/desktop-step-1.jpg)

- Mobile Desing

![Home Design](https://github.com/Omared250/rock_paper_scissors_game/blob/main/src/design/original/mobile-step-1.jpg)

### Links

- Solution URL: [https://github.com/Omared250/rock_paper_scissors_game]
- Live Site URL: [https://omared250.github.io/rock_paper_scissors_game/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Grid Display
- Flex Display
- Responsive Design
- [Vanilla JS]
- [Architecture - MVC]
- Mobile-firts Desing

### What I learned

This project has taught me to work with mobile-first designs, which has allowed me to discover a better way to approach my design 
as well as the way I style my project, turning out to be more comfortable to work with and effective, it has also helped me a lot to 
reinforce my knowledge and treatment of DOM manipulation so I feel that every day and step by step I improve more.

```js proud-of-this:
    pick(handler) {
        this._Elements.forEach(img => {
            img.addEventListener('click', (e) => {
                this._gameParentEl.classList.add('hidden');
                this._pickedParentEl.innerHTML = '';
                this._pickedParentEl.classList.remove('hidden');

                if (e.target.id === 'rock') {
                    this._renderPicked();
                    this._renderUserChoice(e.target);
                    this._renderComputerChoice();

                } else if (e.target.id === 'scissors') {
                    this._renderPicked();
                    this._renderUserChoice(e.target);
                    this._renderComputerChoice();

                } else if (e.target.id === 'paper') {
                    this._renderPicked();
                    this._renderUserChoice(e.target);
                    this._renderComputerChoice();
                }

                handler();
            })
        })
    }
```

## Author

- Github - [Omar Ascanio](https://github.com/Omared250)
- Frontend Mentor - [@omared250](https://www.frontendmentor.io/profile/Omared250)
