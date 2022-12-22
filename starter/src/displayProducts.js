import { findItem, getElement } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";

const display = (products) => {
  // console.log(products);
  const productsCenter = getElement(".products-center");
  productsCenter.innerHTML = products
    .map(({ id, fields }) => {
      // console.log(id, fields);
      const { name, price, image } = fields;
      const img = image[0].thumbnails.full.url;
      // console.log(name,price,img);

      return `<div class="product" id="${id}">

        <!-- image container -->
        <section class="product-image-container">
          <img class="product-img" src="${img}" alt="product-item">
          <a class="product-link" href="./product.html?id=${id}">
            <i class="fas fa-search icon"></i>
          </a>
          <span data-id=${id} class="add-to-cart">
            <i class="fas fa-shopping-cart icon"></i>
            </span>
        </section>

        <!-- item-info -->
        <h4 class="product-name">${name}</h4>
        <h3 class="product-price"> $ ${price / 100}</h3>

      </div>`;
    })
    .join("");
  
  // =======================================//
  
  const addToCartIcons =[... document.querySelectorAll(".add-to-cart")]
  // console.log(addToCart);
  addToCartIcons.forEach((each) => {
    each.addEventListener('click', (e) => {
    const selectedProductId = e.currentTarget.dataset.id
      // console.log(selectedProductId);
      const selectedProduct = findItem(selectedProductId)
      console.log(selectedProduct);
      addToCart(selectedProduct)

  })
    
  })
    
};

export default display;
