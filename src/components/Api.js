import { data } from "autoprefixer";

export default class Api {
  constructor({baseURL, headers}) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _checkResponse(res) {
    return (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));
  }

  getInitialCards() {
    return fetch(`${this._baseURL}/cards`, {
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
    .catch( err => console.log(err))
  }

  getProfileInfo() {
    return fetch(`${this._baseURL}/users/me`, {
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
    .catch( err => console.log(err))
  }

  getAppInfo() {
    return Promise.all([this.getProfileInfo(), this.getInitialCards()])
  }

  setProfileInfo(data) {
    return fetch(`${this._baseURL}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then ( res => this._checkResponse(res))
    .catch( err => console.log(err))
  }

  createCard(data) {
    return fetch(`${this._baseURL}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then ( res => this._checkResponse(res))
    .catch( err => console.log(err))
  }

  deleteCard(cardID) {
    return fetch(`${this._baseURL}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
    .catch( err => console.log(err))
  }

  cardLike(cardID) {
    return fetch(`${this._baseURL}/cards/likes/${cardID}`, {
      method: "PUT",
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
    .catch( err => console.log(err))
  }

  cardUnlike(cardID) {
    return fetch(`${this._baseURL}/cards/likes/${cardID}`, {
      method: "DELETE",
      headers: this._headers
    })
    .then ( res => this._checkResponse(res))
    .catch( err => console.log(err))
  }

  updateAvatar(url) {
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url
      })
    })
    .then ( res => this._checkResponse(res))
    .catch( err => console.log(err))
  }
}
