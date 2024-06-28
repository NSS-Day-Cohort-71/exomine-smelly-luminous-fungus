//have to get minerals from mining facility
import { getAllFacilityMinerals } from "./managers/facilityMineralManager.js";
//import state
//display minerals available to colony to purchase
const facilityMineralList = await getAllFacilityMinerals();
const facilityId = state.facilityId;
export const MineralsForSale = async () => {
  facilityMineralList.filter((facility) => facility.id === facilityId);
};

export const displayInventory = async () => {
  const inventory = MineralsForSale(facilityId);

  inventory.forEach((item) => {
    //each options should  have a radio button
    return `<div>
    <radio id="${item.id} /> ${item.quantity} ${item.mineral.name}
    </div>
    `;
    //if inventory = 0 then no radio button
  });
};

export const mineralsListHTML = () => {
  let mineralsHTML = `<form id="minerals">`;
  mineralsHTML += displayInventory().join("");
  mineralsHTML += `</form>`;
  return mineralsHTML;
};
