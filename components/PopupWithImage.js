import Popup from './Popup.js';
import {
  buttonImage,
  imageTitle,
} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(evt) {
    super.open()
    buttonImage.setAttribute('src', `${evt.target.src}`);
    buttonImage.setAttribute('alt', `${evt.target.closest('.element').querySelector('.element__title').textContent}`);
    imageTitle.textContent = `${evt.target.closest('.element').querySelector('.element__title').textContent}`;
  }
  setEventListeners() {
    super.setEventListeners();
  }
}