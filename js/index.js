const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

const buttonClosePopupEdit = document.querySelector('.popup__close-icon_type_edit');
const buttonClosePopupAdd = document.querySelector('.popup__close-icon_type_add');
const buttonClosePopupImage = document.querySelector('.popup__close-icon_type_image');

const buttonLike = document.querySelector('.element__like');
const buttonImage = document.querySelector('.image-popup__image');

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

const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#elementTemplate').content;


function createNewCard (name, link) {
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  
  newCard.querySelector('.element__title').textContent = `${name}`;
  newCard.querySelector('.element__image').setAttribute('src', `${link}`);
  newCard.querySelector('.element__image').setAttribute('alt', `${name}`);

  newCard.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  newCard.querySelector('.element__trash').addEventListener('click', function(evt) {
    evt.target.parentElement.remove()
  })
  newCard.querySelector('.element__image').addEventListener('click', function () {
    buttonImage.setAttribute('src', `${newCard.querySelector('.element__image').getAttribute('src')}`);
    popupImage.querySelector('.image-popup__title').textContent = `${newCard.querySelector('.element__title').textContent}`;
    openPopup(popupImage)
  })
  
  return newCard;
}
function createStartingCards (array) {
  array.forEach(function (el) {
    elements.append(createNewCard(el.name, el.link));
  });
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
}
function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault(); 
    
  nameProfile.textContent = `${nameInput.value}`;
  jobProfile.textContent = `${jobInput.value}`;
   
  closePopup(popupEdit);
}
function handleAddFormSubmit (evt) {
  evt.preventDefault(); 
  
  elements.prepend(createNewCard(placeInput.value, linkInput.value));
  closePopup(popupAdd);
}


formElement.addEventListener('submit', handleFormSubmit);
formAddElement.addEventListener('submit', handleAddFormSubmit);

buttonEdit.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEdit);
});
buttonAdd.addEventListener('click', function () {
  placeInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
});

buttonClosePopupEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});
buttonClosePopupAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});
buttonClosePopupImage.addEventListener('click',  function () {
  closePopup(popupImage);
});


createStartingCards(initialCards);