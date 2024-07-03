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

const showError = (message) => {
  const errorMessageElement = document.getElementById('error-message');
  if (errorMessageElement) {
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
  }
}

const hideError = () => {
  const errorMessageElement = document.getElementById('error-message');
  if (errorMessageElement) {
    errorMessageElement.style.display = 'none';
  }
}

export const purchaseMineral = async (mineralId, facilityId, colonyId) => {
 
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

 
  hideError();

  const colonyMinerals = await getAllColonyMinerals()
  const colonyMineralIndex = colonyMinerals.findIndex(
    colonyMineral => colonyMineral.colonyId === colonyId && colonyMineral.mineralId === mineralId
    )
    if (colonyMineralIndex >= 0) {
      
      const colonyMineralObject = colonyMinerals[colonyMineralIndex] 
      const newColonyMineralObject = {
        id: colonyMineralObject.id,
        colonyId: colonyMineralObject.colonyId,
        mineralId: colonyMineralObject.mineralId,
        quantity: colonyMineralObject.quantity + 1
      }
      
      updateColonyMinerals(colonyMineralIndex, newColonyMineralObject)
      
    } else {
      const newColonyMineralObject = {
        colonyId: state.colonyId,
        mineralId: state.selectedMineralId,
        quantity: 1
      }
      
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
