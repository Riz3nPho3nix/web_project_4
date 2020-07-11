import {toggleModal} from "./utils.js";
import Card from "./card.js";

// Declare variables
const editProfile = document.querySelector('.profile__edit');
const editModal = document.querySelector('.profile-edit');
const save = editModal.querySelector('.modal__form');
const editClose = editModal.querySelector('.modal__close');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const editName = document.querySelector('.set_name');
const editJob = document.querySelector('.set_job');
const cards = document.querySelector('.cards');
const add = document.querySelector('.profile__add-btn');
const addCard = document.querySelector('.new-card');
const newCard = addCard.querySelector('.modal__form');
const cardClose = addCard.querySelector('.modal__close');
const cardName = document.querySelector('.location');
const cardUrl = document.querySelector('.image-path');
const imageModal = document.querySelector('.display');
const imageClose = imageModal.querySelector('.modal__close');
const modals = Array.from(document.querySelectorAll('.modal'));

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

function createCard(data) {
  const item = new Card(data, ".card-template");

  const cardElement = item.generateCard();

	cards.prepend(cardElement);
}

// Add places to page
initialCards.forEach((data) => {
  createCard(data);
})
// Create Event Listeners
save.addEventListener('submit', (e) => {
  // Stop the browser from submitting the form in the default way.
  e.preventDefault();

  // Insert new values using the textContent property of the querySelector() method
  name.textContent = editName.value;
  job.textContent = editJob.value;

  toggleModal(editModal);
});

editClose.addEventListener('click', () => {
  toggleModal(editModal);
});

editProfile.addEventListener('click', () => {
  toggleModal(editModal);
});

add.addEventListener('click', () => {
  toggleModal(addCard);
});

cardClose.addEventListener('click', () => {
  toggleModal(addCard);
});

imageClose.addEventListener('click', () => {
  toggleModal(imageModal);
});

modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal__open")) {
      toggleModal(e.target);
    }
  })
})

newCard.addEventListener('submit', (e) => {
  e.preventDefault();
  createCard({name:cardName.value, link:cardUrl.value});
  toggleModal(addCard);
});

