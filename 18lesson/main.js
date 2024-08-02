console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
const myNum = 10;
// ім'я змінної: myStr, значення: 'some string'
const myStr = 'some string';
// ім'я змінної: myBool, значення: true
const myBool = true;
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
const myArr = [1,2,3,4,5];
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
const myObj = {
    first: 'First Name',
    last: 'Last Name'
};

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
let decimal2 = myNum.toFixed(2);
// decimal2

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
let i = 1;
console.log(i++) // 1 (далі і вже 2)
console.log(++2) // 3 (і вже 2, та префіксний додав 1, маємо 3)
// i

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
let myTest = 20;
myNum = myTest+=1; // 21
myNum = myTest-=1; // 19
myNum = myTest*=2; // 40
myNum = myTest/=2; // 10
myNum = myTest%=7; // 6 (ділимо на 7, 20-14 = 6)
// myTest
// +=
// –=
// *=
// /=
// %=

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow
const myPi = Math.PI * 2; // 6.283185307179586
const myRound = Math.round(89.279); // 89
const myRandom = Math.floor(Math.random()*10);
const myPow = Math.pow(3, 5);
console.log(myPi)
console.log(myRound)
console.log(myRandom)
console.log(myPow)
/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */
const strObj = {
    str: 'Мама мыла раму, рама мыла маму'
}
console.log(strObj.str.length) // 30

// Мама мыла раму, рама мыла маму
// strObj

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama
let isRamaPos = strObj.str.indexOf('рама') // 16
let isRama = strObj.str.includes('рама') // true

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

let strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму','Мама моет раму, Рама держит маму')
console.log(strReplace)
console.log(strObj.str) 
// strReplace

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

var someStr = 'some STRING'
var upperStr = someStr.toUpperCase();
console.log(upperStr)
var lowerStr = someStr.toLowerCase();
console.log(lowerStr)
