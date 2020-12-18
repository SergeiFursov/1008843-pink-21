// Menu header

var navMane= document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');

navMane.classList.remove('.main-navigation--nojs');

navToggle.addEventListener(click, function() {
  if(navMane.classList.contains('main-navigation--closed')) {
    navMane.classList.remove('main-navigation--closed');
    navMane.classList.add('main-navigation--opened');
  } else {
    navMane.classList.add('main-navigation--closed');
    navMane.classList.remove('main-navigation--opened');
  }
});
