import { Card } from "./Card.js"
import { initialCards, validationConfig } from "./data.js";
import { FormValidator } from "./FormValidator.js";

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

const buttonClosePopupEdit = document.querySelector('.popup__close-icon_type_edit');
const buttonClosePopupAdd = document.querySelector('.popup__close-icon_type_add');
const buttonClosePopupImage = document.querySelector('.image-popup__close-icon_type_image');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.image-popup_type_image');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const formElement = document.querySelector('.popup__form_type_edit');
const formAddElement = document.querySelector('.popup__form_type_add');

const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
const elements = document.querySelector('.elements');
const buttonImage = document.querySelector('.image-popup__image');
const imageTitle = document.querySelector('.image-popup__title');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  }, { once: true });
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleCardClick(name, link) {
  buttonImage.setAttribute('src', `${link}`)
  imageTitle.textContent = `${name}`;
  openPopup(popupImage);
}

function createNewCard(name, link) {
  const newCardData = {
    name: `${name}`,
    link: `${link}`
  }
  const card =  new Card(newCardData, '#elementTemplate', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

function closePopupByOutsideClick(evt, popup) {
  if (evt.target.classList.contains('popup')) {
    closePopup(popup);
  }
}

function submitEditProfileForm(evt) {
  evt.preventDefault();

  nameProfile.textContent = `${nameInput.value}`;
  jobProfile.textContent = `${jobInput.value}`;

  closePopup(popupEdit);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  
  elements.prepend(createNewCard(placeInput.value, linkInput.value));
  closePopup(popupAdd);
}

function renderElements (data, templateSelector) {
  data.forEach((item) => {
    const card =  new Card(item, templateSelector, handleCardClick);

    const cardElement = card.generateCard();
    elements.append(cardElement);
  });
};

formElement.addEventListener('submit', submitEditProfileForm);
formAddElement.addEventListener('submit', handleAddFormSubmit);

buttonEdit.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEdit);
  
});
buttonAdd.addEventListener('click', function () {
  formAddElement.reset()
  openPopup(popupAdd);
  
});

buttonClosePopupEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});
buttonClosePopupAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});
buttonClosePopupImage.addEventListener('click', function () {
  closePopup(popupImage);
});

popupEdit.addEventListener('click', function (evt) {
  closePopupByOutsideClick(evt, popupEdit);
});
popupAdd.addEventListener('click', function (evt) {
  closePopupByOutsideClick(evt, popupAdd);
});
popupImage.addEventListener('click', function (evt) {
  closePopupByOutsideClick(evt, popupImage);
});

formList.forEach( (formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);
  
  formValidator.enableValidation();
});

renderElements(initialCards, '#elementTemplate');


