let income = Number(prompt("Введіть дохід:"));
let rent = Number(prompt("Введіть витрати на оренду:"));
let food = Number(prompt("ВВедіть витрати на їжу:"));
let transport = Number(prompt("ВВедіть витрати на транспорт:"));
let entertainment = Number(prompt("Введіть витрати на розваги:"));

let totalExpenses = rent + food + transport + entertainment;
let savings = income - totalExpenses;

// console.log(('Ваші витрати'),totalExpenses);
// console.log(('Залишок'), savings);

if (savings > 0) {
    message = "У вас залишилися гроші";
} else if (savings == 0) {
    message = "Ви витратили все";
} else {
    message = "Ви в мінусі!";
}

alert("Ваші витрати:" +  totalExpenses +"\nЗалишок:" + savings + "\n"+ message);