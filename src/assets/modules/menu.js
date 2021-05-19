import { createNavbar, clearPage, createMain } from "./home";
function menuPage() {
  clearPage();
  createNavbar();
  createMain();
  addContent();
}
export { menuPage, addTitle };

import pizzaImage from "../img/pizza.png";
import hamburgerImage from "../img/hamburger.png";
import donutImage from "../img/donut.png";
import friesImage from "../img/fries.png";

function addTitle() {
  let titleH1 = document.createElement("h1");
  titleH1.textContent = "Fastest Food in The West";
  title.append(titleH1);
}

function addContent() {
  addTitle();

  let aboutH1 = document.createElement("h1");
  aboutH1.textContent = "MENU";
  about.append(aboutH1);

  let menuGrid = document.createElement("div");
  menuGrid.setAttribute("id", "menu-grid");
  about.append(menuGrid);

  makeFood(
    "container1",
    "cont1",
    "pizza",
    "title1",
    "Delicious Pizza",
    "pizzaButton",
    pizzaImage
  );

  makeFood(
    "container2",
    "cont2",
    "hamburger",
    "title2",
    "Howdy Burger",
    "hamburgerButton",
    hamburgerImage
  );
  makeFood(
    "container3",
    "cont3",
    "donut",
    "title3",
    "Do or Donut",
    "donutButton",
    donutImage
  );
  makeFood(
    "container4",
    "cont4",
    "fries",
    "title4",
    "Eastwood Fries",
    "friesButton",
    friesImage
  );

  function makeFood(container, contId, name, titleVar, title, button, img) {
    var container = document.createElement("div");
    container.setAttribute("id", contId);

    var name = document.createElement("img");
    name.setAttribute("src", img);

    var titleVar = document.createElement("h2");
    var button = document.createElement("button");

    menuGrid.appendChild(container);
    container.appendChild(name);
    container.appendChild(titleVar);
    container.appendChild(button);
    titleVar.textContent = title;
    button.textContent = "ORDER";
  }
}
