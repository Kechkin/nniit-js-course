//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы

function isInteger(n) {
    return n ^ 0 === 0 ? true : false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно

function even() {
    const arr = [];
    for(let i = 1; i <= 20; i++){
        if(i % 2 === 0){
            arr.push(i);
        }
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл

function sumTo(n) {
    let count = 0;
    for(let i = 0; i <= n; i++){
        count+=i;
    }
    return count;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию

function recSumTo(n) {
    let count = 0;
    if(n === 0){
        return count;
    }else{
        count+=n;
        return n + recSumTo(n - 1);
    }
}

//Напишите функцию, считающую факториал заданного числа

function factorial(n) {
    return  n === 0 ? 1 : n * factorial(n - 1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень

function isBinary(n) {
    return !(n & (n - 1)) && n !== 0 ? true : false;
}

//Напишите функцию, которая находит N-е число Фибоначчи

function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
