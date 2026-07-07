export default class AboutView{
    constructor() {
        this.title = "About Us"
    }

    async render(){
        return `
        <h1>${this.title}</h1>
        
        <div class="search-box">
            <input type="text" id="info-search" placeholder="Search information...">
        </div>
        <div id="nasa-data-container">
            <p>loading telemetry data...</p>
        </div>
        `;
    }

    async afterRender() {
        const searchInput = document.getElementById("info-search")

        if(searchInput){
            searchInput.addEventListener("input", (e) => {
                console.log(`User is searching for:${e.target.value}`)
            })
        }
    }
}

