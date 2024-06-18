// +++ Колбек функції +++ // 

function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet); // "Registering Mango!"
															 // "Welcome Mango!"

registerGuest("Mango", notify); // "Registering Mango!"
																// "Dear Mango, your room will be ready in 30 minutes"

// name — ім’я користувача
// callback — посилання на функцію, яку треба викликати в тілі
// registerGuest і передати їй ім'я користувача


// +++ Інлайн-колбеки +++

// Якщо колбек-функція маленька і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Такі функції називаються інлайн-колбеки. Вони будуть доступні тільки в якості значення параметра і більше ніде в коді.

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

// Передаємо інлайн-функцію greet у якості колбека
registerGuest("Mango", function greet(name) {
  console.log(`Welcome ${name}!`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest("Poly", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});


// +++ Метод forEach(callback) +++

array.forEach(function callback(element, index, array) {
  // Тіло колбек-функції
});


// Це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.
// Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
// * Поелементно перебирає масив array
// * Викликає колбек-функцію для кожного елемента масиву
// * Повертає undefined, навіть якщо явно задати вираз після return

const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});


// +++ Стрілочні функції +++

// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// Якщо параметр один, його можна оголошувати без круглих дужок.
const add = a => {
  return a + 5;
};

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

const greet = () => {
  console.log("Hello!");
};

// +++ Явне повернення +++

// Запис із фігурними дужками

// Якщо є фігурні дужки і функція повинна повертати якесь значення, необхідно явно поставити return. 
// Це називається явне повернення(explicit return).

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// +++ НЕявне повернення +++

// Запис без фігурних дужок

// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. 
// Це називається неявне повернення(implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.

const add = (a, b, c) => a + b + c;


// +++ Псевдомасив arguments +++

// У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. 
// Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]


// +++ Колбеки +++

// Анонімні стрілочні функції відмінно підходять для колбеків перебираючих методів масиву завдяки коротшому синтаксису оголошення, особливо якщо код у тілі функції не громіздкий.

const numbers = [5, 10, 15, 20, 25];

// Звичайна анонімна функція
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

// Стрілочна анонімна функція
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});

// Стрілочну колбек-функцію також можна оголошувати окремо й передавати на неї посилання. Це варто робити, якщо одна функція використовується в декількох місцях програми або якщо вона громіздка.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};

numbers.forEach(logMessage);

// +++ Функція з побічними ефектами +++

// Це функція, яка в процесі виконання може:

// * змінювати або використовувати глобальні змінні
// * змінювати значення аргументів посилального типу
// * виконувати операції введення-виведення тощо

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
console.log(numbers); // [2, 4, 6, 8, 10]

// +++ Чиста функція(pure function) +++

// Це функція, результат якої залежить тільки від значень переданих аргументів.
// За умови однакових аргументів вона завжди повертає один і той самий результат
// не має побічних ефектів, тобто не змінює значення аргументів.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Мутація вихідних даних не відбулася
console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// +++ Перебираючі методи +++

// У JavaScript є методи масивів, які прийшли з функціональних мов. Більшість із перебираючих методів масивів — це чисті функції.
// Усі перебираючі методи масивів мають схожий синтаксис.

array.method(callback(currentValue, index, array))

// У більшості методів колбек-функції, які є їхнім аргументом, отримують три наступні параметри:

// * першим параметром буде значення поточного елемента масиву 'currentValue'
// * другим параметром буде індекс поточного елемента масиву 'index'
// * третім параметром буде посилання на сам вихідний масив 'array'

array.method((item, idx, arr) => {
  // логіка, яка буде виконуватися на кожній ітерації
});

// Усі параметри, окрім значення поточного елемента масиву item, необов'язкові.

array.method(item => {
  // логіка, яка буде виконуватися на кожній ітерації
});

// +++ Метод map() +++

array.map((element, index, array) => {
  // Тіло колбек-функції
});

// * Поелементно перебирає оригінальний масив
// * Не змінює оригінальний масив
// * Результат роботи колбек-функції записується в новий масив
// * Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]


// +++ Масив об'єктів / Метод map() +++

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// +++ Метод flatMap() +++

// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках,
// коли результат — це багатовимірний масив, який необхідно «розгладити».

array.flatMap((element, index, array) => {
  // Тіло колбек-функції
});

const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses)
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses)
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];


// +++ Метод filter() +++ 

// Метод filter(callback) використовується для єдиної операції — фільтрації масиву. 
// Під фільтрацією масиву мається на увазі відбір усіх елементів з колекції за певним критерієм.

array.filter((element, index, array) => {
  // Тіло колбек-функції
});

// * Не змінює оригінальний масив.
// * Поелементно перебирає оригінальний масив.
// * Повертає новий масив.
// * Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції.
// * Якщо колбек повернув true, елемент додається в масив, що повертається.
// * Якщо колбек повернув false, елемент не додається в масив, що повертається.
// * Якщо жоден елемент не задовольнив умову, повертає порожній масив.

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0  

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0  

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []
// до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився


// +++ Метод filter() на масиві об'єктів +++

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

