import { facilities } from "./MiningFacilities"


const container = document.querySelector("#container")

const render = async () => {


    const composedHTML =`
        
    <article class="facilities>
        <section class="facilities__options">
        ${facilities()}
        </section></article>
    `

    container.innerHTML = composedHTML
}

render()