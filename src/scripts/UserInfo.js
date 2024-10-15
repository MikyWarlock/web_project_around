export default class UserInfo {
  constructor({ name, job }) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    const name = document.querySelector(".profile__name");
    const job = document.querySelector(".profile__description");
    return { name: name.textContent, description: job.textContent };
  }

  setUserInfo() {
    const name = document.querySelector(".profile__name");
    const job = document.querySelector(".profile__description");
    name.textContent = this._name;
    job.textContent = this._job;
  }
}
