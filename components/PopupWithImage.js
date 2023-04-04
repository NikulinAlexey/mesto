import Popup from './Popup.js';
import {
  buttonImage,
  imageTitle,
  linkInput,
  placeInput
} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    super.open()

    buttonImage.setAttribute('src', `${linkInput.value}`);
    buttonImage.setAttribute('alt', `${placeInput.value}`);
    imageTitle.textContent = `${placeInput.value}`;
  }
  setEventListeners() {
    super.setEventListeners();
  }
}