function showErrorMessage(input, form, {errorClass, inputErrorClass}) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;

  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}

function hideErrorMessage(input, form, {errorClass, inputErrorClass}) {
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = "";

  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}


function checkInputValidity(input, form, rest) {
  if (input.validity.valid) {
    hideErrorMessage(input, form, rest);
  } else {
    showErrorMessage(input, form, rest);
  }
}

function toggleSubmitButton(inputs, button, buttonClass) {
  const isValid = inputs.every((input) => input.validity.valid);
  if (!isValid) {
    button.classList.add(`${buttonClass}`);
    button.disabled=true;
  } else {
    button.classList.remove(`${buttonClass}`);
    button.disabled=false;
  }
}

function enableValidation ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) {
  const forms = Array.from(document.querySelectorAll(formSelector));

  forms.forEach((form) => {
    form.addEventListener('submit', ((e) => {
      e.preventDefault()
    }))

    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const button = form.querySelector(submitButtonSelector);
    toggleSubmitButton(inputs, button, inactiveButtonClass);
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, form, rest);
        toggleSubmitButton(inputs, button, inactiveButtonClass);
      })
    })

  })
}

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
});
