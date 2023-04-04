import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js"
/*
import UserInfo from "../components/UserInfo.js";
*/
import {
  initialCards,
  validationConfig,
  buttonAdd,
  buttonEdit,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  formElement,
  formAddElement,
  formList,
  placeInput,
  linkInput,
  cardContainerSelector,
} from "../utils/constants.js";

function handleCardClick(evt) {
  const popupWithImage = new PopupWithImage('.image-popup_type_image');
  
  popupWithImage.setEventListeners();
  popupWithImage.open(evt);
}

const startingCards = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#elementTemplate', handleCardClick);
    const cardElement = card.generateCard();
    startingCards.setItem(cardElement);
  }
}, cardContainerSelector);

function submitEditProfileForm(evt) {
  const popupEdit = new PopupWithForm('.popup_type_edit');
  evt.preventDefault();

  nameProfile.textContent = `${nameInput.value}`;
  jobProfile.textContent = `${jobInput.value}`;

  popupEdit.close();
}
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const popupWithForm = new PopupWithForm('.popup_type_add');

  const newCard = new Section({
    data: [
      {
        name: `${placeInput.value}`,
        link: `${linkInput.value}`
      }
    ],
    renderer: (item) => {
      const card = new Card(item, '#elementTemplate', handleCardClick);
      const cardElement = card.generateCard();
      newCard.setItem(cardElement);
    }
  }, cardContainerSelector);

  newCard.renderItems()
  popupWithForm.close();
}

formElement.addEventListener('submit', submitEditProfileForm);
formAddElement.addEventListener('submit', handleAddFormSubmit);

buttonEdit.addEventListener('click', () => {
  const firstPopupWithForm = new PopupWithForm('.popup_type_edit');
  firstPopupWithForm.setEventListeners();
  firstPopupWithForm.open();
});
buttonAdd.addEventListener('click', () => {
  formAddElement.reset()
  const secondPopupWithForm = new PopupWithForm('.popup_type_add');
  secondPopupWithForm.setEventListeners();
  secondPopupWithForm.open();
});

formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);
  
  formValidator.enableValidation();
});

startingCards.renderItems()