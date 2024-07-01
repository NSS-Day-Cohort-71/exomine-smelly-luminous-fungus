import { render } from "./main.js";
import { getAllFacilityMinerals } from "./managers/facilityMineralManager.js";
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
      if (mineral.quantity <= 0) {
        return `<div><section id="${mineral.id}" name="mineral" value="${mineral.id}" /> ${mineral.quantity} ${mineral.mineral.name}</div>`;
      }
      return `<div><input type="radio" id="${mineral.id}" name="mineral" value="${mineral.id}" /> ${mineral.quantity} ${mineral.mineral.name}</div>`;
    })
    .join("");
};

// If inventory = 0 then no radio button
export const mineralsListHTML = async () => {
  let mineralsHTML = `<form id="minerals">`;
  mineralsHTML += await MineralsForSale();
  mineralsHTML += `</form>`;
  return mineralsHTML;
};

// Update state with selected mineral
const handleMineralSelection = (e) => {
  if (e.target.name === "mineral") {
    setSelectedMineralId(parseInt(e.target.value));
  }
};

document.addEventListener("change", handleMineralSelection);
