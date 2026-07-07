export default class HomeView{
    constructor() {
        this.title = "Astra Spectrum Analytics"
    }

    async render(){
        return `
        ${this.#renderHero()}
        ${this.#renderAchievements()}
        <div class="search-box">
            <input type="text" id="page-search" placeholder="Search page...">
        </div>
        <div id="nasa-data-container">
            <p>loading telemetry data...</p>
        </div>
        `;
    }

    #renderHero(){
        return `
        <section class="hero">
            <hgroup class="hero-headers">
                <h1>${this.title}</h1>
                <p>"Hello, World!"</p>
            </hgroup>
        </section>
        `;
    }
    #renderAchievements(){
        return `
        <section class="achievements">
            <div class="info-blocks-container">
                <div><span class="accent">20</span> years of scientific activity</div>
                <div class="special-info-card"><span class="accent">2500+</span> scientific studies in astrophysics</div>
                <div><span class="accent">500+</span> unmanned space flights</div>
            </div>
            <a href="/about" data-link>More About Us</a>
        </section>
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

