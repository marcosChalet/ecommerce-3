import { sectionCards, tab1Products, bestsellers } from "../data/cards_data.js";

export default class ProductsModel {
  constructor(conn) {
    /* Adicionar a configuração de conexão com
     * o banco (possivelmente usar a lib 'pg')
     */
    this.pool = conn;
  }

  getProductsFromTable(table) {
    // data = await this.pool.getAllFromTable(table);
    let data;
    switch (table) {
      case "sections":
        data = sectionCards;
        break;
      case "bestsellers":
        data = bestsellers;
        break;
      default:
        data = tab1Products;
        break;
    }

    return data;
  }
}
