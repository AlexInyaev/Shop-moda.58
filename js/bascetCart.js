class BascetCart{
    constructor(basket, basketCart, productsCatolog){
        this.basket = document.querySelector(basket);
        this.basketCart = document.querySelector(basketCart);
        this.productsCatolog = productsCatolog;
        this.create();
    }

create() {
    console.log(this.getbasketCart());
    
    }
    getProductCart() {
        var products = basketStore.getProducts();
        var productCart = [];
        for (var i=0; i<this.productsCatolog.length; i++){
            if (producrs.indexOf(this.productsCatolog[i].id)!== -1){
                basketCart.push(this.productsCatolog[i]);
            }
        }
        return productCart;
    }
}
var bascetCart = new BascetCart('.basket','.basketCart',productsCatolog);