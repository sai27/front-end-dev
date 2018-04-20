'use strict';

let DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
let DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
let DETAIL_CONTAINER_SELECTOR = '[data-image-role="container"]';
let THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

let image = document.querySelector(DETAIL_IMAGE_SELECTOR);
let title = document.querySelector(DETAIL_TITLE_SELECTOR);
let container = document.querySelector(DETAIL_CONTAINER_SELECTOR);

function random_range(min, max) {
  let r = Math.random();
  let v = Math.floor(r * (max - min)) + min;
  return v;
}

function attach_thumbnail_item(item) {
  let on_click = function (event) {
    event.preventDefault();
    image.setAttribute('src', item.getAttribute('data-image-url'));
    title.textContent = item.getAttribute('data-image-title');
  }
  item.addEventListener("click", on_click);
}

function attach_random_item(items) {
    let on_click = function (event) {
      event.preventDefault();
      let item = items[random_range(0, items.length)];
      image.setAttribute('src', item.getAttribute('data-image-url'));
      title.textContent = item.getAttribute('data-image-title');
    }
    container.addEventListener('click', on_click);
}

function init() {
  let items = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  let itemArray = [].slice.call(items);
  itemArray.forEach(attach_thumbnail_item);
  attach_random_item(itemArray);
}

init();
