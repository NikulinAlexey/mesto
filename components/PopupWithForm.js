import Popup from './Popup.js';
import {validationConfig} from '../utils/constants.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector)
    this._formSubmit = formSubmit;
    this._popup = document.querySelector(popupSelector);
  }

  _getInputValues() {
    this._inputs = this._popup.querySelectorAll(validationConfig.inputSelector);
  }
  
  close() {
    super.close();
  }

  setEventListeners() {
    this._formSubmit
    super.setEventListeners();
  }
  
}