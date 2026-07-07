import HomeView from "./views/HomeView.js"
import SpaceView from "./views/SpaceView.js"
import NewsView from "./views/NewsView.js"

const routes = {
    "/": HomeView,
    "/space": SpaceView,
    "/news": NewsView
};

export const initRouter = () => {
    const appContainer = document.getElementById("app")

    const router = async () => {
        const path = window.location.pathname

        const ViewClass = routes[path] || routes["/"] //looks for current class 

        const activeView = new ViewClass()

        appContainer.innerHTML = await activeView.render() //generates html-string 

        if(activeView.afterRender){
            await activeView.afterRender() //adds html-string into real html 
        }
    }
    document.body.addEventListener("click", e =>{
    if(e.target.matches("[data-link]")){
        e.preventDefault(); //so the page won't reload
        window.history.pushState(null, null, e.target.href); //changes URL of page 
        router(); //looks at new path and calls func router()
    }
    });

    window.addEventListener("popstate", router)

    document.addEventListener("DOMContentLoaded", router)
};


