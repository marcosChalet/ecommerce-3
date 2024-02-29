import swiperConfiguration from "./config/swiper.js";
import SectionsCards from "./components/sectionCards.js";
import ProductCards from "./components/productCards.js";
import ProductModel from "./repository/products.js";

class App {
  constructor() {
    const productModel = new ProductModel();
    const bestsellers = productModel.getProductsFromTable("bestsellers");
    const sections = productModel.getProductsFromTable("sections");
    const products1 = productModel.getProductsFromTable();
    const products2 = productModel.getProductsFromTable();

    new Swiper(".swiper", swiperConfiguration);
    new SectionsCards(sections);
    new ProductCards("c-products-tab--js", 2, products1);
    new ProductCards("c-products2-tab--js", 2, products2);
    new ProductCards("c-bestsellers__list", 3, bestsellers);

    this.activeMenuHeader();
    this.activeDropDown();
  }

  activeDropDown() {
    const dropdown = document.getElementById("dropdown");
    const dropdownList = document.getElementsByClassName(
      "c-dropdown-select--js"
    )[0];

    dropdown.addEventListener("click", () => {
      dropdownList.classList.toggle("u-show");
    });
  }

  activeMenuHeader() {
    const hamburguer = document.getElementsByClassName(
      "c-header__hamburguer--js"
    )[0];
    const mobileNav = document.getElementsByClassName("c-mobile-menu--js")[0];

    hamburguer.addEventListener("click", () => {
      mobileNav.classList.toggle("u-show");
    });
  }
}

new App();
