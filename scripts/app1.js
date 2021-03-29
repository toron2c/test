'use strict';
//Конструктор Product в стиле ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
}
