// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

let i = 0;

function checknum() {
    while (i < 100) {
        for (let j = 2; j < i; j++)
            if (i % j == 0) {
                flag = false;
                break; // выйдем из цикла
            } else {
                console.log(i);
                break;
            }
        i++;
    }
}

checknum();

// 2. a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины

let basket = [3300, 1500, 2000];

function countBasketPrice(goods) {
    let price = 0;
    for (let i = 0; i < goods.length; i++) {
        price += goods[i];
    }

    return price;
}

priceInBasket = countBasketPrice(basket);

console.log(priceInBasket);

// 4. * Нарисовать пирамиду из 20 рядов с помощью console.log
let exes = 'x';
for (var f = 0; f < 20; f++) {
    console.log(exes);
    exes = exes + 'x';
}