'use strict';
// Задание №3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(product => {
    product.price = product.price * 0.85;
})

