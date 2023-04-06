import Card from "./components/Card.js"
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js"
import UserInfo from "./components/UserInfo.js";

// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
const avtar = new URL('./images/avatar.jpg', import.meta.url);
const logo = new URL('./images/header__logo.svg', import.meta.url);

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

  formList,
  formAddElement,

  imagePopupImage,
  textPopupImage,

  nameInput,
  jobInput,

  cardsContainerSelector,
} from "./utils/constants.js";

const popupWithImage = new PopupWithImage('.image-popup_type_image', imagePopupImage, textPopupImage);
const popupWithFormEdit = new PopupWithForm('.popup_type_edit', submitEditProfileForm, validationConfig);
const popupWithFormAdd = new PopupWithForm('.popup_type_add', handleAddFormSubmit, validationConfig);
const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' }, nameInput, jobInput);

const startingCards = new Section({
  data: initialCards,
  renderer: (item) => {
    startingCards.setItem(createCard(item));
  }
}, cardsContainerSelector);

function createCard(item) {
  const card = new Card(item, '#elementTemplate', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardClick(cardElementTitle, cardElementImage) {
  popupWithImage.open(cardElementTitle, cardElementImage);
}

function submitEditProfileForm() {
  userInfo.setUserInfo();
  popupWithFormEdit.close();
}
function handleAddFormSubmit(inputValues) {
  const newCard = new Section({
    data: [
      inputValues
    ],
    renderer: (item) => {
      newCard.setItem(createCard(item));
    }
  }, cardsContainerSelector);
  
  newCard.renderItems()
  popupWithFormAdd.setEventListeners()
  popupWithFormAdd.close();
}

formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);
  formValidator.enableValidation();
});
buttonEdit.addEventListener('click', () => {
  popupWithFormEdit.open();
});
buttonAdd.addEventListener('click', () => {
  formAddElement.reset()
  popupWithFormAdd.open();
});

popupWithImage.setEventListeners();
popupWithFormAdd.setEventListeners();
popupWithFormEdit.setEventListeners();
startingCards.renderItems()