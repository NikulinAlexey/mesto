import Card from "./components/Card.js"
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js"
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";

import {
  validationConfig,

  buttonAdd,
  buttonEdit,
  buttonAvatar,
  buttonSubmitDelete,
  buttonSubmitAvatar,
  buttonSubmitEdit,
  buttonSubmitAdd,

  formList,
  formAddElement,
  formEditElement,
  formAvatarElement,
  formDeleteElement,

  imagePopupImage,
  textPopupImage,

  nameProfile,
  jobProfile,

  nameInput,
  jobInput,
  avatarInput,
  avatarImage,

  cardsContainerSelector,
  placeInput,
  linkInput,
  elements,
} from "./utils/constants.js";

// импорт картинок Webpack
const avtar = new URL('./images/avatar.jpg', import.meta.url);
const logo = new URL('./images/header__logo.svg', import.meta.url);
const images = [
  { name: 'avtar', image: avtar },
  { name: 'logo', image: logo },
];
// импорт главного файла стилей 
import './index.css';

// создание дочерних классов
const popupWithImage = new PopupWithImage('.image-popup_type_image', imagePopupImage, textPopupImage);
const popupWithFormEdit = new PopupWithForm('.popup_type_edit', submitEditProfileForm, validationConfig);
const popupWithFormAdd = new PopupWithForm('.popup_type_add', handleAddFormSubmit, validationConfig);
const popupWithFormAvatar = new PopupWithForm('.popup_type_avatar', handleAvatarFormSubmit, validationConfig);
const popupWithFormDelete = new PopupWithForm('.popup_type_delete', handleDeleteFormSubmit, validationConfig);
const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' }, nameInput, jobInput);
const api = new Api({ baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62', headers: { authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d', 'Content-Type': 'application/json' } })


api.getProfileInfo()
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((res) => {
    // вставляю данные в разметку
    jobProfile.textContent = res.about;
    nameProfile.textContent = res.name;
    avatarImage.setAttribute('src', `${res.avatar}`);
  })

// функция создания стартовых карточек  
function makeStartingCards(res) {
  const startingCards = new Section({
    data: res,
    renderer: (item) => {
      startingCards.setItem(createCard(item));
    }
  }, cardsContainerSelector);
  return startingCards;
}
// функция создания карточки
function createCard(item) {
  const card = new Card(item, '#elementTemplate', handleCardClick, handleDeleteClick, handleLikeClick);
  const cardElement = card.generateCard(item.likes.length);

  return cardElement;
}

// получаю с сервера данные карточек  и отрисовываю
api.getInitialCards()
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((res) => {
    // отрисовываю карточки
    makeStartingCards(res).renderItems();
  })

// --- замена текста во время загрузки userInfo
function renderLoadingInfo(isLoading) {
  if (isLoading) {
    buttonSubmitEdit.textContent = 'Сохранение...';
  }
  else {
    buttonSubmitEdit.textContent = 'Создать';
  }
}
// --- замена текста во время создания карточки
function renderLoadingCard(isLoading) {
  if (isLoading) {
    buttonSubmitAdd.textContent = 'Сохранение...';
  }
  else {
    buttonSubmitAdd.textContent = 'Сохранить';
  }
}
// --- замена текста во время загрузки нового аватара
function renderLoadingAvatar(isLoading) {
  if (isLoading) {
    buttonSubmitAvatar.textContent = 'Сохранение...';
  }
  else {
    buttonSubmitAvatar.textContent = 'Сохранить';
  }
}

// колбек функция удаления карточки по нажатию на кнопку попапа(удаления карточек)
function handleDeleteClick(data, cardElement) {
  popupWithFormDelete.open();
  formDeleteElement.addEventListener('submit', () => {
    //удаляю карточку
    api.deleteCard(data)
      .then(res => {
        if (res.ok) {

          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .finally(() => {
        cardElement.remove();
        popupWithFormDelete.close();
      })
  })
}
// колбек функция открывания попапа с картинкой
function handleCardClick(cardElementTitle, cardElementImage) {
  popupWithImage.open(cardElementTitle, cardElementImage);
}
// колбек функция лайков
function handleLikeClick(evt, data, buttonLike, likeCount) {
  console.log(data)

  if (data.likes.length === 0) {
    // ставлю лайк
    api.addLike(data)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(() => {
        evt.target.classList.add('element__like_active');
        likeCount.textContent = data.likes.length + 1;
        console.log('Лайк поставлен при нуле')
      })
  }
  
  let a = data.likes.some(item => {
    if (item._id == '70f26519fef7b04423e7c847') {
      return true;
    }
    else {
      return false;
    }
  })

  if (a) {
    // убираю лайк
    api.removeLike(data)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(() => {
        evt.target.classList.remove('element__like_active');
        likeCount.textContent = data.likes.length - 1;
        console.log('Лайк убрали')
      })
      .then(() => {
        api.getInitialCards()
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then((res) => {
            // отрисовываю карточки
            makeStartingCards(res).renderItems();
          })
      })
  }
  else {
    // ставлю лайк
    api.addLike(data)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(() => {
        evt.target.classList.add('element__like_active');
        likeCount.textContent = data.likes.length + 1;
        console.log('Лайк поставлен')
      })
      .then(() => {
        api.getInitialCards()
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then((res) => {
            // отрисовываю карточки
            makeStartingCards(res).renderItems();
          })
      })
  }
}
// колбек функция редактирования данных профиля
function submitEditProfileForm() {
  userInfo.setUserInfo()
  api.editProfileInfo(userInfo.getUserInfo())

  popupWithFormEdit.close();
}
// колбек функция добавления новой карточки через форму попапа
function handleAddFormSubmit(inputValues) {
  renderLoadingCard(true)
  const data = { place: placeInput.value, link: linkInput.value };


  api.addNewCard(data)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
    .then(() => {
      elements.innerHTML = '';
    })
    .then(() => {
      api.getInitialCards()
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
          // отрисовываю карточки
          makeStartingCards(res).renderItems();
        })
    })
    .then(() => {
      renderLoadingCard(false)
    })
    .finally(() => {
      popupWithFormAdd.close()
    })
}
// колбек функция обновления аватарки
function handleAvatarFormSubmit(inputValue) {
  renderLoadingAvatar(true)

  api.changeAvatar(avatarInput.value)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(() => {
      api.getProfileInfo()
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
          // вставляю данные в разметку
          avatarImage.setAttribute('src', `${res.avatar}`);
        })
    })
    .finally(() => {
      renderLoadingAvatar(false)
      popupWithFormAvatar.close()
    })
}
// колбек функция удаления карточки
function handleDeleteFormSubmit() {

  popupWithFormDelete.open();
}

// обхожу все формы, чтобы у каждой отключить валидацию
formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);

  formValidator.enableValidation();
});

// слушатели кнопок, открывающие popup-ы
buttonEdit.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  formEditElement.reset();

  nameInput.value = userData.name;
  jobInput.value = userData.job;

  popupWithFormEdit.open();
});
buttonAdd.addEventListener('click', () => {
  formAddElement.reset();
  popupWithFormAdd.setEventListeners();
  popupWithFormAdd.open();
});
buttonAvatar.addEventListener('click', () => {
  formAvatarElement.reset()
  avatarInput.value = avatarImage.src;
  popupWithFormAvatar.setEventListeners();
  popupWithFormAvatar.open()
})

// вызываю методы классов
popupWithImage.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithFormDelete.setEventListeners();


