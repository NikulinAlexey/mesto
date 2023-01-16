// Реализация возможности открытия-закрытия pop-up
let editButton = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.popup');
let closeIcon = document.querySelector('.popup__close-icon');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');
let formElement = document.querySelector('.popup__form');
let likeButton = document.querySelector('.element__like');

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

likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active')
});
formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', openPopup);
closeIcon.addEventListener('click', closePopup);