import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector)
    this._formSubmit = formSubmit;
  }

  _getInputValues() {}
  
  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
  }
  
}