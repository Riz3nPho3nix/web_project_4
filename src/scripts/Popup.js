export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('modal__open');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('modal__open');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }


  setEventListeners() {
    this._popupSelector.querySelector('.modal__close').addEventListener('click', () => {this.close()});
    this._popupSelector.addEventListener('click', (e) => {
      if (e.target.classList.contains("modal__open")) {
        this.close();
      }
    })
  }

}
