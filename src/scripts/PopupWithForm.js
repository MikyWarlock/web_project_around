import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ callbackFunction }, popupSelector) {
    super(popupSelector);
    this._callbackFunction = callbackFunction;
  }

  _getInputValues() {
    this._inputs = document.querySelectorAll(".form__input");
    return this._inputs;
  }

  setEventListeners() {
    super.setEventListeners();
    this._inputs = this._getInputValues();
    this._popupSelector
      .querySelector(".form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        this._callbackFunction(this._inputs);
        this.close();
      });
  }

  close() {
    super.close();
    this._popupSelector.querySelector(".form").reset();
  }
}
