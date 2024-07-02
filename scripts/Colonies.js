import { getState, setColonyId } from "./TransientState.js";
import { getAllColonies } from "./managers/colonyManager.js";
import { getAllColonyMinerals } from "./managers/colonyMineralManager.js";
import { getAllGovernors } from "./managers/governorManager.js";
//look at the chosen governor
export const Colonies = async () => {
  const currentState = getState();
  if (currentState.governorId != 0) {
    const allColonies = await getAllColonies();
    const allGovernors = await getAllGovernors();
    const allColonyMinerals = await getAllColonyMinerals();
    const currentGovernor = allGovernors.find(gov => currentState.governorId === gov.id)
    const assignedColony = allColonies.find(
      (colony) => currentGovernor.colonyId === colony.id
    );
    setColonyId(assignedColony.id)
    const colonyInventory = allColonyMinerals.filter(
      (colMin) => colMin.colonyId === assignedColony.id
    );

    let colonyHTML = `<h2 class="assigned-colony">Minerals for ${assignedColony.name}</h2>`;
    colonyHTML += `
        ${colonyInventory
          .map((colInv) => {
            return `<section class="colony-inventory">${colInv.mineral.name}: ${colInv.quantity} tons</section>`;
          })
          .join("")}
    `;
    return colonyHTML;
  } else return `<h2 class="assigned-colony">Minerals for Colony</h2>`;
};
