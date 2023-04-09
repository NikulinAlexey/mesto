export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._templateSelector = templateSelector;
    this._data = data;
    this._place = this._data.name;
    this._link = this._data.link;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._likeCount = this._data.likes.length;
    this._handleLikeClick = handleLikeClick;
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
    this._likeCount = cardElement.querySelector('.element__like-count');

    return cardElement;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('element__like_active');
  }
  _deleteCard() {
    this._element.remove()
    this._element = null;
  }

  _setEventListeners () {
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick(this._data, this._buttonLike, this._likeCount);
    })
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteClick(this._data, this._element);
      
    })
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._place, this._link)
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._image.setAttribute('src', `${this._link}`);
    this._image.setAttribute('alt', `${this._place}`);
    this._element.querySelector('.element__title').textContent = `${this._place}`;
    
    if (this._data.owner._id !== '70f26519fef7b04423e7c847') {
      this._buttonDelete.remove()
      this._buttonDelete = null;
    }

    this._data.likes.forEach((item) => {
      if (item._id === '70f26519fef7b04423e7c847') {
        this._buttonLike.classList.add('element__like_active')
      }
    })
    
    this._likeCount.textContent = this._data.likes.length;

    return this._element;
  }
}
