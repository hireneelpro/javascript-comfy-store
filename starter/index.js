// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement, allProductsUrl, getStorageItem, updateCartCount } from './src/utils.js';

// ============






// ==============
const displayFeaturedProducts = async() => {
  const allProducts = await fetchProducts(allProductsUrl) 
  // console.log(allProducts);
    localStorage.setItem('allProducts',JSON.stringify(allProducts))
  const featuredProducts = allProducts.filter(
      (each) => each.fields.featured
    );
  display(featuredProducts)
  const cartItems = getStorageItem()
  updateCartCount(cartItems)



}

displayFeaturedProducts()