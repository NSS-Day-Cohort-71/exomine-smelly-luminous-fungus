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

// Function to display error messages
const showError = (message) => {
  const errorMessageElement = document.getElementById('error-message');
  if (errorMessageElement) {
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
  }
}

// Function to hide error messages
const hideError = () => {
  const errorMessageElement = document.getElementById('error-message');
  if (errorMessageElement) {
    errorMessageElement.style.display = 'none';
  }
}

export const purchaseMineral = async (mineralId, facilityId, colonyId) => {
  // Validation checks
  if (!state.governorId) {
    showError('Please select a governor.');
    return;
  }
  if (!state.colonyId) {
    showError('Please select a colony.');
    return;
  }
  if (!state.facilityId) {
    showError('Please select a facility.');
    return;
  }
  if (!state.selectedMineralId) {
    showError('Please select a mineral.');
    return;
  }

  // Hide error message if all validations pass
  hideError();

// export const purchaseMineral = async (mineralId, facilityId, colonyId) => {
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
