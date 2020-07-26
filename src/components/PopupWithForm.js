import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._element = this._popupSelector.querySelector(".modal__form");
  }

  setEventListeners() {
    this._element.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
    super.setEventListeners();
  }

  close() {
    super.close();
    this._element.reset();
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll(".modal__input");

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }
}
