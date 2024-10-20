export default class UserInfo {
  constructor({ name, job }) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    const name = document.querySelector(".profile__name");
    const job = document.querySelector(".profile__description");
    return { name: name, description: job };
  }

  setUserInfo() {
    const user = this.getUserInfo();
    user.name.textContent = this._name;
    user.description.textContent = this._job;
  }
}
