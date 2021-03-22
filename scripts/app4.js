'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
//1. Получить массив со всеми продуктами у которых есть фотографии
let newArray = products.filter(product => "photos" in product && product.photos != 0);
//2.Выводим новый массив
console.log(newArray);
//3.Отсортировать товары по цене,от низкой к высокой.
products.sort((a, b) => a.price > b.price ? 1 : -1);
//выводим на консоль отсортированый массив
console.log(products);