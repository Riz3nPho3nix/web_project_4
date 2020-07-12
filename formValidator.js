class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }

  _checkInputValidity(input) {
    const error = this._formElement.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
      error.textContent = input.validationMessage;
      error.classList.add(this._errorClass);
      input.classList.add(this._inputErrorClass);
    } else {
      error.textContent = "";
      error.classList.remove(this._errorClass);
      input.classList.remove(this._inputErrorClass);
    }
  }

  _toggleSubmitButton(inputs, button, buttonClass) {
    const isValid = inputs.every((input) => input.validity.valid);
    if (!isValid) {
      button.classList.add(`${buttonClass}`);
      button.disabled=true;
    } else {
      button.classList.remove(`${buttonClass}`);
      button.disabled=false;
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const button = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleSubmitButton(inputs, button, this._inactiveButtonClass);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleSubmitButton(inputs, button, this._inactiveButtonClass);
      })
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', ((e) => {
      e.preventDefault()
    }))

    this._setEventListeners();
  }
}

export default FormValidator;