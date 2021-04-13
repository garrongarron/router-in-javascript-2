import AbstractPage from './AbstractPage.js';

class LosePage extends AbstractPage{
    constructor(){
        super()
    } 
    init(){
        this.container =  document.createElement('div')
        let message = document.createElement('div')
        message.innerText = "You Lose!"

        let btn = document.createElement('button')
        btn.innerText = "Start again"
        btn.addEventListener('click', ()=>{
            this.router.goTo('landing')
        })
        this.container.appendChild(message)
        this.container.appendChild(btn)
    }
}

let losePage = new LosePage()

export default losePage