import { Card } from "../components/Card.js"
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, validationConfig } from "../utils/constants.js";

function handleCardClick(name, link) {
  buttonImage.setAttribute('src', `${link}`);
  buttonImage.setAttribute('alt', `${name}`);
  imageTitle.textContent = `${name}`;
  openPopup(popupImage);
}

function createNewCardInfo(name, link) {
  const newCardData = {
    name: `${name}`,
    link: `${link}`
  }
  return newCardData;
}

function createCard(item) {
  const card = new Card(item, '#elementTemplate', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

function submitEditProfileForm(evt) {
  evt.preventDefault();

  nameProfile.textContent = `${nameInput.value}`;
  jobProfile.textContent = `${jobInput.value}`;

  closePopup(popupEdit);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  
  elements.prepend(createCard(createNewCardInfo(placeInput.value, linkInput.value)));
  closePopup(popupAdd);
}


function renderElements (data) {
  elements.innerHTML = '';

  data.forEach((item) => {
    elements.append(createCard(item));
  });
};

formElement.addEventListener('submit', submitEditProfileForm);
formAddElement.addEventListener('submit', handleAddFormSubmit);

buttonEdit.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupEdit);
  
});
buttonAdd.addEventListener('click', function () {
  formAddElement.reset()
  openPopup(popupAdd);
  
});



formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);
  
  formValidator.enableValidation();
});

renderElements(initialCards);


