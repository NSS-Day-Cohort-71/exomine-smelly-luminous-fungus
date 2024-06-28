//have to get minerals from mining facility
import { getAllFacilityMinerals } from "./managers/facilityMineralManager.js";
//import state
import { state } from "./TransientState.js";
//display minerals available to colony to purchase
const facilityMineralList = await getAllFacilityMinerals();
const facilityId = state.facilityId;
export const MineralsForSale = async () => {
  const filteredList = facilityMineralList.filter(
    (mineral) => facilityId === mineral.facility.id
  );
  return filteredList
    .map((mineral) => {
      return `<radio id="${mineral.id} /> ${mineral.quantity} ${mineral.mineral.name}`;
    })
    .join("");
};

// return facilityMineralList.map((mineral) => {
//   mineral.find((facility) => facility.facility.id === facilityId);
// });
// export const displayInventory = async () => {
//   const inventory = await MineralsForSale();

//   inventory.forEach((item) => {
//     //each options should  have a radio button
//     return `<div>
//     <radio id="${item.id} /> ${item.quantity} ${item.mineral.name}
//     </div>
//     `;
//   });
// };

//if inventory = 0 then no radio button
export const mineralsListHTML = async () => {
  let mineralsHTML = `<form id="minerals">`;
  mineralsHTML += await MineralsForSale();
  mineralsHTML += `</form>`;
  return mineralsHTML;
};
