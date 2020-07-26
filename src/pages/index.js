import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import "./index.css";


// Declare variables
const editProfile = document.querySelector('.profile__edit');
const editModal = document.querySelector('.profile-edit');
const save = editModal.querySelector('.modal__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cards = document.querySelector('.cards');
const add = document.querySelector('.profile__add-btn');
const addCard = document.querySelector('.new-card');
const newCard = addCard.querySelector('.modal__form');
const displayModal = document.querySelector('.display');
const editName = document.querySelector('.set_name');
const editJob = document.querySelector('.set_job');


const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const validateSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}

const userData = new UserInfo();


const imageDisplay = new PopupWithImage(displayModal);
imageDisplay.setEventListeners();


const profileFormValidate = new FormValidator(validateSettings, save);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validateSettings, newCard);
cardFormValidate.enableValidation();

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    const card = new Card(data, ".card-template", (info) => {imageDisplay.open(info)})

    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
    }
  },
  cards
);


const profileForm = new PopupWithForm(editModal, (data) => {
  userData.setUserInfo(data);
}
);



const cardForm = new PopupWithForm(addCard, (data) => {
  const newCard = new Card(data, ".card-template", (info) => {imageDisplay.open(info)})

  const cardElement = newCard.generateCard();

  cardList.addItem(cardElement);
});

add.addEventListener('click', () => {cardForm.open()});

editProfile.addEventListener('click', () => {
  const formData = userData.getUserInfo();
  editName.value = formData.name;
  editJob.value = formData.job;
  profileForm.open();
});

cardList.renderItems();

cardForm.setEventListeners();

profileForm.setEventListeners();
