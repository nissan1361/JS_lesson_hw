// 1. Почему код дает именно такие результаты?

var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // 2, так как ++ с лева, "a" увеличивается на 1, и это значение присваивается к "c" 
d = b++;
alert(d); // 1, так как ++ с права, "b" увеличивается на 1, НО к "d" присваивается старое значение: 1
c = (2 + ++a);
alert(c); // 5, так как "а" увеличивается до 3, и к ней прибавляется 2
d = (2 + b++);
alert(d); // 4, так как "b" увеличивается, НО к 2 прибавляется старое значение "b"
alert(a); // 3, так как в ходе предыдущих операций "a" увеличивается до 3
alert(b);

// 2. Чему будет равен x?

var a = 2;
var x = 1 + (a *= 2); // Ответ: 5

// 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

var a;
var b;
a = prompt("Введите А: ");
b = prompt("Введите B: ");

if (a >= 0 && b >= 0) {
    var c = a - b;
    alert(c);
} else if (a < 0 && b < 0) {
    var d = a * b;
    alert(d);
} else if (a < 0 && b > 0 || a > 0 && b < 0) {
    var e = a + b;
    alert(e);
}

// 4. Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15

a = prompt("Введите число от 0 до 15: ");

switch (a) {
    case "0":
        console.log("0");
    case "1":
        console.log("1");
    case "2":
        console.log("2");
    case "3":
        console.log("3");
    case "4":
        console.log("4");
    case "5":
        console.log("5");
    case "6":
        console.log("6");
    case "7":
        console.log("7");
    case "8":
        console.log("8");
    case "9":
        console.log("9");
    case "10":
        console.log("10");
    case "11":
        console.log("11");
    case "12":
        console.log("12");
    case "13":
        console.log("13");
    case "14":
        console.log("14");
    case "15":
        console.log("15");
        break;
    default:
        break;
}

console.log("-----------------");

// 5. Реализовать четыре основные арифметические операции в виде функций 
// с двумя параметрами. Обязательно использовать оператор return

function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function delim(num1, num2) {
    return num1 / num2;
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
// В зависимости от переданного значения выполнить одну из арифметических операций 
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch)

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сложение":
            console.log(plus(arg1, arg2));
            break;
        case "вычитание":
            console.log(minus(arg1, arg2));
            break;
        case "умножение":
            console.log(multiply(arg1, arg2));
            break;
        case "деление":
            console.log(delim(arg1, arg2));
            break;
        default:
            break;
    }
}

mathOperation(10, 32, "сложение");
mathOperation(99, 32, "вычитание");
mathOperation(10, 32, "умножение");
mathOperation(10, 2, "деление");

// 7. * Сравнить null и 0. Объяснить результат

console.log(null); // null - Это отсутствие значения
console.log(0); // 0 - Это значение равно нулю