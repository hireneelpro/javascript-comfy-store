// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports
import fetchProducts from "./src/fetchProducts.js";
import display from "./src/displayProducts.js";
import {
  allProductsUrl,
  getStorageItem,
  updateCartCount,
} from "./src/utils.js";
import { fixedNavbar } from "./src/fixednavbar.js";
// ============

// ==============
const displayFeaturedProducts = async () => {
  const allProducts = await fetchProducts(allProductsUrl);
  // console.log(allProducts);
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
  const featuredProducts = allProducts.filter((each) => each.fields.featured);
  console.log("Calling Index.js");
  display(featuredProducts);
  const cartItems = getStorageItem();
  updateCartCount(cartItems);
};

displayFeaturedProducts();
fixedNavbar();
