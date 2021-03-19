"use strict";
// 4-e задание.
/**
 * Функция сложения, складывает параметры
 */
const sum = (a, b) => a + b;
/**
 * Функция вычитания, вычитает из параметра a, параметр b
 */
const deduct = (a, b) => a - b;
/**
 * Функция умножения, умножает параметры
 */
const multiply = (a, b) => a * b;
/**
 * Функция деления , делит параметр a на параметр b
 */
const divide = (a, b) => a / b;

//5-е задание.
/**
 * Функция определяет математическую операцию и вызывает функцию которая отвечает за данную операцию,передавая в неё значения аргументов, и возвращает результат.
 * @param {Number} arg1 
 * @param {Number} arg2 
 * @param {String} operation 
 * @returns {Number} возвращает полученный результат
 */
const mathOperation = (arg1, arg2, operation) => {
    switch (operation) {
        case "сложение":
            return sum(arg1, arg2);
        case "вычитание":
            return deduct(arg1, arg2);
        case "умножение":
            return multiply(arg1, arg2);
        case "деление":
            return divide(arg1, arg2);
        default:
            return "Такой операции не предусмотренно";
    }
}