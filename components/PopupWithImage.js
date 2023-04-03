import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector)
  }
  openPopup() {
    super.openPopup();

    this._popup.setAttribute('src', `${inpuValue}`)
  }
}