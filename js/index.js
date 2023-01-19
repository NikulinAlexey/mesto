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
const cardTemplate = document.querySelector('#elementTemplate').content;
const initialCards = [
    {
      name: '1-ый пляж',
      link: 'https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=1060&t=st=1674138337~exp=1674138937~hmac=e43fd03316b1bd15a13d24c5f4e6b79fe56998c9cd27758c27182ff19f0c9539'
    },
    {
      name: '2-ой пляж',
      link: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-and-sea-with-coconut-palm-tree-in-paradise-island_74190-2206.jpg?w=1060&t=st=1674138337~exp=1674138937~hmac=bf111d2b3e3cb254b1b7a288464208f30b705f52df40db583d3292349b0bb4fc'
    },
    {
      name: '3-ий пляж',
      link: 'https://img.freepik.com/free-photo/beautiful_1203-2633.jpg?w=1060&t=st=1674138338~exp=1674138938~hmac=03482862dd0e7677abd36c57fb3a20a9afb9489b39130cc7bd58b5bc6729e363'
    },
    {
      name: '4-ый пляж',
      link: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-and-sea-with-chair-on-blue-sky_74190-7488.jpg?w=1060&t=st=1674138337~exp=1674138937~hmac=b51597258b850490618267c62e08fb77260ad75fce09e866c06be8ec26255523'
    },
    {
      name: '5-ый пляж',
      link: 'https://img.freepik.com/free-photo/empty-sea-and-beach-background_1339-4265.jpg?w=1060&t=st=1674138341~exp=1674138941~hmac=34d112140b87f206bca55b9b5720e656153cf17d4e20c2d3405e86ae40512a0c'
    },
    {
      name: '6-ой пляж',
      link: 'https://img.freepik.com/free-photo/empty-sea-and-beach-background_74190-313.jpg?w=1060&t=st=1674138340~exp=1674138940~hmac=7e142c6411e6c1ba15f237b61d13cf0ea2b5b261a0489d5730641c5bc2ceaac4'
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


// Добавляю возможность удаления созданных вручную карточек
// Добавляю возможность просмотра созданных вручную карточек
const allCardsArray = Array.from(elements.children);
allCardsArray.forEach(function(el) {
  el.querySelector('.element__trash').addEventListener('click', function() {
    el.remove();
  })
  el.querySelector('.element__image').addEventListener('click', function() {
    imagePopUp.querySelector('.image-popup__image').setAttribute('src', `${el.querySelector('.element__image').getAttribute('src')}`)
    imagePopUp.classList.add('popup_opened');
  })
})



