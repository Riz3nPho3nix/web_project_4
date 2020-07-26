import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._displayImage = this._popupSelector.querySelector('.display__image');
    this._displayCaption = this._popupSelector.querySelector('.display__caption')
  }

  open(data) {
    this._name = data.name;
    this._link = data.link;
    this._displayImage.src = this._link;
    this._displayImage.alt = this._name;
    this._displayCaption.textContent = this._name;
    super.open();
  }
}
