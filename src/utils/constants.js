const editProfile = document.querySelector('.profile__edit');
const editModal = document.querySelector('.profile-edit');
const save = editModal.querySelector('.modal__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const editName = document.querySelector('.set_name');
const editJob = document.querySelector('.set_job');
const cards = document.querySelector('.cards');
const add = document.querySelector('.profile__add-btn');
const addCard = document.querySelector('.new-card');
const newCard = addCard.querySelector('.modal__form');
const displayModal = document.querySelector('.display');
const modalImage = displayModal.querySelector('.display__image');
const modalText = displayModal.querySelector('.display__caption');

export {editProfile, editModal, save, profileName, profileJob, editName, editJob, cards, add, addCard, newCard, displayModal, modalImage, modalText};
