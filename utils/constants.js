export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');

export const popupSelector = '.popup';
export const popupList = document.querySelectorAll(popupSelector);
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
export const popupImage = document.querySelector('.image-popup_type_image');

export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const placeInput = document.querySelector('.popup__input_type_place');
export const linkInput = document.querySelector('.popup__input_type_link');

export const nameProfile = document.querySelector('.profile__name');
export const jobProfile = document.querySelector('.profile__job');

export const formElement = document.querySelector('.popup__form_type_edit');
export const formAddElement = document.querySelector('.popup__form_type_add');

export const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
export const elements = document.querySelector('.elements');
export const buttonImage = document.querySelector('.image-popup__image');
export const imageTitle = document.querySelector('.image-popup__title');