// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// 															 // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// 																// "Dear Mango, your room will be ready in 30 minutes"

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// Metod map //

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// const changeEven = (numbers, value) => {
//   const newArray = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//   }
//   });

//   return newArray;
// };

// const array = [1, 2, 3, 4, 5];
// const doubledArray = changeEven(array, 2);

// console.log(doubledArray);
// console.log(array);

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planets);
// console.log(planetsLengths);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const scores = students.map(student => student.score);
// console.log(scores); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// // Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг (властивість title) з масиву books.

// const titles = books.map(book => book.title);
// console.log(titles);

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // Оригінальний масив values не змінився

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// console.log(evenNumbers);

// const oddNumbers = numbers.filter(value => value % 2 !== 0);
// console.log(oddNumbers);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // const getUsersWithEyeColor = (users, color) => {
// //   return users.filter(user => user.eyeColor === color);
// // };

// // const usersWithBlueEyes = getUsersWithEyeColor(users, "brown");
// // console.log(usersWithBlueEyes);

// // Функція для фільтрації користувачів за кольором очей
// const getUsersWithEyeColor = (users, color) => {
//   const filteredUsers = users.filter(user => user.eyeColor === color);
//   console.log(`Користувачі з кольором очей "${color}":`, filteredUsers);
//   return filteredUsers;
// };

// // Виклик функції та вивід результату в консоль
// const usersWithBrownEyes = getUsersWithEyeColor(users, 'brown');
// console.log("Користувачі з коричневими очима:", usersWithBrownEyes);

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // Оригінальний масив values не змінився


// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);

// const worst = students.filter(student => student.score < LOW_SCORE);

// const average = students.filter(student => student.score >= LOW_SCORE && student.score < HIGH_SCORE);

// console.log(best);
// console.log(worst);
// console.log(average);

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// console.log(colorPickerOptions);



// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем. У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час. У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців. Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.

// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };

// const playtimes = Object.values(players);

// const totalPlayTime = playtimes.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes);
// console.log(totalPlayTime);
// console.log(averagePlayTime);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);


// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]


// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// // Викликаємо функцію з аргументами 1, 2 і 3
// const result = add(1, 2, 3);

// // Виводимо результат в консоль
// console.log("Result:", result);