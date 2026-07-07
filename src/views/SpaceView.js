export default class SpaceView{
    constructor() {
        this.title = "Space"
    }

    async render(){
        return `
        <h1>${this.title}</h1>
        <p style="font-style: italic;">"Everything is a file"</p>
        <div class="search-box">
            <input type="text" id="asteroid-search" placeholder="Search asteroids...">
        </div>
        <div id="nasa-data-container">
            <p>loading telemetry data...</p>
        </div>
        `;
    }

    async afterRender() {
        const searchInput = document.getElementById("asteroid-search")

        if(searchInput){
            searchInput.addEventListener("input", (e) => {
                console.log(`User is searching for:${e.target.value}`)
            })
        }
    }
}

