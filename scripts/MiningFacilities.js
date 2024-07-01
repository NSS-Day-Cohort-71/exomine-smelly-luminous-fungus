import { setFacilityId } from "./TransientState.js";
import { render } from "./main.js";
import { getAllMiningFacilities } from "./managers/miningFacilityManager.js";

const miningFacilities = await getAllMiningFacilities();
let facilitiesHtml = ""
if (condition) {
  
} else {
  
}
facilitiesHtml = `<div><h2>Facility Minerals</h2></div>`
export const facilities = async () => {
  facilitiesHtml += `<div><select id='facilities'><option disabled selected>Select Mining Facility</option>`;
  const facilityOptions = miningFacilities.map((facility) => {
    if (facility.isActive === true) {
      return `
                    <option value="${facility.id}">${facility.name}</option>
                `;
    }
  });

  facilitiesHtml += facilityOptions.join();
  facilitiesHtml += "</select></div>";

  return facilitiesHtml;
};

const facilitiesChangeHandler = (e) => {
  if (e.target.id === "facilities") {
    setFacilityId(parseInt(e.target.value));
    render();
  }
};

document.addEventListener("change", facilitiesChangeHandler);
