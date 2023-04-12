import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit, config) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._config = config;
    this._popup = document.querySelector(popupSelector)
    this._form = this._popup.querySelector(this._config.formSelector);
    this._inputList = this._form.querySelectorAll(this._config.inputSelector);
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    
    return this._formValues;
  }

  _close() {
    super.close()
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.reset();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      
      this._formSubmit(this._getInputValues());
    })
  }
}
