import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._name = data.name;
    this._link = data.link;
  }

  open() {
    this._popupSelector.querySelector('.display__image').src = this._link;
    this._popupSelector.querySelector('.display__image').alt = this._name;
    this._popupSelector.querySelector('.display__caption').textContent = this._name;
    super.open();
  }
}
