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

  let btnEl1 = document.createElement("button");
  tableRow.appendChild(btnEl1);
  btnEl1.textContent = "-";
  btnEl1.setAttribute("onclick",`saveEl('${itemtd.textContent}')`);
  btnEl1.addEventListener('click',dec);
  //  Create a TD for the quantity 
  let quantitytd= document.createElement('input');
  quantitytd.setAttribute("type", "number");
  tableRow.appendChild(quantitytd);
  quantitytd.value=cart.items[i].quantity;

  let btnEl2 = document.createElement("button");
  tableRow.appendChild(btnEl2);
  btnEl2.textContent = "+";
  btnEl2.setAttribute("onclick",`saveEl('${itemtd.textContent}')`);
  btnEl2.addEventListener("click",inc);

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
  if (data !== undefined) {

    countEl.textContent = cart.items[i].quantity;

  }

  }
}
let x;
function saveEl(a){
  x = a;
 return(x);
 }

function inc(){
  let selectedItemName = x;
  for (let index = 0; index < cart.items.length; index++) {
    
    if(cart.items[index].product === selectedItemName) {
      cart.items[index].quantity ++;
      cart.saveToLocalStorage();
      updateCounter()
      return;
      
    }
}
}
function dec(){
  let selectedItemName = x;
  for (let index = 0; index < cart.items.length; index++) {
    if(cart.items[index].product === selectedItemName) {
      cart.items[index].quantity --;
      cart.saveToLocalStorage();
      updateCounter()
      return;
      
      
    }
}
}

function removeItemFromCart(event) {

//  When a delete link is clicked, use cart.removeItem to remove the correct item
let removeItem= event.target.id;
for (let i=0; i<cart.items.length;i++){
  if (cart.items[i].product===removeItem){
  cart.removeItem (cart.items[i]);
  delete arr[i];
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

