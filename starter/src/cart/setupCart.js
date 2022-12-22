// import
import {
  getStorageItem,
  setStorageItem,
  updateCartCount,
  updateCartTotal,
  getElement,
} from "../utils.js";
import { setupCart } from "./toggleCart.js";
// import { openCart } from './toggleCart.js';
// import { findProduct } from '../store.js';
// import addToCartDOM from './addToCartDOM.js';
// // set items

export const addToCart = (addItem) => {
  const cartItems = getStorageItem();
  // console.log(cartItems);
  let newCartItems;

  let x = false;
  cartItems.forEach((item) => {
    if (item.id === addItem.id) {
      item.quantity++;
      x = true;
    }
  });
  if (x === false) {
    newCartItems = [...cartItems, { ...addItem, quantity: 1 }];
  } else {
    newCartItems = [...cartItems];
  }
  // console.log(addItem);
  // console.log(newCartItems);
  // updateCartCount(newCartItems)
  // updateCartTotal(newCartItems)
  setStorageItem(newCartItems);
  setupCart(newCartItems);

  // localStorage.setItem('cartItems', JSON.stringify(newCartItems))
};

export const clearItemFromCart = (id) => {
  const cartItems = getStorageItem();
  const newCartItems = cartItems.filter((each) => each.id !== id);
  setStorageItem(newCartItems);
  setupCart(newCartItems);
};

export const removeFromCart = (id) => {
  // All cart items
  const cartItems = getStorageItem();
  // Fethc Item from all cart items
  // const selectedItem = cartItems.find((each) => each.id === id);

  // // Check if quantity < 2 ? remove if true
  // if (selectedItem.quantity < 2) {
  //   clearItemFromCart(id);
  // } else {
  //   // Dec. item quantity in cart
  //   cartItems.forEach((item) => {
  //     if (item.id === id) {
  //       item.quantity--;
  //     }
  //   });

  // ALTERNATE APPROACH: Takes 1/3 the time as above. Uses just 1 For Loop
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    if (item.id === id) {
      if (item.quantity < 2) {
        cartItems.splice(i, 1);
        break;
      }
      item.quantity--;
    }
  }

  // Add to local
  setStorageItem(cartItems);
  // Setup Cart
  setupCart(cartItems);
  // }
};

//  onst cartItems = getStorageItem()
// if (removeItem.quantity < 2) {
//   const x = clearItemFromCart(removeItem);
//   return x;
// } else {
//   cartItems.forEach((item) => {
//     if (item.id === removeItem.id) {
//       removeItem.quantity--;
//     }
//   });
//   return [...cartItems];
// }
// /
