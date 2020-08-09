export default class Card {
  constructor({data, handleCardClick, deleteCard, handleLikeClick}, userID, cardTemplate) {
    this._id = data._id;
    this._ownerID = userID;
    this._owner = data.owner;
    this._name = data.name;
    this._url = data.link;
    this._likes = data.likes;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
    this._handleLikeClick = handleLikeClick;
    this._element = this._getTemplate();
    this.likeButton = this._element.querySelector('.card__heart');
  }

  _getTemplate() {
  	const cardElement = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _manageLikes() {
  if (this._likes.some((like) => like._id === this._ownerID)) {
    this._element.querySelector('.card__heart').classList.add('card__liked');
  }
  }

  likeCount(num) {
    this._element.querySelector(".card__like-count").textContent = num;
  }

  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    if (this._owner._id === this._ownerID) {
      this._element.querySelector(".card__delete-btn").addEventListener("click", (e) => {
        this._deleteCard(this._id);
        e.stopPropagation();
      })
    } else {
      this._element.querySelector('.card__delete-btn').remove();
    }
    this._element.querySelector(".card__image").addEventListener("click", () => {
      this._handleCardClick({name:this._name, link:this._url});
    })
    this.likeButton.addEventListener('click', () => {
    this._handleLikeClick(this._id);
  })
  }

  generateCard() {
    this._setEventListeners();
    this._manageLikes();
    this.likeCount(this._likes.length);

    this._element.querySelector(".card__heading").textContent = this._name;
    this._element.querySelector(".card__image").style.backgroundImage = `url('${this._url}')`;


  	return this._element;
  }


}
