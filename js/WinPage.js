import AbstractPage from './AbstractPage.js';

class WinPage extends AbstractPage{
    constructor(){
        super()
    } 
    init(){
        this.container =  document.createElement('div')
        let message = document.createElement('div')
        message.innerText = "You win!"

        let btn = document.createElement('button')
        btn.innerText = "Start again"
        btn.addEventListener('click', ()=>{
            this.router.goTo('landing')
        })
        this.container.appendChild(message)
        this.container.appendChild(btn)
    }
}

let winPage = new WinPage()

export default winPage