export default class UserInfo {
  constructor({nameSelector, jobSelector}) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return { name: `${this._name.textContent}`, job:`${this._job.textContent}` };
  }
  setUserInfo() {
    /*
    this._newName = данные из инпута имени;
    this._newJob = данные из инпута профессии;

    */
    
    this._name.textContent = `${this._newName}`;
    this._job.textContent = `${this._newJob}`;
  }
}