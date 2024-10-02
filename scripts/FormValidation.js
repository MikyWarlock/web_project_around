export default class FormValidation {
  constructor(data, formElement) {
    this._data = data;
    this._formElement = formElement;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorClass = this._data.errorClass;
    const inputErrorClass = this._data.inpuErrorClass;
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  _hideInputError(formElement, inputElement) {
    const errorClass = this._data.errorClass;
    const inputErrorClass = this._data.inpuErrorClass;
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    const inactiveButtonClass = this._data.inactiveButtonClass;
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
    }
  }

  _setEventListeners(formElement) {
    const formData = this._data;
    const inputList = Array.from(
      formElement.querySelectorAll(formData.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      formData.submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    const form = this._formElement;
    this._setEventListeners(form);
  }
}
