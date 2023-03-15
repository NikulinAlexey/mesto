const elements = document.querySelector('.elements');
const buttonImage = document.querySelector('.image-popup__image');
const popupImage = document.querySelector('.image-popup_type_image');
const buttonClosePopupImage = document.querySelector('.image-popup__close-icon_type_image');


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
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        popupImage.classList.remove('popup_opened');
      }
    }, { once: true });
    buttonImage.setAttribute('src', `${this._link}`);
    document.querySelector('.image-popup__title').textContent = `${this._name}`;
    popupImage.classList.add('popup_opened');
  }

  _handleClosePopup() {
    document.querySelector('.image-popup__title').textContent = '';
    this._element.classList.remove('popup_opened');
  }

  _setEventListeners() {
    const buttonLike = this._element.querySelector('.element__like');
    const buttonDelete = this._element.querySelector('.element__trash');

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    buttonClosePopupImage.addEventListener('click', () => {
      this._handleClosePopup();
    });

    buttonLike.addEventListener('click', () => {
      buttonLike.classList.toggle('element__like_active');
    })

    buttonDelete.addEventListener('click', () => {
      this._element.remove();
    })
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
    super._handleOpenPopup();
  }

  _handleClosePopup() {
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





