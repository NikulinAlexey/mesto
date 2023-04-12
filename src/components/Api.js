export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  async getProfileInfo() {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d'
      }
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  }


  async getInitialCards() {
    const res = await fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d'
      }
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  }

  async editProfileInfo(userData) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${userData.name}`,
        about: `${userData.job}`
      })
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  } 

  async addNewCard(cardData) {
    const res = await fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${cardData.place}`,
        link: `${cardData.link}`
      })
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  }

  async deleteCard(id) {
    const res = await fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: [],
        _id: `${id}`,
      })
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  } 

  async addLike(id) {
    const res = await fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: [],
        _id: `${id}`,
      })
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  }

  async removeLike(id) {
    const res = await fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: [],
        _id: `${id}`,
      })
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  }
  
  async changeAvatar(inputValue) {
    const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: `${inputValue}`,
      })
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  }
}