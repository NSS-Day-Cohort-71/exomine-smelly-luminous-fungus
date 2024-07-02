//get governors with manager function

import { getState, setColonyId, setGovernorId } from "./TransientState.js";
import { render } from "./main.js";
import { getAllGovernors } from "./managers/governorManager.js";
const currentState = getState()
//make a dropdown for only active governors
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

  return governorHTML;
};

const governorChangeHandler = (e) => {
  if (e.target.id === "GovernorsList") {
    setGovernorId(parseInt(e.target.value));
    render();
  }
};

document.addEventListener("change", governorChangeHandler);
