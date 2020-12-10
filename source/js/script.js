// Menu header

let page = document.querySelector('.page-header__menu');
let themeButton = document.querySelector('.main-navigation__toggle');

themeButton.onclick = function() {
  page.classList.toggle('closed');
};
