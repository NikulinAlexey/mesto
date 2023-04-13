import Card from "./components/Card.js"
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js"
import UserInfo from "./components/UserInfo.js"; 
import Api from "./components/Api.js";
import PopupWithConfirm from "./components/PopupWithConfirm.js";
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

  imagePopupImage,
  textPopupImage,

  nameInput,
  jobInput,
  avatarInput,
  avatarImage,

  cardsContainerSelector,
  elements,
  formEditElement,
  formAddElement,
  formAvatarElement,
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

// переменные, которые я получаю после запроса Promise.all
let userId;
let cards;

// создание дочерних классов
const popupWithImage = new PopupWithImage('.image-popup_type_image', imagePopupImage, textPopupImage);
const popupWithFormEdit = new PopupWithForm('.popup_type_edit', submitEditProfileForm, validationConfig);
const popupWithFormAdd = new PopupWithForm('.popup_type_add', handleAddFormSubmit, validationConfig);
const popupWithFormAvatar = new PopupWithForm('.popup_type_avatar', handleAvatarFormSubmit, validationConfig);
const popupWithConfirm = new PopupWithConfirm('.popup_type_delete', handleSubmitDelete);
const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' }, nameInput, jobInput);
const api = new Api({ baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62', headers: { authorization: '380de586-8df7-40d5-9ea1-f2891fd44b6d', 'Content-Type': 'application/json' } })
const section = new Section({
  data: [],
  renderer: (item) => {
    section.setItem(createCard(item, userId))
  }
}, cardsContainerSelector)

// класс создания карточки
function createCard(item, id) {
  const card = new Card(item, '#elementTemplate', handleCardClick, handleDeleteClick, addLike, removeLike, id);
  const cardElement = card.generateCard();

  return cardElement;
}

// запрос на данные пользователя и карточки
Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([userData, cardsList]) => {
    userInfo.setUserInfo(userData)
    userId = userData._id
    cards = cardsList

    section.renderItems(cardsList)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {

  })

// добавляю лайк (отправляю его на сервер)
function addLike(cardId) {
  api.addLike(cardId)
    .then((res) => {
      elements.innerHTML = ''
      
      // ищу индекс старого обьекта, чтобы поменять на ноывй 'res'
      function findOldCardIndex() {
        for (let i = 0; i <= cards.length; i++) {
          if (cards[i]._id == cardId) {
            return i
          }
        }
      }

      //заменяю старый обьект на новый
      cards.splice( findOldCardIndex(), 1, res);

      section.renderItems(cards)
    })
    .catch((err) => {
      console.log('ошибка при лайке')
    })
    .finally(() => {
      
    })
}
// удаляю лайк (отправляю удаление лайка на сервер)
function removeLike(cardId) {
  api.removeLike(cardId)
    .then((res) => {
      elements.innerHTML = ''

      // ищу индекс старого обьекта, чтобы поменять на ноывй 'res'
      function findOldCardIndex() {
        for (let i = 0; i <= cards.length; i++) {
          if (cards[i]._id == cardId) {
            return i
          }
        }
      }

      //заменяю старый обьект на новый
      cards.splice(findOldCardIndex(), 1, res);

      section.renderItems(cards)
    })
    .catch((err) => {
      console.log('ошибка при дизлайке')
    })
    .finally(() => {
      
    })
}

// --- функция замены текста при загрузке
function renderLoading(isLoading, button) {
  
  if (isLoading) {
    button.textContent = 'Сохранение...';
  }
  else {
    button.textContent = 'Успешно';
    setTimeout(() => {
      button.textContent = 'Сохранить';
    }, 500)
  }
}
// --- функция замены текста кнопки во время удаления карточки
function renderLoadingDelete(isLoading, button) {
  if (isLoading) {
    button.textContent = 'Удаление...';
  }
  else {
    button.textContent = 'Успешно';
    setTimeout(() => {
      button.textContent = 'Да';
    }, 500)
  }
}

// колбек функция удаления карточки по нажатию на кнопку попапа(удаления карточек)
function handleSubmitDelete(cardId) {
  renderLoadingDelete(true, buttonSubmitDelete)

  // удаляю карточку
  api.deleteCard(cardId)
    .then(() => {
      elements.innerHTML = '';

      const newCards = cards.filter((card) => card._id !== cardId);
      cards = newCards

      section.renderItems(cards)
    })
    .then(() => {
      popupWithConfirm.close();
    })
    .catch((err) => {
      console.log(`Ошибка удаления карточки ${err}`)
    })
    .finally(() => {
      renderLoadingDelete(false, buttonSubmitDelete)
    })
}
// колбек функция открывания попапа с картинкой
function handleCardClick(cardElementTitle, cardElementImage) {
  popupWithImage.open(cardElementTitle, cardElementImage);
}
// колбек функция редактирования данных профиля
function submitEditProfileForm(valuesData) {
  renderLoading(true, buttonSubmitEdit)

  api.editProfileInfo(valuesData)
    .then(res => {
      userInfo.setUserInfo(res)
    })
    .then(() => {
      popupWithFormEdit.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      renderLoading(false, buttonSubmitEdit)
    })
}
// колбек функция добавления новой карточки через форму попапа
function handleAddFormSubmit(inputValues) {
  renderLoading(true, buttonSubmitAdd)
  
  api.addNewCard(inputValues)
    .then((res) => {
      elements.innerHTML = '';
      cards.unshift(res)
      section.renderItems(cards)
    })
    .then(() => {
      popupWithFormAdd.close()
    })
    .catch((err) => {
      console.log(`извините, ошибочка вышла ${err}`)
    })
    .finally(() => {
      renderLoading(false, buttonSubmitAdd)
    })
}
// колбек функция обновления аватарки
function handleAvatarFormSubmit(valuesData) {
  renderLoading(true, buttonSubmitAvatar)

  api.changeAvatar(valuesData.avatar)
    .then((res) => {
      userInfo.setUserInfo(res)
    })
    .then(() => {
      renderLoading(false, buttonSubmitAvatar)
    })
    .then(() => {
      popupWithFormAvatar.close()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      
    })
}

// обхожу все формы, отключаю валидацию
formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);

  formValidator.enableValidation();
});

// слушатели кнопок, открывающие popup-ы
buttonEdit.addEventListener('click', () => {
  const userDataInputs = userInfo.getUserInfo();
  formEditElement.reset()

  nameInput.value = userDataInputs.name;
  jobInput.value = userDataInputs.job;

  popupWithFormEdit.open();
});
buttonAdd.addEventListener('click', () => {
  formAddElement.reset()

  popupWithFormAdd.open();
});
buttonAvatar.addEventListener('click', () => {
  formAvatarElement.reset()
  avatarInput.value = avatarImage.src;
  
  popupWithFormAvatar.open()
})
// колбек функция откртыия попапа удаления карточки
function handleDeleteClick(cardId) {
  popupWithConfirm.open(cardId);
}

// вызываю методы классов
popupWithFormEdit.setEventListeners();
popupWithFormAvatar.setEventListeners()
popupWithFormAdd.setEventListeners();
popupWithImage.setEventListeners();
popupWithConfirm.setEventListeners();


