import {initialCards} from './data.js';


class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_opened');
  }

  _setEventListeners() {
    this._image.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    buttonClosePopupImage.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }

 
}

class CardElement extends Card {
  constructor (data, templateSelector) {
    super(templateSelector);
    this._name = data.name;
    this._link = data.link;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.element__image').setAttribute('src', `${this._link}`);
    this._element.querySelector('.element__title').textContent = `${this._name}`;

    return this._element;
  }

  _handleOpenPopup() {
    this._element.querySelector('.image-popup__title').textContent = `${this._name}`;
    super._handleOpenPopup();
  }

  _handleClosePopup() {
    this._element.querySelector('.image-popup__title').textContent = '';
    super._handleClosePopup();
  }
}

const renderElements = (cardList) => {
  cardList.forEach((item) => {
    const cardElement = Card.generateCard();
    cardList.append(cardElement);
  });
};


renderElements(initialCards);




