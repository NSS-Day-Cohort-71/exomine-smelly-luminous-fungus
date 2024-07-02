import { createNewColonyMineral, getAllColonyMinerals, updateColonyMinerals } from "./managers/colonyMineralManager.js";
import { getAllFacilityMinerals, updateFacilityMinerals } from "./managers/facilityMineralManager.js";

export let state = {
  governorId: 0,
  colonyId: 0,
  facilityId: 0,
  selectedMineralId: 0
};

export const setGovernorId = (id) => {
  state.governorId = id;
};

export const setFacilityId = (id) => {
  state.facilityId = id;
};

export const setSelectedMineralId = (id) => {
  state.selectedMineralId = id;
};

export const setColonyId = (id) => {
  state.colonyId = id
}
 /*
        Does the chosen governor's colony already own some of this mineral?
            - to check if governor's colony has the mineral, use findIndex() on colonyMinerals
            - If mineral exists, what should happen? (check if found index is < 0)
              -Use PUT to update that data, adding 1 to quantity.
            - If mineral does not exist, what should happen?
              -Use POST to create a new piece of data

          THEN, use findIndex() on facilityMinerals 
            -use that index to use PUT method to decrease quantity by 1

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */

export const purchaseMineral = async (mineralId, facilityId, colonyId) => {
  const colonyMinerals = await getAllColonyMinerals()//fetch all colonyMinerals
  const colonyMineralIndex = colonyMinerals.findIndex(//finds index of matching colonyMineral
    colonyMineral => colonyMineral.colonyId === colonyId && colonyMineral.mineralId === mineralId
    )
    if (colonyMineralIndex >= 0) {//checks if colonyMineral exists
      
      const colonyMineralObject = colonyMinerals[colonyMineralIndex] //gives me the full object at the found index
      const newColonyMineralObject = {//create a new object to PUT
        id: colonyMineralObject.id,
        colonyId: colonyMineralObject.colonyId,
        mineralId: colonyMineralObject.mineralId,
        quantity: colonyMineralObject.quantity + 1
      }
      //call PUT function passing in index and created object
      updateColonyMinerals(colonyMineralIndex, newColonyMineralObject)
      
    } else {//if colonyMineral object doesn't exist, create new object
      const newColonyMineralObject = {
        colonyId: state.colonyId,
        mineralId: state.selectedMineralId,
        quantity: 1
      }
      //call POST function passing in object to be created
      createNewColonyMineral(newColonyMineralObject)
    }
    decreaseFacilityInventory(facilityId, mineralId)
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

const decreaseFacilityInventory = async (facilityId, mineralId) => {
    const facilityMinerals = await getAllFacilityMinerals()
    const facilityMineralIndex = facilityMinerals.findIndex(
      facilityMineral => facilityMineral.facilityId === facilityId && facilityMineral.mineralId === mineralId
    )
    const facilityMineralObject = facilityMinerals[facilityMineralIndex]
    const newFacilityMineralObject = {
        id: facilityMineralObject.id,
        facilityId: facilityMineralObject.facilityId,
        mineralId: facilityMineralObject.mineralId,
        quantity: facilityMineralObject.quantity - 1
    }
    updateFacilityMinerals(facilityMineralIndex, newFacilityMineralObject)
}

export const getState = () => state;
