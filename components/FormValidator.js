class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(config.submitButtonSelector);
    this._inputList = document.querySelectorAll(this._inputSelector);
  }

  _showInputError (input, errorElement) {
    input.classList.add(this._inputErrorClass);
    if(errorElement) {
      errorElement.textContent = `${input.validationMessage}`;
    }
    ;
  }

  _hideInputError = (input, errorElement) => {
    input.classList.remove(this._inputErrorClass);
    if(errorElement){
      errorElement.textContent = '';
    }
  }

  _toggleButtonState () {
    const isFormValid =  this._formElement.checkValidity();
  
    this._buttonElement.disabled = !isFormValid;
    if (this._buttonElement.disabled) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    }else{
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _handleFormInput (evt) {
    const input = evt.target;
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    console.log()

    if (input.validity.valid) {
      this._hideInputError(input, errorElement);
    }else{
      this._showInputError(input, errorElement);
    }
  }
  
  _setInputListeners () {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', (evt) => {
        this._handleFormInput(evt);
      })
    })
    
  }
  
  enableValidation = () => {
    this._formElement.addEventListener('submit',(evt) => {
      evt.preventDefault();
      
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._inactiveButtonClass);
    });
    this._formElement.addEventListener('input', () => {
      this._toggleButtonState();
    });
    this._toggleButtonState();
    this._setInputListeners();
  };
}

export {FormValidator};
