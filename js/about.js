'use strict';

//let navbar = document.querySelector('nav');

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 500) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
function loadCount(){
    const countItems = JSON.parse(localStorage.getItem('count')) || [];
    let countEl = document.getElementById('itemCount');
    countEl.textContent = `${countItems}`;
  }
  loadCount()