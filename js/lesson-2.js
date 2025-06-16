'use strict';

//================================================================
/* == 1 == */
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');

styles[styles.indexOf('blues')] = 'classic';

const logItems = array => {
  for (let i = 0; i < array.length; i++) console.log(`${i + 1} - ${array[i]}`);
};

logItems(styles);

//================================================================
/* == 2 == */
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

const checkLogin = arr => {
  const name = prompt('Enter name, please:');
  for (const elem of arr) if (elem === name) return alert(`Welcome, ${name}!`);
  return alert('User not found');
};

checkLogin(['Peter', 'John', 'Igor', 'Sasha']);

/* const checkLogin = arr => {
  const name = prompt('Enter name, please:');
  if (name === null) return alert('Login cancelled');

  const found = arr.find(user => user.toLowerCase() === name.toLowerCase());
  if (found) return alert(`Welcome, ${found}!`);
  return alert('User not found');
}; */

//================================================================
/* == 3 == */
// Напишіть функцію calculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

const calculateAverage = (...args) => {
  let sum = 0;
  for (const elem of args)
    if (typeof elem === 'number') sum += elem;
    else return 'Not a number in arguments!';
  return sum / args.length;
};

console.log(calculateAverage(23, 37, 30, 10));

//================================================================
/* == 4 == */
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

const sumNeighbor = arr => {
  const resArr = [];
  for (let i = 0; i < arr.length - 1; i++) resArr.push(arr[i] + arr[i + 1]);
  return resArr;
};

console.log(sumNeighbor([22, 11, 34, 5, 12, 13, 14, 15]));

//================================================================
/* == 5 == */
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sorry, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

const findSmallestNumber = numbers =>
  Array.isArray(numbers) ? Math.min(...numbers) : 'Sorry, it is not an array!';

console.log(findSmallestNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]));

//================================================================
/* == 6 == */
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

const findLongestWord = str => {
  const arr = str.split(' ');
  let longest = arr[0];
  for (const word of arr) if (word.length > longest.length) longest = word;
  return longest;
};

console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

/* const findLongestWord = str =>
  str
    .split(' ')
    .reduce((longest, word) => (word.length > longest.length ? word : longest)); */

/* const findLongestWord = str => {
  const arr = str.split(' ');
  const longest = Math.max(...str.split(' ').map(word => word.length));
  for (const elem of arr)
    if (elem.length === longest)
      return elem;
};
 */

// Math.max(...str.split(' ').map(word => word.length));

//================================================================
/* == 7 == */
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
  name: 'John',
  age: 20,
  hobby: 'tenis',
  premium: true,
};

const userScript = obj => {
  obj.mood = 'happy';
  obj.hobby = 'skydiving';
  obj.premium = false;
  for (const elem of Object.keys(obj)) console.log(`${elem}:${obj[elem]}`);
};

userScript(user);

//================================================================
/* == 8 == */
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

let sum = 0;
for (const val of Object.values(salaries)) sum += val;

console.log(sum);

//================================================================
/* == 9 == */
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    (this[a] = a), (this[b] = b);
  },
  sum() {
    if (this.exist()) {
      let sum = 0;
      for (const elem of Object.values(this)) sum += elem;
      return sum;
    }
    return 'No such properties';
  },
  mult() {
    if (this.exist()) {
      let mult = 1;
      for (const elem of Object.values(this)) mult *= elem;
      return mult;
    }
    return 'No such properties';
  },
  exist() {
    return Object.keys(this).length > 0;
  },
};

/* calculator.read(2, 8); */

console.log(calculator.sum());
console.log(calculator.mult());

//================================================================
/* == 10 == */
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];

const calcTotalPrice = (fruits, fruitName) => {
  let sum = 0;
  for (const elem of fruits)
    if (fruitName === elem.name) sum += elem.price * elem.quantity;
  return sum;
};

console.log(calcTotalPrice(fruits, 'Банан'));
