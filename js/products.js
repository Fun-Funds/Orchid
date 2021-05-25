'use strict';


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

        paraEl.textContent = `${Product.allProducts[i].price}`;

        let button = document.createElement('button');
        button.setAttribute("class", "addToCart");
        button.setAttribute("onclick",`saveEl('${headerEl.textContent}','${paraEl.textContent}')`);
        button.innerHTML = "BUY";
        button.type = "buy";
        button.name = "cartButton";
        divE5.appendChild(button);
        button.addEventListener('click', handleSubmit);


    }
}

populateForm()

let x;
let y;

function saveEl(a,b){
 x = a;
 y = b;
return(x,y);
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
    cart.addItem(selectedItemName,selectedItemPrice);
    console.log(cart);
}


function loadCount(){
    const countItems = JSON.parse(localStorage.getItem('count')) || [];
    let countEl = document.getElementById('itemCount');
    countEl.textContent = `${countItems}`;
  }

  loadCount()