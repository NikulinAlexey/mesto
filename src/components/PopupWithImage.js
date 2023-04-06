import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imagePopupImage, ImagePopuptext) {
    super(popupSelector);
    this._buttonImage = imagePopupImage;
    this._imageTitle = ImagePopuptext;
  }
  open(cardElementTitle, cardElementImage) {
    super.open()
    this._buttonImage.setAttribute('src', `${cardElementImage}`);
    this._buttonImage.setAttribute('alt', `${cardElementTitle}`);
    this._imageTitle.textContent = `${cardElementTitle}`;
  }
}