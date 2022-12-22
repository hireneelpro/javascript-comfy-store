// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, findItem } from "../utils.js";
import fetchProducts from "../fetchProducts.js";
import { getStorageItem,updateCartCount } from "../utils.js";



const productPage = getElement(".product")

window.addEventListener("DOMContentLoaded", async () => {
  // ===== update cartcount====
  const cartItems = getStorageItem()
  updateCartCount(cartItems)

  const productID = window.location.search;
  productPage.innerHTML = `<h2 style = "text-align:center " > Loading.... </h2>`
  const productData = await fetchProducts(`${singleProductUrl}${productID}`);
  // try {
    
  // } catch (error) {
  //   new Error(`there is some problem error:${error} `)
  //   productPage.innerHTML = `there is some error:${error}`
  // }
  
  const id = productData.id;
  const productName = productData.fields.name
  const productColors = productData.fields.colors
  const productPrice = productData.fields.price / 100
  const productImage = productData.fields.image[0].thumbnails.large.url
  const productText = productData.fields.description

  productPage.innerHTML = `
  <h2 class="page-title">home/
      <span class="page-name">${productName}</span>
    </h2>
    <div class="product-center">
      <img src="${productImage}" class="product-image" alt="${productName}">
      <div class="product-info">
        <h2 class="product-name">${productName}</h2>
        <h3 class="product-price">$ ${productPrice}</h3>
        
        <div class="color-container">
          ${productColors.map((each) => `<span class="color" style = "background-color:${each}"  ></span>`).join("")}
          <span class="color"></span>
        </div>

        <p class="product-text">${productText}</p>
        <button  class="btn add-to-cart-btn ">Add to cart</button>
      </div>
    </div> 
  `
  const addToCartBtn = getElement(".add-to-cart-btn")

  addToCartBtn.addEventListener("click", (e) => {
    // const selectedProductId = e.target.dataset.id
    // console.log(id);
    const selectedProduct = findItem(id)
    // console.log(selectedProduct);
    addToCart(selectedProduct)
  })

});


// =================

// selections
// const loading = getElement('.page-loading');
// const centerDOM = getElement('.single-product-center');
// const pageTitleDOM = getElement('.page-hero-title');
// const imgDOM = getElement('.single-product-img');
// const titleDOM = getElement('.single-product-title');
// const companyDOM = getElement('.single-product-company');
// const priceDOM = getElement('.single-product-price');
// const colorsDOM = getElement('.single-product-colors');
// const descDOM = getElement('.single-product-desc');
// const cartBtn = getElement('.addToCartBtn');

// cart product
// let productID;
// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get("id");
// console.log(myParam);
// show product when page loads