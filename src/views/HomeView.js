export default class HomeView{
    constructor() {
        this.title = "Home"
    }

    async render(){
        return `
        <h1>${this.title}</h1>
        <p>"Hello, World!"</p>
        <div class="search-box">
            <input type="text" id="page-search" placeholder="Search page...">
        </div>
        <div id="nasa-data-container">
            <p>loading telemetry data...</p>
        </div>
        `;
    }

    async afterRender() {
        const searchInput = document.getElementById("page-search")

        if(searchInput){
            searchInput.addEventListener("input", (e) => {
                console.log(`User is searching for:${e.target.value}`)
            })
        }
    }
}

