'use strict';
//Задание 1
// цикл вывода чисел в консоль
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + ' - это ноль');
    } else if (i % 2 == 0) {
        console.log(i + ' - четное число');
    } else {
        console.log(i + ' - нечетное число');
    }
}