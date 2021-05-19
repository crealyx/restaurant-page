import "./assets/styles/main.scss";

// HMR
if (module.hot) {
  module.hot.accept();
}
//

import { homePage } from "./assets/modules/home";
import { menuPage } from "./assets/modules/menu";
import { contactPage } from "./assets/modules/contact";

const content = document.querySelector("#content");

homePage();

content.addEventListener("click", (ev) => {
  if (ev.target.id === "home") {
    homePage();
  } else if (ev.target.id === "menu" || ev.target.id === "order-button") {
    menuPage();
  } else if (ev.target.id === "contact") {
    contactPage();
  }
});
