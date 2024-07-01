
import { getAllMinerals } from "./managers/mineralManager.js"
import { getAllMiningFacilities } from "./managers/miningFacilityManager.js"
import { handleMineralSelection } from "./Minerals.js"
import { state } from "./TransientState.js"



export const SpaceCart = async () => {
    const mineralInventory = await getAllMinerals()
    const facilityOptions = await getAllMiningFacilities()
    let spaceCartHTML = `<h2>Space Cart</h2>`
    
    if (state.facilityId === 0 || state.selectedMineralId === 0) {
        return spaceCartHTML
    } else {
    let cartMineral = mineralInventory.find(mineral => state.selectedMineralId === mineral.id)
    let cartFacility = facilityOptions.find(facility => state.facilityId === facility.id)    
    
    spaceCartHTML += `<div>1 ton of ${cartMineral.name} from ${cartFacility.name}</div>`
    
    // if (state.selectedMineralId ===  mineral.id && state.facilityId === facilityOptions.id) {
    //     cartContents =`1 ton of ${mineral.name} from ${facilityOptions.name}`
    // } 
    return spaceCartHTML
    }}
    //this may need to be a for...of loop, but we'll see
    
    


// event listener for change in the mineralId transient state
// html should read "x ton(s) of y from z"
// button click, triggers the PUT, and then resets the html message

