const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");

// функція перевірки email через regex
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  error.textContent = "";

  if (email === "") {
    error.textContent = "Поле не може бути порожнім ❌";
    error.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    error.textContent = "Email введено некоректно ❌";
    error.style.color = "red";
    return;
  }

  error.textContent = "Email коректний ✅";
  error.style.color = "green";
});

