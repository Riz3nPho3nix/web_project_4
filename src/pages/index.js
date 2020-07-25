import Card from "../scripts/card.js";
import FormValidator from "../scripts/formValidator.js";
import {editProfile, editModal, save, profileName, profileJob, cards, add, addCard, newCard, displayModal} from "../utils/constants.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";
import Section from "../scripts/Section.js";
import "./index.css";


// Declare variables

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

const profileFormValidate = new FormValidator(validateSettings, save);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validateSettings, newCard);
cardFormValidate.enableValidation();

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, ".card-template", () => {
        const imageDisplay = new PopupWithImage(item, displayModal);
        imageDisplay.setEventListeners();
        imageDisplay.open();
    })

    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
    }
  },
  cards
);


const profileForm = new PopupWithForm(editModal, (data) => {
  const userData = new UserInfo(data);
  userData.setUserInfo();
}
);



const cardForm = new PopupWithForm(addCard, (data) => {
  const newCard = new Card(data, ".card-template", () => {
    const imageDisplay = new PopupWithImage(data, displayModal);
    imageDisplay.setEventListeners();
    imageDisplay.open();
})

  const cardElement = newCard.generateCard();

  cardList.addItem(cardElement);
  }
);

add.addEventListener('click', () => {cardForm.open()});

editProfile.addEventListener('click', () => {const userData = new UserInfo({name:profileName.textContent, job:profileJob.textContent}); userData.getuserInfo(); profileForm.open()});

cardList.renderItems();

cardForm.generateForm();

profileForm.generateForm();
