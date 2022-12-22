//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY
// import { totalCartCounts,totalCartPrice } from "./cart/toggleCart"
export const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'


export const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'



export const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}


export const updateCartCount = (cartItems) => {
  const counts = cartItems.reduce((acc, each) => (each.quantity + acc), 0)
  return counts
}
export const updateCartTotal = (cartItems) => {
  const total = cartItems.reduce((acc, each) =>
    acc + each.quantity * each.fields.price / 100
    , 0)
  return total.toFixed(2)
}

export const findItem = (id) => {
  const allProducts = localStorage.getItem("allProducts") ? JSON.parse(localStorage.getItem("allProducts")) : []
  //  console.log(allProducts);
  const selectedProduct =
    allProducts.find((each) => each.id === id)
  // console.log(selectedProduct);
  return selectedProduct
}



export const getStorageItem = () => localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [];


export const setStorageItem = (newCartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(newCartItems))
}

