//import {toggleModal} from "./utils.js";

export default class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._url = data.link;
    this._cardTemplate = cardTemplate;
	}

  _getTemplate() {
  	const cardElement = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector(".card")
      .cloneNode(true);

    this._element = cardElement;
  }

    // Display full image
  _displayImage(title, link){
    const modalImage = document.querySelector('.display__image');
    modalImage.src = link;
    modalImage.alt = title;
    document.querySelector('.display__caption').textContent = title;
    toggleModal(document.querySelector('.display'));
  };
  // Add and remove full heart on places
  _toggleHeart(e){
    e.target.classList.toggle('card__liked');
  }
  // Remove place from list on site
  _removeCard(e){
    e.target.closest('.card').remove();
    e.stopPropagation();
  }

  _setEventListeners() {
    this._element.querySelector(".card__heart").addEventListener("click", (e) => {
      _toggleHeart(e);
    })
    this._element.querySelector(".card__delete-btn").addEventListener("click", (e) => {
      _removeCard(e);
    })
    this._element.querySelector(".card__image").addEventListener("click", () => {
      _displayImage(this._name, this._url);
    })
  }

  generateCard() {
    this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__heading").textContent = this._name;
    this._element.querySelector(".card__image").style.backgroundImage = `url('${this._url}')`;
    

  	return this._element;
  }


}
