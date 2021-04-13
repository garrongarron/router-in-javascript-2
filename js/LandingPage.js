import AbstractPage from './AbstractPage.js';


class LandingPage extends AbstractPage{
    constructor(){
        super()
    }
    init(){
        this.container = document.createElement('div')
        let title = document.createElement('h1')
        title.innerText = "Game in an hour"

        let btn = document.createElement('button')
        btn.innerText = "Play"
        btn.addEventListener('click', ()=>{
            // let page = Math.floor(Math.random()*2)//
            // this.router.goTo((page==1)?'win':'lose')
            this.router.goTo('game')
        })
        this.container.appendChild(title)
        this.container.appendChild(btn)
    }
}

let landingPage = new LandingPage()

export default landingPage