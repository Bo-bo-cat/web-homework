// об’єкт “книга” з властивостями: title, author, year, і виведіть їх

// let book = {
//     title: 'three million years',
//     author: 'noName',
//     year: 2010
// };


// Завдання: пошук і сортування масивів

// let numbers = [5, 12, 8, 130, 44];

// let search = prompt("Введіть число для пошуку:");
// search = Number(search);

// if (numbers.includes(search)) {
//   alert("Число " + search + " знайдено!");
// } else {
//   alert("Числа " + search + " немає в масиві.");
// }

// let sorted = numbers.sort((a, b) => a - b);
// alert("Відсортований масив: " + sorted);

// let student = {
//   name: "Іван",
//   age: 20,
//   city: "Київ"
// };

// alert("Студент: " + student.name + ", " + student.age + " років, місто " + student.city);

//  Комбіноване завдання (10 хв) Створіть масив об’єктів студентів і виведіть усіх старших за 18 років.

// let students = [
//   {name: "Оля", age: 17},
//   {name: "Іван", age: 20},
//   {name: "Марія", age: 22}
// ];

// for (let s of students) {
//   if (s.age >= 18) {
//     console.log(s.name + " (" + s.age + ")");
//   }
// }

// Створити список студентів.

// Масив об’єктів, де кожен студент має:

// // name,
// // age,
// // grade (оцінка).
// // Написати програму, яка:

// виводить список усіх студентів,
// знаходить студента з найвищою оцінкою,
// обчислює середній бал групи.

let listStudents = [
    {name: 'Dima', age: 18 , grade:67},
    {name: 'Oleh', age: 19, grade:69},
    {name: 'Rostya', age: 18, grade:70},
    {name: 'Nazar', age: 17 , grade:78},
    {name: 'Philip', age: 19, grade:72} 
];
//1
for (let student of listStudents) {  // було  console.log (listStudent.name);
    console.log (student.name);
}
//2
let maxGrade = listStudents[0]; // -

for (let student of listStudents) {
    // grade = 0; не вірно
    // maxGrade =     не вірно

  if (student.grade > maxGrade.grade ) {
    maxGrade = student;
  }
}
console.log('Найвища оцінка:', maxGrade.name, " (" + maxGrade.grade + ")"); //було в циклі


//3
let sum = 0; //-
for (let student of listStudents) { //-
    sum += student.grade; //-
}

let averageScore = sum / listStudents.length;
console.log ('Середній бал:'+ averageScore);


let sortedAsc = [...listStudents].sort((a, b) => a.grade - b.grade);

console.log("Сортування за зростанням:");
for (let student of sortedAsc) {
  console.log(student.name, student.grade);
}