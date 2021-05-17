import "./assets/styles/main.scss";
// HMR
if (module.hot) {
  module.hot.accept();
}
//

import { homePage } from "./assets/modules/home";
import { menuPage } from "./assets/modules/menu";

const content = document.querySelector("#content");

homePage();

content.addEventListener("click", (ev) => {
  if (ev.target.id === "home") {
    homePage();
  } else if (ev.target.id === "menu") {
    menuPage();
  }
});
