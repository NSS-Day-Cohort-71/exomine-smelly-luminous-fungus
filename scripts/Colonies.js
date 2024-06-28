import { getState } from "./TransientState.js"
import { getAllColonies } from "./managers/colonyManager.js"
import { getAllColonyMinerals } from "./managers/colonyMineralManager.js"
//look at the chosen governor
export const Colonies = async () => {
    const currentState = getState()
    if(currentState.governorId != 0){
    const allColonies = await getAllColonies()
    const allColonyMinerals = await getAllColonyMinerals()
    const assignedColony = allColonies.find(colony => currentState.governorId === colony.id)
    const colonyInventory = allColonyMinerals.filter(colMin => colMin.colonyId === assignedColony.id)
        
    let colonyHTML = `<h2 class="assigned-colony">Minerals for ${assignedColony.name}</h2>`
    colonyHTML += `
        ${
            colonyInventory.map(colInv => {
              return  `<section class="colony-inventory">${colInv.mineral.name}: ${colInv.quantity} tons</section>`
            }).join("")
        }
    `
    return colonyHTML
    } else return `<h2 class="assigned-colony"></h2>`
}


//need transient state getter
   //import transient state
//display the corresponding colony
//find() array method on colonies data to find match between governor and colony
//create header html el for colonies.name
//and that colony's current inventory. 
    //fetch colonyMinerals
    //filter() colonyMinerals.colonyId === colony.id
    //create html el for each colonyMineral with amount and name listed
//Create css tags for the section housing this data.