export default class SectionsCards {
  containerSections;
  cardTemplate;

  constructor(cards) {
    this.containerSections =
      document.getElementsByClassName("c-sections--js")[0];

    this.cardTemplate = document.getElementById("card-1");

    const cardList = cards.map((card) => {
      const newCard = this.cardTemplate.content.cloneNode(true);

      const cardTitle = newCard.querySelector(".c-card-1__title--js");
      const cardSubtitle = newCard.querySelector(".c-card-1__subtitle--js");
      const cardText = newCard.querySelector(".c-card-1__text--js");
      const cardImage = newCard.querySelector(".c-card-1__image--js");

      cardTitle.textContent = card.title;
      cardSubtitle.textContent = card.subtitle;
      cardText.textContent = card.text;
      cardImage.src = card.image_src;
      cardImage.alt = card.image_alt;

      return newCard;
    });

    this.attach(cardList);
  }

  attach(childs) {
    childs.map((child) => this.containerSections.appendChild(child));
  }
}
