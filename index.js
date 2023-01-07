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


/////////////////////////////////////////////////////////////////////////
let nameInput = document.querySelector('.pop-up__name');
let jobInput = document.querySelector('.pop-up__job');
//Получаем текст имени и профессии
let nameProfile = document.querySelector('.profile__info_name');
let jobProfile = document.querySelector('.profile__info_job');

// Делаем так, чтобы имя и профессия были в input при открывании формы pop-up
nameInput.value = nameProfile.innerText;
jobInput.value = jobProfile.innerText;


// Фунция внесения изменений в имя и профессию
function handleFormSubmit () {
    nameProfile.innerText = `${nameInput.value}`;
    jobProfile.innerText = `${jobInput.value}`;
}
saveButton.addEventListener('click', handleFormSubmit);