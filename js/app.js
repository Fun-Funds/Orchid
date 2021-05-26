'use strict';


window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
// Cart constructor.
const Cart = function (items) {
    
    this.items = items;
};

Cart.prototype.addItem = function (product,price,quantity) {
    
    this.items.push(new CartItem(product,price,quantity));
};

Cart.prototype.saveToLocalStorage = function () {
    
    let data = JSON.stringify(this.items);
    localStorage.setItem('cart', data);
};

Cart.prototype.removeItem = function (item) {
   
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].product === item.product) {
            this.items.splice(i, 1);
        }
    }
   
};

const CartItem = function (product,price) {
    this.product = product;
    this.price = price;
    this.quantity = 1;
};

// Product contructor.
const Product = function (filePath, name, price) {
    this.filePath = filePath;
    this.name = name;
    this.price = price;
    Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
    new Product('img/Golden parade.jpg', 'Golden Parade', 30 );
    new Product('img/Red tulip.jpg', 'Red Tulip', 60 );
    new Product('img/white tulips.jpg', 'White Tulips', 90 );
    new Product('img/Glamour flowers.jpg', 'Glamour flowers', 99 );
    new Product('img/simple beauty.jpg', 'Simple Beauty', 150 );
    new Product('img/Graceful pink.jpg', 'Graceful Pink', 170 );
    new Product('img/Softly speaking.jpg', 'Softly Speaking', 200 );
    new Product('img/Sun flower.jpg', 'Sun Flower', 250);
    new Product('img/Yellow sunshine.jpg', 'Yellow Sunshine',30 );
    new Product('img/Warm Spirit.jpg', 'Warm Spirit', 60 );
    new Product('img/Rose And Lily Classic.jpg', 'Rose And Lily', 90 );
    new Product('img/rainbow.jpg', 'Rainbow',99 );
}


generateCatalog();

let arr = [];

function updateCounter() {
    
    let countEl = document.getElementById('itemCount');
    for (let index = 0; index < cart.items.length; index++) {
        arr[index] = cart.items[index].quantity;
    }
    if(!Array.isArray(arr)) return;
    let totalNumber = 0;
        for (let i=0,l=arr.length; i<l; i++) {
           totalNumber+=arr[i];
           console.log(totalNumber);
    }

    console.log(arr);
        countEl.textContent = totalNumber;
    console.log(countEl);
    
    let data = JSON.stringify(`${totalNumber}`);
    localStorage.setItem('count', data);
        
    }

      