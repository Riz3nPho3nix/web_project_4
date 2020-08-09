import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import "./index.css";


// Declare variables
const editProfile = document.querySelector('.profile__edit');
const editModal = document.querySelector('.profile-edit');
const save = editModal.querySelector('.modal__form');
const avatar = document.querySelector(".profile__picture");
const changePic = document.querySelector('.profile__overlay');
const cards = document.querySelector('.cards');
const add = document.querySelector('.profile__add-btn');
const addCard = document.querySelector('.new-card');
const newCard = addCard.querySelector('.modal__form');
const displayModal = document.querySelector('.display');
const editName = document.querySelector('.set_name');
const editJob = document.querySelector('.set_job');
const editPic = document.querySelector('.new-avatar');
const picForm = editPic.querySelector('.modal__form');
const cardRemove = document.querySelector('.delete-card');
const remove = document.querySelector('.card-id');



const api = new Api({baseURL: "https://around.nomoreparties.co/v1/group-3",
  headers: {authorization: "85b65791-c6f6-4567-a451-befb44448843",
    "Content-Type": "application/json"
  }
});

const validateSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}

const userData = new UserInfo();

function loading(isLoading, modal) {
 if (isLoading) {
  modal.querySelector('.modal__button').textContent = "Saving...";
 } else {
  modal.querySelector('.modal__button').textContent = "Save";
 }
}




api.getProfileInfo()
  .then(data => {
    userData.setUserInfo(data);
    avatar.src = data.avatar;
})

api.getAppInfo()
.then(([userInfoData, initialCardsData]) => {
    const userID = userInfoData._id;
    const cardList = new Section({
    items: initialCardsData,
    renderer: (data) => {
      const card = new Card({
        data,
        handleCardClick: (info) => {imageDisplay.open(info)},
        deleteCard: (id) => {
          remove.value = id;
          removeModal.open();
          removeModal.setDelete(() => {card.removeCard()});
        },
        handleLikeClick: (id) => {
          if (card.likeButton.classList.contains('card__liked')) {
            card.likeButton.classList.remove('card__liked');
            api.cardUnlike(id)
            .then(res => card.likeCount(res.likes.length))
          } else {
            card.likeButton.classList.add('card__liked');
            api.cardLike(id)
            .then(res => card.likeCount(res.likes.length))
          }}},
          userID,
          ".card-template"
      )

      const cardElement = card.generateCard();

      cardList.addItem(cardElement);
      }
    },
    cards
  );

  const cardForm = new PopupWithForm(addCard, (data) => {
    loading(true, addCard);
    api.createCard(data)
    .then ((res) => {
    const newCard = new Card({
      data: res,
      handleCardClick: (info) => {imageDisplay.open(info)},
      deleteCard: (id) => {
        remove.value = id;
        removeModal.open();
        removeModal.setDelete(() => {newCard.removeCard()});
      },
      handleLikeClick: (id) => {
        if (newCard.likeButton.classList.contains('card__liked')) {
          newCard.likeButton.classList.remove('card__liked');
          api.cardUnlike(id)
          .then(res => newCard.likeCount(res.likes.length))
        } else {
          newCard.likeButton.classList.add('card__liked');
          api.cardLike(id)
          .then(res => newCard.likeCount(res.likes.length))
        }}},
        userID,
        ".card-template")


    const cardElement = newCard.generateCard();

    cardList.addItem(cardElement);
  })
  loading(false, addCard);
  });

  cardForm.setEventListeners();


  add.addEventListener('click', () => {cardForm.open()});

  cardList.renderItems();
});


const imageDisplay = new PopupWithImage(displayModal);
imageDisplay.setEventListeners();


const profileFormValidate = new FormValidator(validateSettings, save);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validateSettings, newCard);
cardFormValidate.enableValidation();

const avatarFormValidate = new FormValidator(validateSettings, picForm);
avatarFormValidate.enableValidation();




const profileForm = new PopupWithForm(editModal, (data) => {
  loading(true, editModal);
  api.setProfileInfo(data)
  .then ((res) => {userData.setUserInfo(res);});
  loading(false, editModal);
}
);

const avatarForm = new PopupWithForm(editPic, (data) => {
  loading(true, editPic);
  api.updateAvatar(data.avatar)
  .then ((res) => {avatar.src = res.avatar});
  loading(false, editPic);
})


const removeModal = new PopupWithForm(cardRemove, (id) => {
  api.deleteCard(id.id)
  .then (() => {removeModal.runDelete()})
})





editProfile.addEventListener('click', () => {
  const formData = userData.getUserInfo();
  editName.value = formData.name;
  editJob.value = formData.job;
  profileForm.open();
});

changePic.addEventListener('click', () => {
  avatarForm.open();
})



profileForm.setEventListeners();

removeModal.setEventListeners();

avatarForm.setEventListeners();
