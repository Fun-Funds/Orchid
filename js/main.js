'use strict';


const cart = new Cart([]);

let lImgEl = document.getElementById('leftImg');
let rImgEl = document.getElementById('rightImg');

let lImgElname = document.getElementById('imgName1');
let rImgElname = document.getElementById('imgName2');

let lImgElpr = document.getElementById("price1");
let rImgElpr = document.getElementById("price2");

let btn1 = document.getElementById("orderNum1");
let btn2 = document.getElementById("orderNum2");

let leftImgIndex;
let rightImgIndex;

let lastImages = [];

function randomImage() {
    return Math.floor(Math.random() * Product.allProducts.length);
}

function renderImg() {
    leftImgIndex = randomImage();
    rightImgIndex = randomImage();

    while (leftImgIndex === rightImgIndex || lastImages.includes(leftImgIndex) || lastImages.includes(rightImgIndex)) {
        leftImgIndex = randomImage();
        rightImgIndex = randomImage();
    }

    lImgEl.setAttribute('src', Product.allProducts[leftImgIndex].filePath);
    lImgEl.setAttribute('title', Product.allProducts[leftImgIndex].name);
    lImgElname.textContent = Product.allProducts[leftImgIndex].name;
    lImgElpr.textContent = ` Price : ${Product.allProducts[leftImgIndex].price}`;

    rImgEl.setAttribute('src', Product.allProducts[rightImgIndex].filePath);
    rImgEl.setAttribute('title', Product.allProducts[rightImgIndex].name);
    rImgElname.textContent = Product.allProducts[rightImgIndex].name;
    rImgElpr.textContent = ` Price : ${Product.allProducts[rightImgIndex].price}`;

    lastImages[0] = leftImgIndex;
    lastImages[1] = rightImgIndex;

}
renderImg();


btn1.addEventListener('click', mainSubmit);
btn2.addEventListener('click', mainSubmit);

function mainSubmit(event){
    event.preventDefault();
    console.log(event);
    addMainitem(event);
    cart.saveToLocalStorage();
    updateCounter();
}
function addMainitem(event){
    let selectedItemName ;
    let selectedItemPrice ;
    if (event.target.id === 'orderNum1') {
        selectedItemName = Product.allProducts[leftImgIndex].name;
        selectedItemPrice = Product.allProducts[leftImgIndex].price;
    }
    else if (event.target.id === 'orderNum2') {
        selectedItemName = Product.allProducts[rightImgIndex].name;
        selectedItemPrice = Product.allProducts[rightImgIndex].price;
    }
    cart.addItem(selectedItemName,selectedItemPrice);
}
function loadCount(){
    const countItems = JSON.parse(localStorage.getItem('count')) || [];
    let countEl = document.getElementById('itemCount');
    countEl.textContent = `${countItems}`;
  }
  
  loadCount()

  function showPopUp1(){
    var popup_box = document.getElementById('my_pop_up_box1');
    popup_box.style.display="block";
    setTimeout(function() { popup_box.style.display="none";}, 3000);
  }
  
  
  function showPopUp2(){
    var popup_box = document.getElementById('my_pop_up_box2');
    popup_box.style.display="block";
    setTimeout(function() { popup_box.style.display="none";}, 3000);
  }
  
 