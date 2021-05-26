'use strict';
let navbar = document.querySelector('nav');

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

let total;
let totalsum=0;

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
  console.log(typeof (cart.items[i].quantity));
  

  let btnEl2 = document.createElement("button");
  tableRow.appendChild(btnEl2);
  btnEl2.textContent = "+";
  btnEl2.setAttribute("onclick",`saveEl('${itemtd.textContent}')`);
  btnEl2.addEventListener("click",inc);

  // Create a TD for the price
  let pricetd= document.createElement('td');
  tableRow.appendChild(pricetd);
  pricetd.textContent=`${cart.items[i].price}$`;
 // priceArr.push[cart.items[i].price];

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
   let tableRowtotal = document.createElement('tr');
   tBody.appendChild(tableRowtotal);
   // Create a TD for the  item  
   let totaltd= document.createElement('td');
   tableRowtotal.appendChild(totaltd);
   totaltd.textContent= 'Total';
   let totaltd2= document.createElement('td');
   tableRowtotal.appendChild(totaltd2);
   totaltd2.textContent= '   ';
   let totaltd3= document.createElement('td');
   tableRowtotal.appendChild(totaltd3);
   totaltd3.textContent=  updteTotal(totalsum)+'$';
   let totaltd4= document.createElement('td');
   tableRowtotal.appendChild(totaltd4);
   totaltd4.textContent='    ';
   
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
      updateCounter();
      return;
      
    }
}
//updteTotal();
}
function dec(){
  let selectedItemName = x;
  for (let index = 0; index < cart.items.length; index++) {
    if(cart.items[index].product === selectedItemName) {
      cart.items[index].quantity --;
      cart.saveToLocalStorage();
      updateCounter();
      return;
      
      
    }
}
//updteTotal();
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


function updteTotal(totalsum) {

   if (totalsum !== null) {

    for (let i = 0; i < cart.items.length ; i++) {
      totalsum = totalsum + (cart.items[i].quantity * cart.items[i].price);
  }
  return totalsum;

 }
  
  }
 
renderCart();


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  location.reload();
  localStorage.clear();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let clearCartEl= document.getElementById('clearCart');
let btnEl3 = document.createElement("button");
btnEl3.setAttribute("id","clearCartButton");
btnEl3.textContent="Clear Cart";
clearCartEl.appendChild(btnEl3);
btnEl3.onclick = function() {
  modal.style.display = "none";
  location.reload();
  localStorage.clear();
}
