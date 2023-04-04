import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js"
import UserInfo from "../components/UserInfo.js";

// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
const avtar = new URL('../images/avatar.jpg', import.meta.url);
const logo = new URL('../images/header__logo.svg', import.meta.url);

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'avtar', image: avtar },
  { name: 'logo', image: logo },
]; 

import './index.css'; // добавьте импорт главного файла стилей 

import {
  initialCards,
  validationConfig,

  buttonAdd,
  buttonEdit,

  nameInput,
  jobInput,
  placeInput,
  linkInput,

  nameProfile,
  jobProfile,

  formElement,
  formAddElement,
  formList,

  cardsContainerSelector,
} from "../utils/constants.js";

function handleCardClick(evt) {
  const popupWithImage = new PopupWithImage('.image-popup_type_image');
  
  popupWithImage.setEventListeners();
  popupWithImage.open(evt);
}
function formSubmit(evt) {
  evt.preventDefault()
}

const startingCards = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#elementTemplate', handleCardClick);
    const cardElement = card.generateCard();
    startingCards.setItem(cardElement);
  }
}, cardsContainerSelector);

function submitEditProfileForm() {
  const popupEdit = new PopupWithForm('.popup_type_edit', formSubmit);
  const userInfo = new UserInfo({nameSelector: '.profile__name', jobSelector: '.profile__job'})

  userInfo.setUserInfo()
  popupEdit.setEventListeners()
  popupEdit.close();
}
function handleAddFormSubmit() {
  const popupWithForm = new PopupWithForm('.popup_type_add', formSubmit);
  const newCard = new Section({
    data: [
      {
        name: `${placeInput.value}`,
        link: `${linkInput.value}`
      }
    ],
    renderer: (item) => {
      const card = new Card(item, '#elementTemplate', handleCardClick);
      const cardElement = card.generateCard();
      newCard.setItem(cardElement);
    }
  }, cardsContainerSelector);

  newCard.renderItems()
  popupWithForm.setEventListeners()
  popupWithForm.close();
}

formElement.addEventListener('submit', submitEditProfileForm);
formAddElement.addEventListener('submit', handleAddFormSubmit);
formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);

  formValidator.enableValidation();
});

buttonEdit.addEventListener('click', () => {
  const firstPopupWithForm = new PopupWithForm('.popup_type_edit');

  firstPopupWithForm.setEventListeners();
  firstPopupWithForm.open();
});
buttonAdd.addEventListener('click', () => {
  formAddElement.reset()
  const secondPopupWithForm = new PopupWithForm('.popup_type_add');

  secondPopupWithForm.setEventListeners();
  secondPopupWithForm.open();
});

startingCards.renderItems()