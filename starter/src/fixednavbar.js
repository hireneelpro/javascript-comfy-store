import { getElement } from "./utils.js";

export const fixedNavbar = () => {
  const navbar = getElement(".navbar");
  window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 80) {
      navbar.classList.add("fixed-navbar");
    } else {
      navbar.classList.remove("fixed-navbar");
    }
  });
};
