import { facilities } from "./MiningFacilities.js";
import { GovernorsList } from "./Governors.js";
import { Colonies } from "./Colonies.js";
import { mineralsListHTML } from "./Minerals.js";
import { SpaceCart } from "./SpaceCart.js";
import { SubmitButton } from "./SubmitButton.js";

const container = document.querySelector("#container");

export const render = async () => {
  const governorHTML = await GovernorsList();
  const facilitiesHTML = await facilities();
  const colonyHTML = await Colonies();
  const mineralsHTML = await mineralsListHTML();
  const spaceCartHTML = await SpaceCart()
  const buttonHTML = await SubmitButton()
  const composedHTML = `
  <div class="flex-container">
    <div class="left-panel">
      <section class="governor-section">
        ${governorHTML}
      </section>
      <section class="facilities-section">
        ${facilitiesHTML}
      </section>
      <section class="minerals-section">
        ${mineralsHTML}
      </section>
    </div>
    <div class="right-panel">
      <section class="colony">
        ${colonyHTML}
      </section>
    </div>
    <div>
    ${spaceCartHTML}
    ${buttonHTML}
    </div>
  </div>
`;

  container.innerHTML = composedHTML;
};

render();
