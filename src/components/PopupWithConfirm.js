import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector)
    this._formSubmit = formSubmit;
  }

  open(cardClass) {
    super.open();
    this._cardClass = cardClass;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      
      this._formSubmit(this._cardClass);
    })
  }
}