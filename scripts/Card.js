export default class Card {
  constructor(data, template, { handleCardClick }) {
    this._data = data;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _getCardElement() {
    const cardElement = this._template.content
      .querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setImageEvents(cardElement) {
    const link = this._data.link;
    const title = this._data.name;
    cardElement.querySelector(".card__image").addEventListener("click", () => {
      this._handleCardClick(link, title);
    });
  }

  _setLikeButtonEvents(cardElement) {
    cardElement
      .querySelector(".card__button")
      .addEventListener("click", function (e) {
        e.target.classList.toggle("card__button_active");
      });
  }

  _setRemoveButtonEvents(cardElement) {
    cardElement
      .querySelector(".card__remove-button")
      .addEventListener("click", function () {
        cardElement.remove();
      });
  }

  _setEventListeners(cardElement) {
    this._setImageEvents(cardElement);
    this._setLikeButtonEvents(cardElement);
    this._setRemoveButtonEvents(cardElement);
  }

  generateCard() {
    this._element = this._getCardElement();
    this._setEventListeners(this._element);

    this._element.querySelector(".card__image").src = this._data.link;
    this._element.querySelector(".card__title").textContent = this._data.name;

    return this._element;
  }
}
