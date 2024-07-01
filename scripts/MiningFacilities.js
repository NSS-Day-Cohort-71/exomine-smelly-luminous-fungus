import { setFacilityId, state } from "./TransientState.js";
import { render } from "./main.js";
import { getAllMiningFacilities } from "./managers/miningFacilityManager.js";

const miningFacilities = await getAllMiningFacilities();
let facilitiesHtml = ""
if (state.facilityId === 0) {
  facilitiesHtml += `<div><h2>Facility Minerals</h2></div>`
  console.log(state)
} else if (state.facilityId !== 0) {
  let chosenFacility = miningFacilities.find(facility => {
    facility.id === state.facilityId
  })
  facilitiesHtml += `<div><h2>Facility Minerals for ${chosenFacility.name}</h2></div>`
  console.log(state)
}

export const facilities = async () => {
  facilitiesHtml += `<div><select id='facilities'><option disabled selected>Select Mining Facility</option>`
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
    // render();
    console.log(state)
  }
};

document.addEventListener("change", facilitiesChangeHandler);
