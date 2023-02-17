
const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 
const formList = Array.from(document.querySelectorAll(enableValidationConfig.formSelector));
const inputList = Array.from(document.querySelectorAll(enableValidationConfig.inputSelector));

const checkInputValidity = (event, inputElement,config) => {
  const input = event.target;

  if (inputElement.validity.valid) {
    input.classList.remove(config.inputErrorClass)
  }else{
    input.classList.add(config.inputErrorClass)
  }
}

const setInputListeners = () => {
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function(event) {
      checkInputValidity(event, inputElement,enableValidationConfig)
    });
  });
}

const disableSubmit = () => {
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(event) {
      event.preventDefault()
    });
  });
};

disableSubmit();
setInputListeners();