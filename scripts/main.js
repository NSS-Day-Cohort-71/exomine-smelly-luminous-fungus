
import { facilities } from "./MiningFacilities.js"
import { GovernorsList } from "./Governors.js";
import { Colonies } from "./Colonies.js";


const container = document.querySelector("#container")

const render = async () => {
const governorHTML = await GovernorsList();
const facilitiesHTML = await facilities()
const colonyHTML = await Colonies()
    const composedHTML =`
    ${governorHTML}
    <article class="facilities>
        <section class="facilities__options">
        ${facilitiesHTML}
        </section></article>
        <article class="colony">
        ${colonyHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

render()

