import { setColonyId, state } from "./TransientState.js";
import { getAllColonies } from "./managers/colonyManager.js";
import { getAllColonyMinerals } from "./managers/colonyMineralManager.js";
//look at the chosen governor
export const Colonies = async () => {
  const currentState = state;
  if (currentState.governorId != 0) {
    const allColonies = await getAllColonies();
    const allColonyMinerals = await getAllColonyMinerals();
    const assignedColony = allColonies.find(
      (colony) => currentState.governorId === colony.id
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
