var arr=['img/2.png','img/2.png','img/2.png','img/2.png','img/2.png','img/2.png','img/2.png'];
var discription=['Платье бирюза', 'Платье бирюза', 'Платье бирюза', 'Платье бирюза', 'Платье бирюза', 'opis6', 'opis7'];
var price=['price1', 'price2', 'price3', 'price4', 'price5', 'price6', 'price7'];

var content=document.querySelector('.content');

 if(arr.length==discription.length && discription.length==price.length){
    var i;
    var html='';
for (i=0; i<arr.length; i++) {
    html+=`<div class="item" id="${i}">
                <div class="image" style=" background-image: url(${arr[i]});"></div>
                <h3>${discription[i]}</h3>
                <p class="price">${price[i]}</p>
            </div>`
            content.innerHTML=html;
}
 } else {
     document.write('Не верно внесены данные в массивы');
 }
