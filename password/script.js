function checkPassword() {
  let password = prompt("Введіть пароль:");
  
  if (password === "hello") {
    alert("Доступ дозволено!");
  } else {
    alert("Неправильний пароль!");
  }
}

checkPassword();

function startCheck() {
  let proceed = confirm("Хочете увійти?");
  
  if (proceed) {
    checkPassword();
  } else {
    alert("Ви скасували вхід");
  }
}

startCheck();

function checkPassword() {
  let password;
  let attempts = 3;

  while (attempts > 0) {
    password = prompt("Введіть пароль (залишилось спроб: " + attempts + "):");

    if (password === "hello") {
      alert("Доступ дозволено!");
      return;
    } else {
      alert("Неправильний пароль!");
    }

    attempts--;
  }

  alert("Усі спроби вичерпано. Доступ заблоковано.");
}

checkPassword();