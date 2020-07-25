import {profileName, profileJob, editName, editJob} from "../utils/constants.js"

export default class UserInfo {
  constructor({name, job}) {
    this._name = name;
    this._job = job;
  }

  getuserInfo() {
    editName.value = this._name;
    editJob.value = this._job;
  }

  setUserInfo() {
    profileName.textContent = this._name;
    profileJob.textContent = this._job;
  }

}
