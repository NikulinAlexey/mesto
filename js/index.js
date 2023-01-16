let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let popUp = document.querySelector('.popup');
let closeIcon = document.querySelector('.popup__close-icon');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup__form');
let element = document.querySelector('.element');
let elementsImage = document.querySelectorAll('.element__image');
let elementsTitle = document.querySelectorAll('.element__title');
const likeButton = element.querySelector('.element__like');
const cards = document.querySelectorAll('.element');

const initialCards = [
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

  startingCards();

function openPopup () {
    popUp.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function closePopup () {
    popUp.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    
    nameProfile.textContent = `${nameInput.value}`;
    jobProfile.textContent = `${jobInput.value}`;
   
    closePopup();
}

let elementsArray = [];

function startingCards () {
    for (let i = 0; i < initialCards.length; i++) {
      elementsTitle[i].textContent = `${initialCards[i].name}`;
      elementsImage[i].setAttribute('src', `${initialCards[i].link}`);
    }
}

likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active')
});
formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', openPopup);
closeIcon.addEventListener('click', closePopup);