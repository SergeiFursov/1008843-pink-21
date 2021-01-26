// Menu header

var navMain = document.querySelector('.page-header__wrapper');
var navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('page-header__wrapper--nojs');

navToggle.onclick = function() {
  navMain.classList.toggle('page-header__wrapper--closed');
  navMain.classList.toggle('page-header__wrapper--opened');
};
