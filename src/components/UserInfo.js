export default class UserInfo {
  constructor({ nameSelector, jobSelector }, nameInput, jobInput) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector('.profile__avatar');
    this._nameInput = nameInput;
    this._jobInput = jobInput;
  }

  getUserInfo() {
    return { name: `${this._name.textContent}`, job:`${this._job.textContent}` };
  }
  setUserInfo(userData) {    
    this._avatar.setAttribute('src', `${userData.avatar}`)
    this._name.textContent = `${userData.name}`;
    this._job.textContent = `${userData.about}`;
    this._id = `${userData.id}`
  }
}