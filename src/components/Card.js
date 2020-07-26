export default class Card {
  constructor(data, cardTemplate, handleCardClick) {
    this._name = data.name;
    this._url = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
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
      this._element.closest('.card').remove();
      e.stopPropagation();
    })
    this._element.querySelector(".card__image").addEventListener("click", () => {
      this._handleCardClick({name:this._name, link:this._url});

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
