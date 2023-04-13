export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse = (res) => {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);

}
  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d'
      }
    })
      .then(this._checkResponse)
  }


  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d'
      }
    })
      .then(this._checkResponse)
  }

  editProfileInfo(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${userData.name}`,
        about: `${userData.job}`
      })
    })
      .then(this._checkResponse)
  }

  addNewCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${cardData.place}`,
        link: `${cardData.link}`
      })
    })
      .then(this._checkResponse)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: [],
        _id: `${id}`,
      })
    })
      .then(this._checkResponse)
  }

  async addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: [],
        _id: `${id}`,
      })
    })
      .then(this._checkResponse)
  }

  removeLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: [],
        _id: `${id}`,
      })
    })
      .then(this._checkResponse)
  }

  changeAvatar(inputValue) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: `${inputValue}`,
      })
    })
      .then(this._checkResponse)
  }
}