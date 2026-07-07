export default class NewsView{
    constructor() {
        this.title = "News"
    }

    async render(){
        return `
        <h1>${this.title}</h1>
        <p style="font-style: italic;">"try to find Tux"</p>
        <div class="search-box">
            <input type="text" id="news-search" placeholder="Search news...">
        </div>
        <div id="nasa-data-container">
            <p>loading telemetry data...</p>
        </div>
        `;
    }

    async afterRender() {
        const searchInput = document.getElementById("news-search")

        if(searchInput){
            searchInput.addEventListener("input", (e) => {
                console.log(`User is searching for:${e.target.value}`)
            })
        }
    }
}

