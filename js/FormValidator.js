class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _showInputError (config, input, errorElement) {
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideInputError (config, input, errorElement) {
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
  }

  _toggleButtonState (formElement, config) {
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    const isFormValid =  formElement.checkValidity();
  
    buttonElement.disabled = !isFormValid;
    if (buttonElement.disabled) {
      buttonElement.classList.add(config.inactiveButtonClass);
    }else{
      buttonElement.classList.remove(config.inactiveButtonClass);
    }
  }

  _handleFormInput (event, inputElement,config) {
    const input = event.target;
    const errorElement = document.querySelector(`#${input.id}-error`);
    
    if (inputElement.validity.valid) {
      this._hideInputError(config, input, errorElement);
    }else{
      this._showInputError(config, input, errorElement);
    }
  }
  
  _setInputListeners  (config,inputList)  {
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (event) => {
        this._handleFormInput(event, inputElement, config);
      });
    });
  }
  
  enableValidation = (config) => {
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
      formElement.addEventListener('input', () => {
        this._toggleButtonState(formElement, config);
      });
      
      this._toggleButtonState(formElement, config);
      this._setInputListeners(config,inputList);
    });
    
  };

}

//Код из файла валидации:

export {FormValidator};
