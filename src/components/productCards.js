export default class ProductCards {
  containerProducts;
  cardTemplate;

  constructor(containerClass, cardType, tabCards) {
    this.containerProducts = document.getElementsByClassName(containerClass)[0];

    this.cardTemplate = document.getElementById("card-" + cardType);

    const tabCardsList = tabCards.map((card) => {
      const newCard = this.cardTemplate.content.cloneNode(true);

      const cardTitle = newCard.querySelector(`.c-card-${cardType}__title--js`);
      const cardText = newCard.querySelector(`.c-card-${cardType}__text--js`);
      const cardImage = newCard.querySelector(`.c-card-${cardType}__image--js`);
      const cardOldPrice = newCard.querySelector(
        `.c-card-${cardType}__price-from--js`
      );
      const cardNewPrice = newCard.querySelector(
        `.c-card-${cardType}__price-to--js`
      );

      cardTitle.textContent = card.title;
      cardText.textContent = card.text;
      cardOldPrice.textContent = "$" + card.old_price;
      cardNewPrice.textContent = "$" + card.new_price;
      cardImage.src = card.image_src;
      cardImage.alt = card.image_alt;

      return newCard;
    });

    this.attach(tabCardsList);
  }

  attach(childs) {
    childs.map((child) => this.containerProducts.appendChild(child));
  }
}
