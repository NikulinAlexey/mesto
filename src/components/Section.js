export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItem(element) {
    this._container.append(element);
  }

  setPrependItem(element) {
    this._container.prepend(element)
  }

  renderItems(data) {
    data.forEach(item => {
      this._renderer(item);
    });
  }
}