import Card from "../components/Card.js"
import Popup from "../components/Popup.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
/*
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
*/
import {
  initialCards,
  validationConfig,
  buttonAdd,
  buttonEdit,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  formElement,
  formAddElement,
  formList,
  elements,
  placeInput,
  linkInput,
  buttonImage,
  imageTitle,
  popupList,
} from "../utils/constants.js";

function handleCardClick(name, link) {
  const popupWithImage = new PopupWithImage('.image-popup_type_image');
  buttonImage.setAttribute('src', `${link}`);
  buttonImage.setAttribute('alt', `${name}`);
  imageTitle.textContent = `${name}`;
  
  popupWithImage.setEventListeners();
  popupWithImage.open();
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
  const popupEdit = new PopupWithForm('.popup_type_edit');
  evt.preventDefault();

  nameProfile.textContent = `${nameInput.value}`;
  jobProfile.textContent = `${jobInput.value}`;

  popupEdit.close();
}
function handleAddFormSubmit(evt) {
  const popupWithForm = new PopupWithForm('.popup_type_add');
  evt.preventDefault();

  
  elements.prepend(createCard(createNewCardInfo(placeInput.value, linkInput.value)));
  popupWithForm.close();
}
function renderElements (data) {
  elements.innerHTML = '';

  data.forEach((item) => {
    elements.append(createCard(item));
  });
};

formElement.addEventListener('submit', submitEditProfileForm);
formAddElement.addEventListener('submit', handleAddFormSubmit);

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


formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);
  
  formValidator.enableValidation();
});

renderElements(initialCards);


