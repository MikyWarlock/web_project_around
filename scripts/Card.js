import { openPopup, closePopup, overlay } from "./utils.js";

export default class Card {
  constructor(data, template) {
    this._data = data;
    this._template = template;
  }

  _getCardElement() {
    const cardElement = this._template.content
      .querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setImageEvents(cardElement) {
    const link = this._data.link;
    const imagePopup = document.querySelector("#image-popup");
    cardElement
      .querySelector(".card__image")
      .addEventListener("click", function () {
        openPopup(imagePopup, link);
        overlay.addEventListener("click", function () {
          closePopup(imagePopup);
        });
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape") {
            closePopup(imagePopup);
          }
        });
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

  generateCard(gallery) {
    this._element = this._getCardElement();
    this._setEventListeners(this._element);

    this._element.querySelector(".card__image").src = this._data.link;
    this._element.querySelector(".card__title").textContent = this._data.name;

    gallery.prepend(this._element);
  }
}
