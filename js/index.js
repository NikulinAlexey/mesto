const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const editPopUp = document.querySelector('.popup');
const addPopUp = document.querySelector('.add-popup');
const imagePopUp = document.querySelector('.image-popup');

const closeEditIcon = document.querySelector('.popup__close-icon');
const closeAddIcon = document.querySelector('.add-popup__close-icon')
const closeImageIcon = document.querySelector('.image-popup__close-icon')

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const placeInput = document.querySelector('.add-popup__input_type_place');
const linkInput = document.querySelector('.add-popup__input_type_link');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__form');
const addFormElement = document.querySelector('.add-popup__form');

const elements = document.querySelector('.elements');
const cardItems = document.querySelectorAll('.element');
const elementsImage = document.querySelectorAll('.element__image');
const elementsTitle = document.querySelectorAll('.element__title');

const likeButton = document.querySelectorAll('.element__like');
const cardTemplate = document.querySelector('#elementTemplate').content;


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
    imagePopUp.querySelector('.image-popup__image').setAttribute('src', `${newCard.querySelector('.element__image').getAttribute('src')}`);
    imagePopUp.querySelector('.image-popup__title').textContent = `${newCard.querySelector('.element__title').textContent}`;
    imagePopUp.classList.add('popup_opened')
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

const allCardsArray = Array.from(elements.children);
allCardsArray.forEach(function(el) {
  el.querySelector('.element__trash').addEventListener('click', function() {
    el.remove();
  })
  el.querySelector('.element__image').addEventListener('click', function() {
    imagePopUp.querySelector('.image-popup__image').setAttribute('src', `${el.querySelector('.element__image').getAttribute('src')}`);
    imagePopUp.querySelector('.image-popup__title').textContent = `${el.querySelector('.element__title').textContent}`;
    imagePopUp.classList.add('popup_opened');
  })
})



