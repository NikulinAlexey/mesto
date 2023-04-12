export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick, addLike, removeLike, id) {
    this._templateSelector = templateSelector;

    this._data = data; // это обект с данными о карточке

    this._place = this._data.name; // текст карточки(место) 
    this._link = this._data.link; // ссылка на картинку карточки

    this._addLike = addLike;  // колбек лайка карточки
    this._removeLike = removeLike // колбек удаления лайка карточки
    this._handleCardClick = handleCardClick; // колбек открытия попап с картинкой
    this._handleDeleteClick = handleDeleteClick;  // колбек открытия попап с подтверждением удаления
    
    this._userId = id; // это id  карточки
    this._cardOwnerId = this._data.owner._id
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
    this._cardId = this._data._id

    return cardElement;
  }

  _makeButtonActive() {
    this._buttonLike.classList.add('element__like_active');
  }

  _makeButtonInactive() {
    this._buttonLike.classList.remove('element__like_active');
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('element__like_active')
  }
  _removeCard() {
    this._element.remove()
    this._element = null
  }
  _setEventListeners () {
    this._buttonLike.addEventListener('click', () => { 
      const likeButtonState = this._data.likes.some(item => {
        if (item._id === this._userId) {
          return true;
        }
        else if (item._id !== this._userId){
          return false;
        }
      })

      // если на карточке нет лайков, то добавить мой
      if (this._data.likes.length === 0) {
        this._addLike(this._cardId)
      } //если есть мой лайк, то удаляю свой лайк
      else if (likeButtonState) {
        this._removeLike(this._cardId)
      } //если нет моего лайка, то добавляю
      else {
        this._addLike(this._cardId)
      }
    })
  
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
    })

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._place, this._link)
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    // вставляю данные в карточку
    this._image.setAttribute('src', `${this._link}`);
    this._image.setAttribute('alt', `${this._place}`);
    this._element.querySelector('.element__title').textContent = `${this._place}`;
    
    // рисую иконку удаления карточки только на своих карточках
    if (this._cardOwnerId !== this._userId) {
      this._buttonDelete.remove()
      this._buttonDelete = null;
    }
    // окрашиваю лайкнутые мною карточки в активный цвет
    this._data.likes.forEach((item) => { 
      if (item._id === this._userId) {
        this._makeButtonActive()
      }
      else {
        this._makeButtonInactive()
      }
    })
    // устанавливаю кол-во лайков каждой карточке
    this._likeCount.textContent = this._data.likes.length;
    
    return this._element;
  }
}

