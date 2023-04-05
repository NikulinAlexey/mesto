export default class UserInfo {
  constructor({ nameSelector, jobSelector }, nameInput, jobInput) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._nameInput = nameInput;
    this._jobInput = jobInput;
  }

  getUserInfo() {
    return { name: `${this._name.textContent}`, job:`${this._job.textContent}` };
  }
  setUserInfo() {
    this._name.textContent = `${this._nameInput.value}`;
    this._job.textContent = `${this._jobInput.value}`;
  }
}