const average = students.filter(
  (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston


// +++ Метод find() +++

// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, 
// після чого перебирання масиву припиняється.
// Тобто він, на відміну від методу filter(callback), шукає до першого збігу.

array.find((element, index, array) => {
  // Тіло колбек-функції
});

// * Не змінює оригінальний масив
// * Поелементно перебирає оригінальний масив
// * Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true
// * Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined
// * Метод find() використовується для одного завдання — пошуку першого елемента, який задовольняє умову.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); // undefined


// +++ Метод every() +++

// Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.

array.every((element, index, array) => {
  // Тіло колбек-функції
});

// * Не змінює оригінальний масив
// * Поелементно перебирає оригінальний масив
// * Повертає true, якщо всі елементи масиву задовольняють умову
// * Повертає false, якщо хоча б один елемент масиву не задовольняє умову
// * Перебирання масиву припиняється, якщо колбек повертає false


// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

const products = [
	{ name: "apple", quantity: 2 },
	{ name: "orange", quantity: 5 },
	{ name: "plum", quantity: 0 },
];

const hasEveryProduct = products.every(product => product.quantity > 0);
console.log(hasEveryProduct); // false


// +++ Метод some() +++

// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

array.some((element, index, array) => {
  // Тіло колбек-функції
});

// * Не змінює оригінальний масив
// * Поелементно перебирає оригінальний масив
// * Повертає true, якщо хоча б один елемент масиву задовольняє умову
// * Повертає false, якщо жоден елемент масиву не задовольняє умову
// * Перебирання масиву припиняється, якщо колбек повертає true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший від нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший від нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true


// Зверни увагу на відмінність між методом every та методом some:
// Метод every() перевіряє, чи задовольняють усі елементи умову колбек - функції.
// Метод some() перевіряє, чи задовольняє хоча б один елемент умову колбек - функції.


// +++ Метод reduce() +++


// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату. 
// Трохи складніший за інші методи для засвоєння, але результат вартий того.


array.reduce((previousValue, element, index, array) => {
  // Тіло колбек-функції
}, initialValue);

// 1-й параметр (previousValue) — це акумулятор, тобто проміжний результат.
// Значення, яке поверне колбек - функція на поточній ітерації,
// буде значенням цього параметра на наступній ітерації;

// 2-й параметр — поточний елемент масиву;

// 3-й параметр — індекс поточної ітерації;

// 4-й параметр — посилання на вихідний масив.


// * Не змінює оригінальний масив
// * Поелементно перебирає оригінальний масив
// * Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
// * Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію

// Метод reduce() очікує 2 параметри:

// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;

// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.


const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 12


// +++ Метод reduce() і масив об'єктів +++

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

// У прикладі метод reduce() використовується для обчислення суми значень властивості score для всіх об'єктів масиву students.

// Починаючи зі значення 0, колбек-функція обчислює суму значень властивості score для кожного об'єкта масиву students. Результат (сума) зберігається у змінній totalScore.

// const averageScore обчислює середнє значення score для всіх об'єктів масиву students, шляхом ділення суми всіх балів на кількість студентів.

// +++ Метод toSorted() +++

// * Сортує вихідний масив
// * Повертає новий масив
// * За замовчуванням сортує за зростанням

// 
array.toSorted();

// 
const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// +++ Масив рядків +++

// Масив рядків сортується за алфавітом

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// +++ Свій порядок сортування чисел +++

// Для зазначення свого порядку сортування методу toSorted(compareFunction)
// потрібно передати колбек - функцію з двома параметрами.

array.toSorted((a, b) => {
  // Callback function body
});

// Сортування за зростанням

// Якщо виклик compareFunction(a, b) повертає будь - яке негативне значення,
// тобто a менше b, сортування поставить a перед b.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Сортування за спаданням

// Якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, 
// тобто b більше a, сортування поставить b перед a.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = scores.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// +++ Свій порядок сортування рядків +++

// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, 
// використовується метод рядків localeCompare().

firstString.localeCompare(secondString)

// Він викликається на рядку, який потрібно порівняти (firstString) з тим, 
// що був переданий йому як аргумент(secondString).

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0

// * Повертає негативне значення, якщо firstString повинен бути перед secondString
// * Повертає позитивне значення, якщо firstString повинен бути після secondString
// * Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється

const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]


// +++ Сортування об'єктів +++

// Під час роботи з масивом об'єктів сортування виконується за числовим або рядковим значенням певної властивості.

// * за зростанням кількості балів
// * за спаданням кількості балів
// * за ім'ям студента в алфавітному порядку

const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);


// +++ Ланцюжки методів +++

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

//  +++ Групування викликів методів у ланцюжки +++

const names = students
  .toSorted((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]


// На масиві викликаємо метод toSorted()
// До результату роботи методу toSorted() застосовуємо метод map()
// Змінній names присвоюється результат роботи методу map()

// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів
// До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів
// На результаті методу filter() викликаємо toSorted()
// Змінній uniqueSortedCourses присвоюється результат роботи методу toSorted()

