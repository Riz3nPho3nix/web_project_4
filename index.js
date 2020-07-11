//import {toggleModal} from "./utils.js";
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
const modalImage = document.querySelector('.display__image');
const modalTitle = document.querySelector('.display__caption');
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

//const cardTemplate = document.querySelector(".card-template").content.querySelector(".card");


// Toggle modal visibility
function toggleModal(modal){
  modal.classList.toggle('modal__open');
  if (modal.classList.contains('modal__open')) {
    document.addEventListener('keydown', escapeModal);
  } else {
    document.removeEventListener('keydown', escapeModal);
  }
}
//Function to close modal window using Escape key
function escapeModal(e) {
  if (e.key === "Escape") {
    toggleModal(document.querySelector('.modal__open'));
  }
}



// Display full image
function displayImage(title, link){
  modalImage.src = link;
  modalImage.alt = title;
  modalTitle.textContent = title;
  toggleModal(imageModal);
};
// Add and remove full heart on places
function toggleHeart(e){
  e.target.classList.toggle('card__liked');
}
// Remove place from list on site
function removeCard(e){
  e.target.closest('.card').remove();
  e.stopPropagation();
}


// Create cards from initial array

/*function createCard(title, image) {

  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__heading");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__heart");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");

  cardTitle.textContent = title;
  cardImage.style.backgroundImage = `url('${image}')`;

  cardLikeBtn.addEventListener("click", (e) => {
    toggleHeart(e);
  })

  cardDeleteBtn.addEventListener("click", (e) => {
    removeCard(e);
  })

  cardImage.addEventListener("click", () => {
    displayImage(title, image);
  })

  return cardElement;
}; 

// Insert created cards to page
function renderCard(title, image) {
  cards.prepend(createCard(title, image));
}
*/

// Add places to page
initialCards.forEach((data) => {
  const item = new Card(data, ".card-template");

  const cardElement = item.generateCard();

	cards.prepend(cardElement);
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
  renderCard(cardName.value, cardUrl.value);
  toggleModal(addCard);
});

