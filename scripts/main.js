
import { facilities } from "./MiningFacilities.js"
import { GovernorsList } from "./Governors.js";


const container = document.querySelector("#container")
const governorHTML = await GovernorsList();
const render = async () => {


    const composedHTML =`
    ${governorHTML}
    <article class="facilities>
        <section class="facilities__options">
        ${await facilities()}
        </section></article>
    `

    container.innerHTML = composedHTML
}

render()
