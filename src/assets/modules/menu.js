import { createNavbar, clearPage, createMain } from "./home";
function menuPage() {
  clearPage();
  createNavbar();
  createMain();
  addContent();
}
export { menuPage };

import pizzaImage from "../img/pizza.png";
import hamburgerImage from "../img/hamburger.png";
import donutImage from "../img/donut.png";
import friesImage from "../img/fries.png";

function addContent() {
  let titleH1 = document.createElement("h1");
  titleH1.textContent = "Fastest Food in The West";
  title.append(titleH1);

  let aboutH1 = document.createElement("h1");
  aboutH1.textContent = "MENU";
  about.append(aboutH1);

  let menuGrid = document.createElement("div");
  menuGrid.setAttribute("id", "menu-grid");
  about.append(menuGrid);

  // Pizza
  // let food1Container = document.createElement("div");
  // food1Container.setAttribute("id", "food1");
  // let pizzaa = document.createElement("img");
  // let food1Title = document.createElement("h2");
  // let food1Button = document.createElement("button");
  // pizzaa.setAttribute("src", pizzaImage);
  // menuGrid.append(food1Container);
  // food1Container.append(pizzaa);
  // food1Container.append(food1Title);
  // food1Container.append(food1Button);
  // food1Title.textContent = "Delicious Pizza";
  // food1Button.textContent = "ORDER";
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
    "Do or donut, there is no fry",
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
  // // Hamburger
  // let food2 = document.createElement("div");
  // food2.setAttribute("id", "food2");
  // let food2Title = document.createElement("h2");
  // let food2Button = document.createElement("button");
  // menuGrid.append(food2);
  // food2.append(food2Title);
  // food2.append(food2Button);

  // let orderButton = document.createElement("button");
  // orderButton.textContent = "ORDER HERE";
  // orderButton.setAttribute("id", "order-button");
  // wrapper.append(orderButton);
}
