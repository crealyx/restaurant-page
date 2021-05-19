import { createNavbar, clearPage, createMain } from "./home";

import { addTitle } from "./menu";

function contactPage() {
  clearPage();
  createNavbar();
  createMain();
  addContent();
}

export { contactPage };

function addContent() {
  addTitle();

  let aboutH1 = document.createElement("h1");
  aboutH1.textContent = "Contact";
  aboutH1.setAttribute("id", "contact");
  about.append(aboutH1);

  let contactText = document.createElement("h2");
  contactText.textContent = "Come and visit us, or order online!";
  about.append(contactText);

  let map = document.createElement("iframe");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/d/u/0/embed?mid=1WZFDhVfn6wswfNrE3NJYGO3Yu3jhrBod"
  );
  about.append(map);
}
