let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');

let editPopUp = document.querySelector('.popup');
let addPopUp = document.querySelector('.add-popup');
let imagePopUp = document.querySelector('.image-popup');

let closeEditIcon = document.querySelector('.popup__close-icon');
let closeAddIcon = document.querySelector('.add-popup__close-icon')
let closeImageIcon = document.querySelector('.image-popup__close-icon')

let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let placeInput = document.querySelector('.add-popup__input_type_place');
let linkInput = document.querySelector('.add-popup__input_type_link');

let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup__form');
let addFormElement = document.querySelector('.add-popup__form');

let elements = document.querySelector('.elements');
let cardItems = document.querySelectorAll('.element');
let elementsImage = document.querySelectorAll('.element__image');
let elementsTitle = document.querySelectorAll('.element__title');

const likeButton = document.querySelectorAll('.element__like');
let addedCards = [];
const cardTemplate = document.querySelector('#elementTemplate').content;
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



function createStartingCards () {
  initialCards.forEach(function(el,index) {
    let newCard = cardTemplate.querySelector('.element').cloneNode(true);
    newCard.querySelector('.element__title').textContent = `${initialCards[index].name}`;
    newCard.querySelector('.element__image').setAttribute('src', `${initialCards[index].link}`);
    newCard.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
    newCard.querySelector('.element__trash').addEventListener('click', function () {
      el.remove()
    })
  })
    elements.append(newCard);
  })
}
createStartingCards();

function addNewCard () {
  let newCard = cardTemplate.querySelector('.element').cloneNode(true);

  newCard.querySelector('.element__title').textContent = `${placeInput.value}`;
  newCard.querySelector('.element__image').setAttribute('src', `${linkInput.value}`);
  newCard.querySelector('.element__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like_active');
});
  elements.prepend(newCard);
  newCard.querySelector('.element__trash').addEventListener('click', function(evt) {
    evt.target.parentElement.remove()
  })
  newCard.querySelector('.element__image').addEventListener('click', function () {
    imagePopUp.classList.add('popup_opened')
  })
  newCard.querySelector('.element__image').addEventListener('click', function() {
    imagePopUp.querySelector('.image-popup__image').setAttribute('src', `${newCard.querySelector('.element__image').getAttribute('src')}`)
    })
}

function openEditPopup () {
  editPopUp.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
function openAddPopup () {
  addPopUp.classList.add('popup_opened');
}

function closeEditPopup () {
  editPopUp.classList.remove('popup_opened');
}
function closeAddPopup () {
  addPopUp.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault(); 
    
  nameProfile.textContent = `${nameInput.value}`;
  jobProfile.textContent = `${jobInput.value}`;
   
  closeEditPopup();
}
function handleAddFormSubmit (evt) {
  evt.preventDefault(); 
  
  addNewCard();
  closeAddPopup();
}



formElement.addEventListener('submit', handleFormSubmit);
addFormElement.addEventListener('submit', handleAddFormSubmit);

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);

closeEditIcon.addEventListener('click', closeEditPopup);
closeAddIcon.addEventListener('click', closeAddPopup);
closeImageIcon.addEventListener('click', function () {
  imagePopUp.classList.remove('popup_opened')
})

const startingCardsArray = Array.from(elements.children);
startingCardsArray.forEach(function(el) {
  el.querySelector('.element__trash').addEventListener('click', function() {
    el.remove();
  })
})
startingCardsArray.forEach(function(el) {
  el.querySelector('.element__image').addEventListener('click', function() {
    imagePopUp.querySelector('.image-popup__image').setAttribute('src', `${el.querySelector('.element__image').getAttribute('src')}`)
    imagePopUp.classList.add('popup_opened');
  })
})



