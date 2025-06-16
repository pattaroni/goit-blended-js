// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// let styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// for (let i = 0; i < styles.length; i++) {
//   if (styles[i] === "blues") {
//     styles[i] = "classic";
//   }
// }
// console.log(styles);

// function logItems(array) {
//   for (let i = 1; i < array.length + 1; i++) {
//     console.log(`${i} - ${array[i - 1]}`);
//   }
// }
// logItems(["hello", "world", "!!!"]);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві - виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє - виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const username = prompt("Введіть ім'я");
//   array.includes(username)
//     ? alert(`Welcome, ${username}`)
//     : alert("User not found");
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//   let sum = 0;
//   args.forEach((arg) => {
//     if (typeof arg != "number") {
//       return "Це не числа";
//     } else {
//       sum += arg;
//     }
//     return sum;
//   });
// for (const arg of arguments) {
//   if (typeof arg === "number") {
//     sum += arg;
//   } else {
//     return "Це не числа!";
//   }
// }
// return sum / arguments.length;
//   return sum / args.length;
// }
// console.log(calculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // уточнення: складати необхідно перше число з другим, потім друге - з третім,
// // третє - з четвертим і так до кінця.
// // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// let sumArray = [];
// function sumNumbers(someArray) {
//   for (let i = 0; i < someArray.length - 1; i++) {
//     sumArray.push(someArray[i] + someArray[i + 1]);
//   }
//   return sumArray;
// }
// console.log(sumNumbers(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const arr = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   for (number of numbers) {
//     if (typeof number != "number") {
//       return "Sorry, it is not an array!";
//     }
//   }
//   return Math.min(...numbers);
// }
// console.log(findSmallestNumber(arr));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   const stringArr = string.split(" ");
//   let arrayIndex = [];
//   for (element of stringArr) {
//     arrayIndex.push(element.length);
//   }
//   arrayMax = Math.max(...arrayIndex);
//   return stringArr[arrayIndex.indexOf(arrayMax)];
// }
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// for (key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// const values = Object.values(salaries);
// for (value of values) {
//   sum += value;
// }
// console.log(sum);

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
// };
