
     
class Producrs{
    constructor(gallery, basket,productsCatolog) {                              //2 получил класс galery and arr productsCatolog
        this.container = document.querySelector(gallery);            //3 получил класс gallery и записал его в переменную container
        this.basket = document.querySelector(basket);            //3 получил класс gallery и записал его в переменную container
        this.productsCatolog = productsCatolog;                     //4 записал массив productsCatolog в пеоеменную productsCatolog
        this.create();                                             // 5 создал метод create
    }
    create(){
        var wrapper =  document.createElement('slot'); 
         
        var products = basketStore.getProducts();
        this.basket.innerText = products.length;

        for (var i = 0; i<this.productsCatolog.length; i++){       

            var index = products.indexOf(this.productsCatolog[i].id);
			if (index === -1) {
				var activeClass = '';
				var activeText = 'Добавить в корзину';
			} else {
				var activeClass = ' btnActive';
				var activeText = 'Удалить из корзины';
			}
           
            
            var item = serviceCreateElement.getElement({ tagName: 'div', className: 'item',innerText:''});   //пременил innerText:''-чтобы убрать undefined
            var name = serviceCreateElement.getElement({ tagName: 'div', className: 'name',innerText: this.productsCatolog[i].name});   //вызвал метод и передал  объект 
            var img = serviceCreateElement.getElement({ tagName: 'div', id:this.productsCatolog[i].id,click:`testclick(${this.productsCatolog[i].id})`,  className: 'img',backgroundImage:`url(${this.productsCatolog[i].img})`,innerText:''});   //вызвал метод и передал  объект 
            var size = serviceCreateElement.getElement({ tagName: 'div', className: 'size',innerText:'Размер: '+ this.productsCatolog[i].size});
            var btn = serviceCreateElement.getElement({ tagName: 'button', className: 'btn'+activeClass, dataId:this.productsCatolog[i].id, innerText:activeText});
            var model = serviceCreateElement.getElement({ tagName: 'div', className: 'model',innerText:'Модель: '+this.productsCatolog[i].id});
            
            btn.addEventListener('click', function(){   //выбор товара
            var id = this.getAttribute('data-id');
            var result = basketStore.putProduct(id);
            producrs.basket.innerText = result.products.length;
            
            if(result.pushProduct) {
                this.classList.add('btnActive');
                this.innerText = 'Удалить из корзины';
            } else {
                this.classList.remove('btnActive');
                this.innerText = 'Добавить в корзину';
            }
            });

            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(model);
            item.appendChild(size);
            item.appendChild(btn);

            wrapper.appendChild(item);                             

        }
        this.container.appendChild(wrapper);                      
    }
}
 var producrs = new Producrs('.gallery','.basket',productsCatolog);                

 //*************************************** basket */
 

 