import {toggleModal} from "./utils.js";

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


  _setEventListeners() {
    this._element.querySelector(".card__heart").addEventListener("click", (e) => {
      e.target.classList.toggle('card__liked');
    })
    this._element.querySelector(".card__delete-btn").addEventListener("click", (e) => {
      e.target.closest('.card').remove();
      e.stopPropagation();
    })
    this._element.querySelector(".card__image").addEventListener("click", () => {
      const modalImage = document.querySelector('.display__image');
      modalImage.src = this._url;
      modalImage.alt = this._name;
      document.querySelector('.display__caption').textContent = this._name;
      toggleModal(document.querySelector('.display'));
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
