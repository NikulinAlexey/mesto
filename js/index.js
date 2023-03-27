import { Card } from "./Card.js"
import { initialCards, validationConfig } from "./data.js";
import { FormValidator } from "./FormValidator.js";

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

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

const popups = document.querySelectorAll('.popup')

function closeByEscape (evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup__opened');
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function handleCardClick(name, link) {
  buttonImage.setAttribute('src', `${link}`)
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
  evt.preventDefault();

  nameProfile.textContent = `${nameInput.value}`;
  jobProfile.textContent = `${jobInput.value}`;

  closePopup(popupEdit);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  
  elements.prepend(createCard(createNewCardInfo(placeInput.value, linkInput.value)));
  closePopup(popupAdd);
}


function renderElements (data) {
  elements.innerHTML = '';

  data.forEach((item) => {
    elements.append(createCard(item));
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

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-icon')) {
        closePopup(popup)
      }
  })
})

formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);
  
  formValidator.enableValidation();
});

renderElements(initialCards);


