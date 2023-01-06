// Реализация возможности открытия-закрытия pop-up
let editButton = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.pop-up');
let closeIcon = document.querySelector('.pop-up__close-icon');
let saveButton = document.querySelector('.pop-up__submit');

function popUpOn () {
    popUp.style = 'display: block';
}

function popUpOff () {
    popUp.style = 'display: none';
}
editButton.addEventListener('click', popUpOn);
closeIcon.addEventListener('click', popUpOff);
saveButton.addEventListener('click', popUpOff);


/*
let popUpName = document.querySelector('.pop-up__name');
let popUpJob = document.querySelector('.pop-up__job');


 let popUpNamePlaceholder = popUpName.getAttribute('placeholder');
 let popUpJobPlaceholder = popUpName.getAttribute('placeholder');
 console.log(popUpNamePlaceholder);
 console.log(popUpJobPlaceholder);
 */

 // Находим форму в DOM
let formElement = document.querySelector('.pop-up__container');
// Находим поля формы в DOM
let nameInput = document.querySelector('.pop-up__name');
let jobInput = document.querySelector('.pop-up__job');

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 

console.log(nameInput.getAttribute('placeholder'))
console.log(jobInput.getAttribute('placeholder'))