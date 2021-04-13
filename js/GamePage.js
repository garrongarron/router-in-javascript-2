import AbstractPage from './AbstractPage.js';

class GamePage extends AbstractPage {
    constructor() {
        super()
    }
    init() {
        this.container = document.createElement('div')
        let title = document.createElement('h1')
        title.innerText = "Choose"

        let winBtn = document.createElement('button')
        winBtn.innerText = "win"
        winBtn.addEventListener('click', () => {
            this.router.goTo('win')
        })
        let loseBtn = document.createElement('button')
        loseBtn.innerText = "Lose"
        loseBtn.addEventListener('click', () => {
            this.router.goTo('lose')
        })
        this.container.appendChild(title)
        this.container.appendChild(loseBtn)
        this.container.appendChild(winBtn)
    }
}

let gamePage = new GamePage()

export default gamePage