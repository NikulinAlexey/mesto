
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

const showInputError = (config, input, errorElement) => {
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}

const hideInputError = (config, input, errorElement) => {
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

const toggleButtonState = (formElement, config) => {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  const isFormValid =  formElement.checkValidity();

  buttonElement.disabled = !isFormValid;
  if (buttonElement.disabled) {
    buttonElement.classList.add(config.inactiveButtonClass);
  }else{
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
}

const handleFormInput = (event, inputElement,config) => {
  const input = event.target;
  const errorElement = document.querySelector(`#${input.id}-error`);
  
  if (inputElement.validity.valid) {
    hideInputError(config, input, errorElement);
  }else{
    showInputError(config, input, errorElement);
  }
}

const setInputListeners = (config,inputList) => {
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function(event) {
      handleFormInput(event, inputElement,config);
    });
  });
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  const inputList = Array.from(document.querySelectorAll(config.inputSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const buttonElement = formElement.querySelector(config.submitButtonSelector);
      buttonElement.disabled = true;
      if (buttonElement.disabled) {
        buttonElement.classList.add(config.inactiveButtonClass);
      }else{
        buttonElement.classList.remove(config.inactiveButtonClass);
      }
    });
    formElement.addEventListener('input', function() {
      toggleButtonState(formElement, config);
    });
    
    toggleButtonState(formElement, config);
    setInputListeners(config,inputList);
  });
  
};

enableValidation(validationConfig);
