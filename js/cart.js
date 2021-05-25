'use strict';
let navbar = document.querySelector('nav');

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 500) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

let cart;


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

function loadCount(){
  const countItems = JSON.parse(localStorage.getItem('count')) || [];
  let countEl = document.getElementById('itemCount');
  countEl.textContent = `${countItems}`;
}

function renderCart() {
  loadCart();
  loadCount();
  clearCart();
  showCart();
}


function clearCart() {
let tBody= table.getElementsByTagName('tbody')[0];
while (tBody.firstElementChild){
tBody.removeChild(tBody.firstElementChild);
}
}

function showCart() {

let tBody = table.getElementsByTagName('tbody')[0];

  for (let i=0; i< cart.items.length ;i++){
  //  Create a TR
  let tableRow = document.createElement('tr');
  tBody.appendChild(tableRow);
  // Create a TD for the  item  
  let itemtd= document.createElement('td');
  tableRow.appendChild(itemtd);
  itemtd.textContent=cart.items[i].product;

  //  Create a TD for the quantity 

  let quantitytd= document.createElement('td');
  tableRow.appendChild(quantitytd);
  quantitytd.textContent="";

  // Create a TD for the price
  let pricetd= document.createElement('td');
  tableRow.appendChild(pricetd);
  pricetd.textContent=cart.items[i].price;

 //Create a TD for the  delete link 

  let deletetd= document.createElement('td');
  tableRow.appendChild(deletetd);
  deletetd.setAttribute('id',cart.items[i].product);
  let button=document.createElement('p');
  deletetd.appendChild(button);
  button.textContent='X';
  button.setAttribute('id',cart.items[i].product);
  button.addEventListener('click',removeItemFromCart);
  }
}

function removeItemFromCart(event) {

//  When a delete link is clicked, use cart.removeItem to remove the correct item
let removeItem= event.target.id;
for (let i=0; i<cart.items.length;i++){
  if (cart.items[i].product===removeItem){
  cart.removeItem (cart.items[i]);
  let data = JSON.stringify(`${cart.items.length}`);
  localStorage.setItem('count', data);
}}
  //  Save the cart back to local storage
  cart.saveToLocalStorage();
  // Re-draw the cart table
  renderCart();
 }

// This will initialize the page and draw the cart on screen
renderCart();

