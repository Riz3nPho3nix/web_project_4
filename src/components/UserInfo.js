export default class UserInfo {
  constructor() {
    this._name = document.querySelector('.profile__name');
    this._job = document.querySelector('.profile__job');
  }

  getUserInfo() {
    this._userData = {name:this._name.textContent,  job:this._job.textContent};
    return this._userData;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.about;
  }

}
