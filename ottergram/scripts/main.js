'use strict';

let DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
let DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
let DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
let DETAIL_CONTAINER_SELECTOR = '[data-image-role="container"]';
let THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
let HIDDEN_DETAIL_CLASS = 'hidden-detail';
let TINY_EFFECT_CLASS = 'is-tiny';

let ESC_KEY = 27;

let image = document.querySelector(DETAIL_IMAGE_SELECTOR);
let title = document.querySelector(DETAIL_TITLE_SELECTOR);
let container = document.querySelector(DETAIL_CONTAINER_SELECTOR);
let frame = document.querySelector(DETAIL_FRAME_SELECTOR);

function random_range(min, max) {
  let r = Math.random();
  let v = Math.floor(r * (max - min)) + min;
  return v;
}

function attach_thumbnail_item(item) {
  let on_click = function (event) {
    event.preventDefault();
    show_details();
    image.setAttribute('src', item.getAttribute('data-image-url'));
    title.textContent = item.getAttribute('data-image-title');
  }
  item.addEventListener("click", on_click);
}

function attach_random_item(items) {
    let on_click = function (event) {
      event.preventDefault();
      show_details();
      let item = items[random_range(0, items.length)];
      image.setAttribute('src', item.getAttribute('data-image-url'));
      title.textContent = item.getAttribute('data-image-title');
    }
    container.addEventListener('click', on_click);
}

function hidden_details() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function show_details() {
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function(){
    frame.classList.remove(TINY_EFFECT_CLASS);
  },50);
}

function attach_keypress_handler() {
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === ESC_KEY) {
      hidden_details();
    }
  })
}

function init() {
  let items = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  let itemArray = [].slice.call(items);
  itemArray.forEach(attach_thumbnail_item);
  attach_random_item(itemArray);
  attach_keypress_handler();
}

init();
