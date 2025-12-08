let income = 10000;
let rent = 4000;
let food = 2000;
let transport = 400;
let entertainment = 1500;

let totalExpenses = rent + food + transport + entertainment;
let savings = income - totalExpenses;

if (savings > 0) {
    console.log("У вас залишилися гроші");
} else if (savings == 0) {
    console.log("Ви витратили все");
} else {
    console.log("Ви в мінусі!");
}

