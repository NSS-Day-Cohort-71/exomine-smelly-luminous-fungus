import { getState, setColonyId, setGovernorId } from "./TransientState.js";
import { render } from "./main.js";
import { getAllGovernors } from "./managers/governorManager.js";
const currentState = getState()

export const GovernorsList = async () => {
  const governors = await getAllGovernors();
  
  let governorHTML = `<label for="GovernorsList">Choose a Governor</label>
    	                <select id="GovernorsList">
                        <option disabled selected>Select Governor</option>`;
  const governorsMap = governors.map((governor) => {
    if (governor.isActive === true) {
      if(governor.id === currentState.governorId){
      return `<option value="${governor.id}" selected>${governor.name}</option>`;
      } else {
        return `<option value="${governor.id}" required >${governor.name}</option>`;
}}});
  governorHTML += governorsMap.join("");
  governorHTML += `</select>`;

  const selectedGovernor = governors.find(governor => governor.id === currentState.governorId);
  const governorImageSrc = selectedGovernor && selectedGovernor.image ? selectedGovernor.image : "";

  governorHTML += `
    <div id="governor-image-container">
      <img id="governor-image" src="${governorImageSrc}" alt="Governor Image" style="display:${governorImageSrc ? 'block' : 'none'};">
    </div>
  `;

  return governorHTML;
};

const governorChangeHandler = async (e) => {
  if (e.target.id === "GovernorsList") {
    const governors = await getAllGovernors();
    setGovernorId(parseInt(e.target.value));
    const selectedGovernor = governors.find(governor => governor.id === currentState.governorId);

    const governorImageElement = document.getElementById("governor-image");
    if (selectedGovernor.image) {
      governorImageElement.src = selectedGovernor.image;
      governorImageElement.style.display = "block";
    } else {
      governorImageElement.src = "";
      governorImageElement.style.display = "none";
    }
    render();
  }
};

document.addEventListener("change", governorChangeHandler);
