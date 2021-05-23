'use strict '
let proudects=[];


function ProudectsImages(proudectsName,price){
 this.proudectsName= proudectsName.split(".")[0];
 this.source='img/' + proudectsName;
 this.price=price;
 proudects.push(this)

}

let proudectsImg = ['Golden parade.jpg','Red tulip.jpg','white tulips.jpg','Glamour flowers.jpg',
                     'simple beauty.jpg','Graceful pink.jpg','Softly speaking.jpg','Sun flower.jpg',
                    'Yellow sunshine.jpg','Warm Spirit.jpg', 'Rose And Lily Classic.jpg','rainbow.jpg'];
                    let prices=['30$','60$','90$','99$','150$','170$','200$','250$','30$','60$','90$','99$'];
                    for (let index = 0; index < proudectsImg.length; index++) {
                        new ProudectsImages(proudectsImg[index],prices[index]);
                        
                    }             
              
                function renderImg() {
                    
                    let divEl = document.getElementById("row");
                    
                    for(let i =0; i<proudectsImg.length;i++){

                        let imgEl = document.createElement("img");
                        let pEl = document.createElement("p");
                        let ulEl=document.createElement("ul");
                        let liEl =document.createElement('li');
                        imgEl.setAttribute("class","imgsize");
                        ulEl.setAttribute('class','ulsize');
                        divEl.appendChild(imgEl);
                        divEl.appendChild(pEl);
                        divEl.appendChild(ulEl);
                        ulEl.appendChild(liEl);

                        imgEl.src=`${proudects[i].source }`;
                        
                        pEl.textContent=`${proudects[i].proudectsName}`;
                        
                        liEl.textContent=`${proudects[i].price}`;
                
                        
                    }
                }

                
            
           
renderImg();
