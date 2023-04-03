import { Card } from "../components/Card.js"
import Popup from "../components/Popup.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  validationConfig,
  popupList,
  popupSelector,
  buttonAdd,
  buttonEdit,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  popupAdd,
  popupEdit,
  formElement,
  formAddElement,
  formList,
  elements
} from "../utils/constants.js";

function handleCardClick(name, link) {
  buttonImage.setAttribute('src', `${link}`);
  buttonImage.setAttribute('alt', `${name}`);
  imageTitle.textContent = `${name}`;
  openPopup(popupImage);
}

function createNewCardInfo(name, link) {
  const newCardData = {
    name: `${name}`,
    link: `${link}`
  }
  return newCardData;
}

function createCard(item) {
  const card = new Card(item, '#elementTemplate', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

function submitEditProfileForm(evt) {
  const popupEdit = new PopupWithForm('.popup_type_edit', );
  evt.preventDefault();

  nameProfile.textContent = `${nameInput.value}`;
  jobProfile.textContent = `${jobInput.value}`;

  popupEdit.closePopup();
}

function handleAddFormSubmit(evt) {
  const popupAdd = new Popup('.popup_type_add');
  evt.preventDefault();

  
  elements.prepend(createCard(createNewCardInfo(placeInput.value, linkInput.value)));
  popupAdd.closePopup();
}


function renderElements (data) {
  elements.innerHTML = '';

  data.forEach((item) => {
    elements.append(createCard(item));
  });
};

formElement.addEventListener('submit', submitEditProfileForm);
formAddElement.addEventListener('submit', handleAddFormSubmit);

buttonEdit.addEventListener('click', function (evt) {
  const popup = new PopupWithForm('.popup_type_edit',);
  
  popup.openPopup();
});
buttonAdd.addEventListener('click', function () {
  formAddElement.reset()
  const popup = new Popup('.popup_type_add');

  popup.openPopup();
});

popupList.forEach(() => {
  const popup = new Popup(popupSelector);
  
  popup.setEventListeners()
})
formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);
  
  formValidator.enableValidation();
});

renderElements(initialCards);


