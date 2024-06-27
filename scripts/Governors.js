//get governors with manager function
import { getAllGovernors } from "./xxx.js";
import { setGovernorId } from "./TransientState.js";

//make a dropdown for only active governors
export const GovernorsList = async () => {
  const governors = await getAllGovernors();
  let governorHTML = `<label for="GovernorsList">Choose a Governor</label>
    	                <select id="GovernorsList">
                        <option disabled selected>Select Governor</option>`;
  const governorsMap = governors.map((governor) => {
    if (governor.isActive === true) {
      return `<option value="${governor.id}">${governor.name}</option>`;
    }
  });
  governorHTML += governorsMap.join("");
  governorHTML += `</select>`;

  return governorHTML;
};

const governorChangeHandler = (e) => {
  if (e.target.id === "GovernorsList") {
    setGovernorId(parseInt(e.target.value));
  }
};

document.addEventListener("change", governorChangeHandler);
