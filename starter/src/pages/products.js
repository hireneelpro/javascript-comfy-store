// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import display from "../displayProducts.js";
import fetchProducts from "../fetchProducts.js";
import {
  allProductsUrl,
  getElement,
  getStorageItem,
  updateCartCount,
} from "../utils.js";
import { fixedNavbar } from "../fixednavbar.js";

const allProducts = async () => {
  const allProduct = await fetchProducts(allProductsUrl);
  display(allProduct);
  setupCompanies(allProduct);
  setupSearch(allProduct);
  setupPrice(allProduct);
  const cartItems = getStorageItem();
  updateCartCount(cartItems);
};
allProducts();
fixedNavbar();
