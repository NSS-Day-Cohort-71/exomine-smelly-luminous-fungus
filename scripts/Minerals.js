//have to get minerals from mining facility
import { getAllFacilityMinerals } from "./managers/facilityMineralManager.js";

//display minerals available to colony to purchase
const facilityMineralList = await getAllFacilityMinerals();
export const MineralsForSale = async (facilityId) => {
  facilityMineralList.filter((facility) => facility.id === facilityId);
};

export const displayInventory = async (facilityId) => {
  const inventory = MineralsForSale(facilityId);

  inventory.forEach((item) => {
    //each options should  have a radio button
    return `<div></div>
    <radio id="${item.id} /> ${inventory.quantity} ${facilityMineralList.mineral.name}
    </div>
    `;
  });
};

//if inventory = 0 then no radio button
//   return `<div>
//     <input type="radio" name="mineral" /> ${mineral.quantity} ${mineral.mineral.name}
//     </div>`;
export const mineralsListHTML = () => {
  let mineralsHTML = `<form id="minerals">`;
  mineralsHTML += displayInventory.join("");
  mineralsHTML += `</form>`;
  return mineralsHTML;
};
