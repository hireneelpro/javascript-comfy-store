import { getElement } from "./utils.js";

const menuBtn = getElement(".menu-btn");
const sidebar = getElement(".sidebar");
const closeBtn = getElement(".close-btn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
