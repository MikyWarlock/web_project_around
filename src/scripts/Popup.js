export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._overlay = document.querySelector(".overlay");
  }
  open() {
    this._popupSelector.classList.remove("popup_invisible");
    this._overlay.classList.add("overlay_active");
    this._handleEscClose();
  }

  close() {
    this._popupSelector.classList.add("popup_invisible");
    this._overlay.classList.remove("overlay_active");
  }

  _handleEscClose() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  setEventListeners() {
    this._overlay.addEventListener("click", () => {
      this.close();
    });
    this._closeButton = this._popupSelector.querySelector(
      ".popup__close-button"
    );
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
