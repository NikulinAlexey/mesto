
const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 
const formList = Array.from(document.querySelectorAll(enableValidationConfig.formSelector));
const inputList = Array.from(document.querySelectorAll(enableValidationConfig.inputSelector));



const handleFormInput = (event, inputElement,config) => {
  const input = event.target;
  const errorElement = document.querySelector(`#${input.id}-error`);
  
  if (inputElement.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
  }else{
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
}

const toggleButtonState = (formElement, config) => {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  const isFormValid =  formElement.checkValidity();


  buttonElement.disabled = !isFormValid;
  buttonElement.classList.toggle(config.inactiveButtonClass, !isFormValid)

  console.log(isFormValid);
  console.log(buttonElement);
}

const setInputListeners = (config) => {
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function(event) {
      handleFormInput(event, inputElement,config)
    });
  });
}

const enableValidation = (config) => {
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function(event) {
      event.preventDefault();
    });
    formElement.addEventListener('input', function() {
      toggleButtonState(formElement, config)
    })
    toggleButtonState(formElement, config);
    setInputListeners(config);
  });
  
    
};



enableValidation(enableValidationConfig);


