export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    this._image = cardElement.querySelector('.element__image');
    this._buttonLike = cardElement.querySelector('.element__like');
    this._buttonDelete = cardElement.querySelector('.element__trash');

    return cardElement;
  }

  _toggleLike () {
    this._buttonLike.classList.toggle('element__like_active');
  }
  _deleteCard () {
    this._element.remove();
  }

  _setEventListeners () {
    this._buttonLike.addEventListener('click', () => {
      this._toggleLike()
    })
    this._buttonDelete.addEventListener('click', () => {
      this._deleteCard()
    })
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._image.setAttribute('src', `${this._link}`);
    this._image.setAttribute('alt', `${this.name}`);
    this._element.querySelector('.element__title').textContent = `${this._name}`;

    return this._element;
  }
}
