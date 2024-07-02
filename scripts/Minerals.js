import { render } from "./main.js";
import { getAllFacilityMinerals } from "./managers/facilityMineralManager.js";
import { getAllMiningFacilities } from "./managers/miningFacilityManager.js";
import { setSelectedMineralId, state } from "./TransientState.js";


// Display minerals available to colony to purchase
export const MineralsForSale = async () => {
  const facilityMineralList = await getAllFacilityMinerals();
  const facilityId = state.facilityId;

  const filteredList = facilityMineralList.filter(
    (mineral) => facilityId === mineral.facility.id
  );

  return filteredList
    .map((mineral) => {
      if (mineral.quantity > 0) {      
        if (mineral.id === state.selectedMineralId) {
          return `<div><input type="radio" id="${mineral.id}" name="mineral" value="${mineral.id}" checked /> ${mineral.quantity} ${mineral.mineral.name}</div>`;

        } else { 
          return `<div><input type="radio" id="${mineral.id}" name="mineral" value="${mineral.id}" /> ${mineral.quantity} ${mineral.mineral.name}</div>`
        }
      }
    })
    .join("");
};
        // return `<div><section id="${mineral.id}" name="mineral" value="${mineral.id}" /> ${mineral.quantity} ${mineral.mineral.name}</div>`;

// If inventory = 0 then no radio button
export const mineralsListHTML = async () => {
  const miningFacilities = await getAllMiningFacilities()
  let mineralsHTML = ""
  if (state.facilityId === 0) {
    mineralsHTML += `<div><h2>Facility Minerals</h2></div>`
    
  } else if (state.facilityId > 0) {
    
    let chosenFacility = miningFacilities.find(facility => 
       facility.id === state.facilityId
    )
   
    mineralsHTML += `<div><h2>Facility Minerals for ${chosenFacility.name}</h2></div>`
    
  }
  mineralsHTML += `<form id="minerals">`;
  mineralsHTML += await MineralsForSale();
  mineralsHTML += `</form>`;
  return mineralsHTML;
};

// Update state with selected mineral
export const handleMineralSelection = (e) => {
  if (e.target.name === "mineral") {
    setSelectedMineralId(parseInt(e.target.value));
  }
  render()
};

document.addEventListener("change", handleMineralSelection);
