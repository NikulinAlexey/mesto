export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d'
      }
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d'
      }
    })
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
    }); 
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
    }); 
  }

  deleteCard(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: [],
        _id: `${data._id}`,
      })
    });
  } 



  addLike(data) {
    
    return fetch(`${this._baseUrl}/cards/${data._id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: [],
        _id: `${data._id}`,
      })
    }); 
  }

  removeLike(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: [],
        _id: `${data._id}`,
      })
    }); 
  }
  
  changeAvatar(input) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: `${input.value}`,
      })
    }); 
  }
}