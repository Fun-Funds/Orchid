'use strict';


function loadCount(){
    const countItems = JSON.parse(localStorage.getItem('count')) || [];
    let countEl = document.getElementById('itemCount');
    countEl.textContent = `${countItems}`;
  }
  loadCount()