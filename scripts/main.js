import { GovernorsList } from "./Governors.js";

export const render = async () => {
  const containerElement = document.querySelector("#container");

  const governorHTML = await GovernorsList();

  containerElement.innerHTML = `
  ${governorHTML}`;
};

render();
