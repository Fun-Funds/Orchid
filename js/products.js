'use strict';



window.onscroll = function () {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
const cart = new Cart([]);

function populateForm() {

  let divEl = document.getElementById("box");
  for (let i in Product.allProducts) {
    let divE2 = document.createElement('div');
    divEl.appendChild(divE2);
    divE2.setAttribute("id", "card-container");

    let divE3 = document.createElement('div');
    divE2.appendChild(divE3);
    divE3.setAttribute("id", "card");

    let divE4 = document.createElement('div');
    divE3.appendChild(divE4);
    divE4.setAttribute("class", "front face");

    let divE5 = document.createElement('div');
    divE3.appendChild(divE5);
    divE5.setAttribute("class", "back face");

    let imgEl = document.createElement("img");
    divE4.appendChild(imgEl);
    imgEl.setAttribute("class", "pic")

    let headerEl = document.createElement("h1");
    divE5.appendChild(headerEl);

    let paraEl = document.createElement('p');
    divE5.appendChild(paraEl);

    imgEl.src = `${Product.allProducts[i].filePath}`;

    headerEl.textContent = `${Product.allProducts[i].name}`;

    paraEl.textContent = `${Product.allProducts[i].price}$`;
    let priceE1 = Product.allProducts[i].price;
    let textE1 = document.createElement("h2");
    divE2.appendChild(textE1);
    textE1.textContent = `${Product.allProducts[i].name}`;

    let textE2 = document.createElement("h3");
    divE2.appendChild(textE2);
    textE2.textContent = `${Product.allProducts[i].price}`;
    let buttonDiv = document.createElement('div');
    divE2.appendChild(buttonDiv);
    buttonDiv.setAttribute('class', 'wrapper-no4')



    let button = document.createElement('button');
    divE5.appendChild(button);
    button.textContent = 'BUY';


    let buttonE2 = document.createElement('button');
    // buttonE2.textContent="buy111";
    buttonE2.id = `bun${i}`;

    buttonE2.setAttribute('class', 'button-bird');



    divE2.appendChild(buttonE2);


    let pE1 = document.createElement('p');
    buttonE2.appendChild(pE1);
    pE1.id = `but${i}`;
    pE1.setAttribute('class', 'button-bird__text');
    pE1.textContent = ('ADD TO CART');
    buttonE2.setAttribute("onclick", `saveEl('${headerEl.textContent}','${priceE1}','${buttonE2.id}','${pE1.id}')`);
    buttonE2.addEventListener('click', handleSubmit);


    // creating the bird button 
    let svg = document.createElement('svg');
    buttonE2.appendChild(svg);

    let g = document.createElement('g');
    svg.appendChild(g);

    let path = document.createElement('path');
    g.appendChild(path);

    // need to attrubit;
    let span = document.createElement('span');
    buttonE2.appendChild(span);
    span.setAttribute('class', `bird`)
    for (let i2 = 1; i2 < 31; i2++) {
      let span = document.createElement('span');
      buttonE2.appendChild(span);
      span.setAttribute('class', `bird--${i2}`);


 


    }



    function setAttributes(el, attrs) {
      for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    // to set more than one attribute

    setAttributes(svg, { "version": "1.1", "class": "feather", "xmlns": "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", "x": "0px", "y": "0px", "viewBox": "0 0 75 38", "style": "enable-background:new 0 0 75 38;", "xml:space": "preserve" });
    setAttributes(path, {
      "d": `"M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
        c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
        c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
        c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
        c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z" `})






    button.setAttribute("class", "addToCart");
    
    button.setAttribute("onclick", `saveEl('${headerEl.textContent}','${priceE1}')`);
   
    buttonDiv.appendChild(buttonE2);
    button.addEventListener('click', handleSubmit);


   




  }

}

populateForm()

let x;
let y;

function saveEl(a, b, c, d) {

  x = a;
  y = b;
  let el1 = document.getElementById(c);
  let text2 = document.getElementById(d);
  console.log(text2);
  el1.classList.toggle('active');

  if (el1.classList.contains('active')) {
    console.log('true');
    text2.innerHTML = 'DONE';
  } else {
    text2.innerHTML = 'ADD TO CART';
  }
  return (x, y);
}



function handleSubmit(event) {
  event.preventDefault();
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
}


function addSelectedItemToCart() {
  let selectedItemName = x;
  let selectedItemPrice = y;
  for (let index = 0; index < cart.items.length; index++) {
    if (cart.items[index].product === selectedItemName) {
      cart.items[index].quantity++;
      cart.saveToLocalStorage();
      return;

    }

  }

  cart.addItem(selectedItemName, selectedItemPrice);
  console.log(cart);


}

function loadCount() {
  const countItems = JSON.parse(localStorage.getItem('count')) || [];
  let countEl = document.getElementById('itemCount');
  countEl.textContent = `${countItems}`;
}



loadCount();
