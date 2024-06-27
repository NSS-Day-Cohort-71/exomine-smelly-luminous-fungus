
import { facilities } from "./MiningFacilities"
import { GovernorsList } from "./Governors.js";


const container = document.querySelector("#container")
const governorHTML = await GovernorsList();
const render = async () => {


    const composedHTML =`
    ${governorHTML}
    <article class="facilities>
        <section class="facilities__options">
        ${facilities()}
        </section></article>
    `

    container.innerHTML = composedHTML
}

render()
