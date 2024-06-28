//have to get minerals from mining facility
import { getAllFacilityMinerals } from "./managers/facilityMineralManager";

//display minerals available to colony to purchase
export const MineralsForSale = async () => {
  const mineralSaleList = await getAllFacilityMinerals();
  let mineralsHTML = `<form id="minerals">`;
  //each options should have a radio button
  const mineralsMap = mineralSaleList.map((mineral) => {
    //if inventory = 0 then no radio button
    if (mineral.quantity === 0) {
      return `<div>${mineral.mineral.name}</div>`;
    } else {
      return `<div>
        <input type="radio" name="mineral" /> ${mineral.quantity} ${mineral.mineral.name}
        </div>`;
    }
  });

  mineralsHTML += mineralsMap.join("");
  mineralsHTML += `</form>`;
  return mineralsHTML;
};
