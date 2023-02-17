
const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 
const formList = Array.from(document.querySelectorAll(enableValidationConfig.formSelector));

const setInputListeners = (config) => {
  const inputList = Array.from(document.querySelectorAll(config.inputSelector));

  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function() {
    });
  });
}

const handleFromInput = (event, config) => {
  const input = event.target;

  if (input.validity.valid) {
    input.classList.remove(config.errorClass)
  }else{
    input.classList.add(config.errorClass)
  }
}

const disableSubmit = () => {
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(event) {
      handleFromInput(event, config)
    });
  });
};

disableSubmit();
setInputListeners(enableValidationConfig)