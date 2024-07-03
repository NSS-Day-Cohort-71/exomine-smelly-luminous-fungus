import { setFacilityId, setSelectedMineralId, state } from "./TransientState.js";
import { getAllMiningFacilities } from "./managers/miningFacilityManager.js";



export const facilities = async () => {
  const miningFacilities = await getAllMiningFacilities();
  let facilitiesHtml = `<div>
                          <label for="facilities">Choose a Facility</label>
                            <select id='facilities'>
                        <option disabled selected>Select Mining Facility</option>`
    const facilityOptions = miningFacilities.map((facility) => {
      if (facility.isActive === true) {
        if(facility.id === state.facilityId){
        return `<option value="${facility.id}" selected>${facility.name}</option>`;
      } else {
        return `<option value="${facility.id}" required>${facility.name}</option>`;
      }
}});

    facilitiesHtml += facilityOptions.join();
    facilitiesHtml += "</select></div>";

    return facilitiesHtml;
  };

  const facilitiesChangeHandler = (e) => {
    if (e.target.id === "facilities") {
      setFacilityId(parseInt(e.target.value));
      setSelectedMineralId(0)
  }
};

document.addEventListener("change", facilitiesChangeHandler);


