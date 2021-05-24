'use strict '
let proudects = [];


function ProudectsImages(proudectsName, price) {
    this.proudectsName = proudectsName.split(".")[0];
    this.source = 'img/' + proudectsName;
    this.price = price;
    proudects.push(this)

}

let proudectsImg = ['Golden parade.jpg', 'Red tulip.jpg', 'white tulips.jpg', 'Glamour flowers.jpg',
    'simple beauty.jpg', 'Graceful pink.jpg', 'Softly speaking.jpg', 'Sun flower.jpg',
    'Yellow sunshine.jpg', 'Warm Spirit.jpg', 'Rose And Lily Classic.jpg', 'rainbow.jpg'];
let prices = ['30$', '60$', '90$', '99$', '150$', '170$', '200$', '250$', '30$', '60$', '90$', '99$'];
for (let index = 0; index < proudectsImg.length; index++) {
    new ProudectsImages(proudectsImg[index], prices[index]);

}

function renderImg() {

    let divEl = document.getElementById("box");

    for (let i = 0; i < proudectsImg.length; i++) {
        // divEl.setAttribute("class", "image");
        
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
        divE5.setAttribute("class", "back face")


        let imgEl = document.createElement("img");
        let pEl = document.createElement("h1");
        let para = document.createElement('p');
        divE5.appendChild(para);
        // imgEl.setAttribute("class", "imgsize");
        divE4.appendChild(imgEl);
        divE5.appendChild(pEl);
        // divE4.appendChild(ulEl);
        divE5.appendChild(para);

        imgEl.src = `${proudects[i].source}`;

        pEl.textContent = `${proudects[i].proudectsName}`;

        para.textContent = `${proudects[i].price}`;


    }
}




renderImg();
