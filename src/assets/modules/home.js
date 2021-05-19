function homePage() {
  clearPage();
  createNavbar();
  createMain();
  addContent();
}
export { homePage, createNavbar, clearPage, createMain };

const content = document.querySelector("#content");

function createNavbar() {
  // Navbar
  let navbar = document.createElement("ul");
  navbar.setAttribute("id", "navbar");
  content.append(navbar);

  // Tabs
  let home = document.createElement("li");
  let menu = document.createElement("li");
  let contact = document.createElement("li");
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  home.setAttribute("id", "home");
  menu.setAttribute("id", "menu");
  contact.setAttribute("id", "contact");

  navbar.append(home);
  navbar.append(menu);
  navbar.append(contact);
}

function createMain() {
  let imgWrapper = document.createElement("div");
  imgWrapper.setAttribute("id", "img-wrapper");
  content.append(imgWrapper);

  let imgColor = document.createElement("div");
  imgColor.setAttribute("id", "img-color");
  imgWrapper.append(imgColor);

  let wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");
  imgColor.append(wrapper);

  let title = document.createElement("div");
  title.setAttribute("id", "title");
  wrapper.append(title);

  let about = document.createElement("div");
  about.setAttribute("id", "about");
  wrapper.append(about);
}

function clearPage() {
  content.textContent = "";
}

function addContent() {
  let titleH1 = document.createElement("h1");
  titleH1.textContent = "Fastest Food in The West";
  title.append(titleH1);

  let aboutH1 = document.createElement("h1");
  aboutH1.textContent = "Fast Food Meets Fast Delivery!";
  about.append(aboutH1);

  let aboutH2 = document.createElement("h2");
  aboutH2.textContent = "(also very cheap)";
  about.append(aboutH2);

  let orderButton = document.createElement("button");
  orderButton.textContent = "ORDER HERE";
  orderButton.setAttribute("id", "order-button");
  wrapper.append(orderButton);
}
