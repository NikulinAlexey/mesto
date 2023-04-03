import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    this._popupSelector = popupSelector;
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    
  }

  setEventListeners() {
    super.setEventListeners();
    this.formSubmit()
  }
  
}