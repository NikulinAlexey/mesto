let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');

let editPopUp = document.querySelector('.popup');
let addPopUp = document.querySelector('.add-popup');

let closeEditIcon = document.querySelector('.popup__close-icon');
let closeAddIcon = document.querySelector('.add-popup__close-icon')

let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let placeInput = document.querySelector('.popup__input_type_place');
let linkInput = document.querySelector('.popup__input_type_link');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup__form');
let addFormElement = document.querySelector('.add-popup__form');
let element = document.querySelector('.element');
let elements = document.querySelector('.elements');
let elementsImage = document.querySelectorAll('.element__image');
let elementsTitle = document.querySelectorAll('.element__title');
const likeButton = document.querySelector('.element__like');
const body = document.querySelector('.body');
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


function startingCards () {
    for (let i = 0; i < initialCards.length; i++) {
      elementsTitle[i].textContent = `${initialCards[i].name}`;
      elementsImage[i].setAttribute('src', `${initialCards[i].link}`);
    }
}
startingCards();

function openAddPopup () {
    addPopUp.classList.add('popup_opened');
}

function closeAddPopup () {
  addPopUp.classList.remove('popup_opened');
}

function handleAddFormSubmit (evt) {
  evt.preventDefault(); 
  
  //вызвать функцию создания новой карточки с параметрами input place и link
  nameProfile.textContent = `${placeInput.value}`;
  jobProfile.textContent = `${linkInput.value}`;
  //
  closeAddPopup();
}


function openEditPopup () {
    editPopUp.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

function closeEditPopup () {
    editPopUp.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    
    nameProfile.textContent = `${nameInput.value}`;
    jobProfile.textContent = `${jobInput.value}`;
   
    closeEditPopup();
}


formElement.addEventListener('submit', handleFormSubmit);
addFormElement.addEventListener('submit', handleAddFormSubmit);
//
addButton.addEventListener('click', openAddPopup);
closeAddIcon.addEventListener('click', closeAddPopup);
//
editButton.addEventListener('click', openEditPopup);
closeEditIcon.addEventListener('click', closeEditPopup);