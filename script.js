
let editButton = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.pop-up');
let closeIcon = document.querySelector('.pop-up__close-icon');

function popUpOn () {
    popUp.style = 'display: block';
}

function popUpOff () {
    popUp.style = 'display: none';
}
editButton.addEventListener('click', popUpOn);
closeIcon.addEventListener('click', popUpOff)

