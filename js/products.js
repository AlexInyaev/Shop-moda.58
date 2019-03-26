
     
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
           

            var item = this.getElement({ tagName: 'div', className: 'item',innerText:''});   //пременил innerText:''-чтобы убрать undefined
            var name = this.getElement({ tagName: 'div', className: 'name',innerText: this.productsCatolog[i].name});   //вызвал метод и передал  объект 
            var img = this.getElement({ tagName: 'div', id:this.productsCatolog[i].id,click:`testclick(${this.productsCatolog[i].id})`,  className: 'img',backgroundImage:`url(${this.productsCatolog[i].img})`,innerText:''});   //вызвал метод и передал  объект 
            var size = this.getElement({ tagName: 'div', className: 'size',innerText:'Размер: '+ this.productsCatolog[i].size});
            var btn = this.getElement({ tagName: 'button', className: 'btn'+activeClass, dataId:this.productsCatolog[i].id, innerText:activeText});
            var model = this.getElement({ tagName: 'div', className: 'model',innerText:'Модель: '+this.productsCatolog[i].id});
            
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

            wrapper.appendChild(item);                             //9 чтобы меньше обращаться к дом дереву записавыем эл. в переменную wrapper

        }
        this.container.appendChild(wrapper);                        //9.1 добавил вновь созданные эл-ты. в эл с классом '.gallery' как дочерние
    }
    getElement(options){                                            //приняли объект и сохранили в переменную options
         var element = document.createElement(options.tagName);               //7 создал блочный элемент 
                       

        if('className' in options){
            element.setAttribute('class',options.className);                  //8 добавил к элементу  (class="item"                     
        }
        if('click' in options){
            element.setAttribute('onclick',options.click);                                       
        }
        if('id' in options){
            element.setAttribute('id',options.id);                                       
        }
        if('dataId' in options){
            element.setAttribute('data-id',options.dataId);                                    
        }
        if('innerText' in options){
            element.innerText = options.innerText;                                    
        }
        if('backgroundImage' in options){
            element.style.backgroundImage = options.backgroundImage;                                   
        }

         return element;
    }
     
    acrions() {
        //
    }
}
 var producrs = new Producrs('.gallery','.basket',productsCatolog);               //1 получил экземпляр класса 'Producrs' передал в класс класс'.gallery' и массив productsCatolog 

 //*************************************** basket */
 

 