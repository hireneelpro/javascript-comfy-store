import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (products) => {
    const priceFilter = getElement(".price-filter")
    const price = getElement(".value")
    priceFilter.addEventListener("change", () => {
        const priceValue = priceFilter.value
        // console.log(priceValue);
        price.innerText = priceValue
        const filteredProducts = products.filter((each) => (each.fields.price/100 < priceValue))
        display(filteredProducts)


    })



};

export default setupPrice;
