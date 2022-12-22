import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (products) => {
     const search = getElement(".search");

     search.addEventListener("keyup", () => {
       const searchTxt = search.value;
       const searchProduct = products.filter((each) =>
         each.fields.name.includes(searchTxt)
       );
       console.log(searchProduct);
       display(searchProduct);
     });
};

export default setupSearch;
