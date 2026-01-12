// function square(number) {
//     return number ** 2
// }

// let result = square(4);
// console.log("Результат:", result);

//ФУНКЦІЯ ПЕРЕВІРКИ ПАРОЛЯ
// function checkPassword() {
//   let password = prompt("Введіть пароль:");
  
//   if (password === "1234") {
//     alert("Доступ дозволено!");
//   } else {
//     alert("Неправильний пароль!");
//   }
// }

// checkPassword();

// function startCheck() {
//   let proceed = confirm("Хочете увійти?");
  
//   if (proceed) {
//     checkPassword();
//   } else {
//     alert("Ви скасували вхід");
//   }
// }

// startCheck();

// function checkPassword() {
//   let password;
//   let attempts = 3;

//   while (attempts > 0) {
//     password = prompt("Введіть пароль (залишилось спроб: " + attempts + "):");

//     if (password === "1234") {
//       alert("Доступ дозволено!");
//       return;
//     } else {
//       alert("Неправильний пароль!");
//     }

//     attempts--;
//   }

//   alert("Усі спроби вичерпано. Доступ заблоковано.");
// }

// checkPassword();

function calculator() {
  let repeat = true;

  while (repeat) {
    let a = prompt("Введіть перше число:");
    let b = prompt("Введіть друге число:");

    if (a === null || b === null) {
      alert("Калькулятор завершено");
      break;
    }

    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
      alert("Потрібно вводити числа!");
      continue;
    }

    let operation = prompt("Введіть операцію: +  -  *  /");

    if (operation === null) {
      alert("Калькулятор завершено");
      break;
    }

    let result;

    switch (operation) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        if (b === 0) {
          alert("Ділення на нуль неможливе!");
          continue;
        }
        result = a / b;
        break;
      default:
        alert("Невідома операція!");
        continue;
    }

    alert(`Результат: ${result}`);

    repeat = confirm("Хочете виконати ще один розрахунок?");
  }
}

calculator();
