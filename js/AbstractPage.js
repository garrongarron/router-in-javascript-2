import cache from './Cache.js';

class AbstractPage{
    constructor(){
        this.container = null
        this.router
    }
    show(){
        if(!this.container) this.init()
        document.body.appendChild(this.container)
    }
    hide(){
        cache.appendChild(this.container)
    }
    setRouter(router){
        this.router = router
    }
}

export default AbstractPage