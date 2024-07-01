import { getAllMinerals } from "./managers/mineralManager.js"
import { getAllMiningFacilities } from "./managers/miningFacilityManager.js"

const mineralInventory = await getAllMinerals()
const facilityOptions = await getAllMiningFacilities()

export const SpaceCart = async () => {

    let spaceCartHTML = `<h2>Space Cart</h2>`
    let cartContents = null
    if (state.mineralId ===  mineralInventory.id && state.facilityId === facilityOptions.id) {
        cartContents =`1 ton of ${mineralInventory.name} from ${facilityOptions.name}`
    } 
    //this may need to be a for...of loop, but we'll see
    spaceCartHTML += cartContents
    return spaceCartHTML
}

// event listener for change in the mineralId transient state
// html should read "x ton(s) of y from z"
// button click, triggers the PUT, and then resets the html message

const mineralChange = (changeEvent) => {
    if (changeEvent.target.name === "mineral") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setMineralId(convertedToInteger)
    }
}