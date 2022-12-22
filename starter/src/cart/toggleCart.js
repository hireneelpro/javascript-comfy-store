import { findItem, getElement, getStorageItem, updateCartCount, updateCartTotal } from '../utils.js';
import { addToCart, removeFromCart } from './setupCart.js';

const cartItemsDOM = getElement(".cart-items")
const cartContainer = getElement(".cart-items-container")
const totalCartCounts = getElement(".total-count")
const totalCartPrice = getElement(".total-price")
const cart = getElement(".cart-btn")
const cartCounts = getElement('.cart-counts')
const cartItems = getStorageItem()

export const setClickListeners = () => {
  const incrementBtns = document.querySelectorAll(".increment")
  const decrementBtns = document.querySelectorAll(".decrement")

  incrementBtns.forEach((each) => {
    each.addEventListener("click", (e) => {
      const selectedId = e.currentTarget.parentElement.dataset.id
      const selectedItem = findItem(selectedId)
      console.log(selectedItem);
      addToCart(selectedItem)
    })
  })

  decrementBtns.forEach((each) => {
    each.addEventListener("click", (e) => {
      const selectedId = e.currentTarget.parentElement.dataset.id;
      removeFromCart(selectedId)
    })
  })
}

export const setupCart = (cartItems) => {
  
  const totalCounts = updateCartCount(cartItems)
  const totalPrice = updateCartTotal(cartItems)
  cartCounts.innerText =totalCounts;
  totalCartCounts.innerText = `Total Count: ${totalCounts}`
  totalCartPrice.innerText = `Total Price: ${totalPrice}`
  console.log(totalCounts, totalPrice);
  console.log(cartItems);

  // Set innerHTML of the Cart Popup
  cartContainer.innerHTML = cartItems.map((each) => {
    const { id, quantity, fields } = each
    const { name } = fields

    return ` <article class="cart-item">
  <h4 class="cart-item-name">${name}</h4>
  <div data-id="${id}" class="update-item-icons">
  <i class="fas fa-chevron-up increment"></i>
  <span class="quantity">${quantity}</span>
  <i class="fas fa-chevron-down decrement"></i>
  </div>
  </article> `
  }).join("")

  // Add event listener to all the new inc. and dec. buttons
  setClickListeners();
}


cart.addEventListener("click", () => {
  cartItemsDOM.classList.toggle('open-cart-items')
})

setupCart(cartItems)
