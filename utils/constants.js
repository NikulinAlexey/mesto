export const initialCards = [
  {
    place: 'Петра, Иордания',
    link: 'https://putidorogi-nn.ru/images/stories/7_chudes_sveta/sovremennie_sem_chudes_sveta_2.jpg'
  },
  {
    place: 'Чичен-Ица, Мексика',
    link: 'https://putidorogi-nn.ru/images/stories/7_chudes_sveta/sovremennie_sem_chudes_sveta_3.jpg'
  },
  {
    place: 'Статуя Христа-Искупителя, Бразилия',
    link: 'https://putidorogi-nn.ru/images/stories/7_chudes_sveta/sovremennie_sem_chudes_sveta_4.jpg'
  },
  {
    place: 'Римский Колизей, Италия',
    link: 'https://putidorogi-nn.ru/images/stories/7_chudes_sveta/sovremennie_sem_chudes_sveta_5.jpg'
  },
  {
    place: 'Мачу-Пикчу, Перу',
    link: 'https://putidorogi-nn.ru/images/stories/7_chudes_sveta/sovremennie_sem_chudes_sveta_7.jpg'
  },
  {
    place: 'Тадж-Махал, Индия',
    link: 'https://putidorogi-nn.ru/images/stories/7_chudes_sveta/sovremennie_sem_chudes_sveta_8.jpg'
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

export const imagePopupImage = document.querySelector('.image-popup__image');
export const textPopupImage = document.querySelector('.image-popup__title');

export const cardImage = document.querySelector('.element__image');
export const cardTitle = document.querySelector('.element__title');

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
export const cardsContainerSelector = '.elements';