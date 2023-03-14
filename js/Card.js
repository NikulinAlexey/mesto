const elements = document.querySelector('.elements');
const buttonImage = document.querySelector('.image-popup__image');

 export class Card {
  constructor(templateSelector) {
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
    buttonImage.setAttribute('src', `${this._image}`);
    this._element.querySelector('.image-popup_type_image').classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_opened');
  }

  _setEventListeners() {
    console.log('good');
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._element.addEventListener('click', () => {
      this._handleClosePopup();
    });
  } 
}

export class NewCard extends Card {
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

export const renderElements = (data, templateSelector) => {
  elements.innerHTML = '';
  
  data.forEach((item) => {
    const card =  new NewCard(item, templateSelector);

    const cardElement = card.generateCard();
    elements.append(cardElement);
  });
};





