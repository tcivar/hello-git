"use strict";

//Uncaught ReferenceError: getSquare is not defined
console.log(getSquare(3));

/**
 * Функция возводит аргумент в квадрат.
 * @param {number} x
 * @returns {number}
 */
let getSquare = function(x) {
    return x * x;
};
