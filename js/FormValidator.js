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
    this._input = this._formElement.querySelector(this._inputSelector);
    this._errorElement = this._formElement.querySelector(`#${this._input.id}-error`);
    this._buttonElement = this._formElement.querySelector(config.submitButtonSelector);
  }

  _showInputError () {
    this._input.classList.add(this._inputErrorClass);
    this._errorElement.textContent = this._input.validationMessage;
    console.log('show is working');
  }

  _hideInputError () {
    this._input.classList.remove(this._inputErrorClass);
    this._errorElement.textContent = '';
    console.log('hide is working')
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

  _handleFormInput () {
    if (this._input.validity.valid) {
      this._hideInputError();
    }else{
      this._showInputError();
    }
  }
  
  _setInputListeners () {
    this._input.addEventListener('input', (event) => {
      this._handleFormInput();
    });
    
  }
  
  enableValidation = () => {
    this._formElement.addEventListener('submit', function (event) {
      event.preventDefault();
      
      this._buttonElement.disabled = true;
      if (this._buttonElement.disabled) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
      }
    });
    this._formElement.addEventListener('input', () => {
      this._toggleButtonState();
    });

    this._toggleButtonState();
    this._setInputListeners();
    
  };
}

export {FormValidator};
