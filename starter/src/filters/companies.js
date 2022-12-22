import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (products) => {
  const companies = [...document.querySelectorAll(".company-name")];
  console.log(companies);
  companies.forEach((each) => {
    each.addEventListener("click", (e) => {
      const companyName = e.target.dataset.id;
      console.log(companyName);

      if (companyName === "all") {
        display(products);
      } else {
        const companyProducts = products.filter((each) =>
          each.fields.company.includes(companyName)
          );
          display(companyProducts)


      }
    });
  });
};

export default setupCompanies;
