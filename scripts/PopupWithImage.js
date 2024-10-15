import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageSelector, subtitleSelector) {
    super(popupSelector);
    this._imageSelector = document.querySelector(imageSelector);
    this._subtitle = document.querySelector(subtitleSelector);
  }

  open(link, title) {
    super.open();
    this._imageSelector.src = link;
    this._subtitle.textContent = title;
  }
}
