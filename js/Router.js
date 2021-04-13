import gamePage from "./GamePage.js";
import landingPage from "./LandingPage.js"
import losePage from "./LosePage.js";
import winPage from "./WinPage.js"

class Router {
    constructor(pageList) {
        this.prevPage = null
        this.pageList = pageList
    }
    goTo(page) {
        if (this.prevPage) {
            this.prevPage.hide()
        }
        this.pageList[page].setRouter(this)
        this.pageList[page].show()
        this.prevPage = this.pageList[page]
    }
}

let pageList = {
    'landing': landingPage,
    'win': winPage,
    'lose': losePage,
    'game': gamePage,
}

let router = new Router(pageList)

export default router