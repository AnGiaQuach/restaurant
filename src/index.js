import linkContact from "./contact.js";
import linkHome from "./home.js";
import linkMenu from "./menu.js";
import "./style.css";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

linkHome();

homeBtn.addEventListener("click", () => {
  linkHome();
});

menuBtn.addEventListener("click", () => {
  linkMenu();
});

contactBtn.addEventListener("click", () => {
  linkContact();
});
