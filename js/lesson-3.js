// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => number ** 2);
console.log(doubleNumbers);

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const valuesData = data.flatMap((value) => value.values);
console.log(valuesData);

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const boolPeople = people.some((item) => item.age < 20);
console.log(boolPeople);

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers2 = [2, 4, 6, 8, 10];

const isDoubleNumbers = numbers2.every((number) => number % 2 === 0);
console.log(isDoubleNumbers);

// Знайдіть перше непарне число

const numbers3 = [2, 1, 6, 8, 9, 10, 12];

const notDoubleNumber = numbers3.find((number) => number % 2 != 0);
console.log(notDoubleNumber);

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const sortedNumbersArray = numbersArray.toSorted((a, b) => a - b);
console.log(sortedNumbersArray);

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ["banana", "orange", "apple", "pear"];

const sortedStringArray = stringArray.toSorted((a, b) => a.localeCompare(b));
console.log(sortedStringArray);

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const sortedUsers = users.toSorted((a, b) => a.age - b.age);
console.log(sortedUsers);

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const userOlderThan20 = user.filter((item) => item.age > 20);
console.log(userOlderThan20);

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbers4 = [1, 2, 3, 4, 5];

const sumNumbers = numbers4.reduce((total, item) => {
  total += item;
  return total;
}, 0);
console.log(sumNumbers);

// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:

class Calculator {
  constructor(value) {
    this.value = value;
  }

  number(setValue) {
    this.value = setValue;
    return this;
  }

  add(addValue) {
    this.value += addValue;
    return this;
  }

  subtract(minusValue) {
    this.value -= minusValue;
    return this;
  }

  multiply(multiplyValue) {
    this.value *= multiplyValue;
    return this;
  }

  divide(divideValue) {
    this.value /= divideValue;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const calc = new Calculator();

const result = calc
  .number(10) // Встановлюємо початкове значення 10
  .add(5) // Додаємо 5 (10 + 5 = 15)
  .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
  .multiply(4) // Множимо на 4 (12 * 4 = 48)
  .divide(2) // Ділимо на 2 (48 / 2 = 24)
  .getResult(); // Отримуємо результат: 24

console.log(result); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

class Client {
  #login;
  #email;

  constructor(params) {
    this.#login = params.login;
    this.#email = params.email;
  }

  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const client1 = new Client({
  login: "admin",
  email: "123@test.com",
});
console.log(client1.login);
console.log(client1.email);
client1.login = "editor";
client1.email = "123@editor.com";
console.log(client1.login);
console.log(client1.email);

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor(params) {
    this.name = params.name;
    this.age = params.age;
    this.gender = params.gender;
    this.email = params.email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(params) {
    super(params);
    this.salary = params.salary;
    this.department = params.department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const employee1 = new Employee({
  name: "Вікторія",
  age: 20,
  gender: "жінка",
  email: "viktoria@example.com",
  salary: 30000,
  department: "IT",
});
console.log(employee1.getDetails());
console.log(employee1.getEmployeeDetails());
