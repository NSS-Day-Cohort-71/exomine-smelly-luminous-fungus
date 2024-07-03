
import { getAllMinerals } from "./managers/mineralManager.js"
import { getAllMiningFacilities } from "./managers/miningFacilityManager.js"
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
  
    return spaceCartHTML
    }}
   

