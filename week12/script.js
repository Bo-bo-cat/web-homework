const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const email = emailInput.value.trim(); 
  error.textContent = ""; 

  if (email === "") {
    error.textContent = "Поле не може бути порожнім ";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    error.textContent = "Email повинен містити @ та крапку";
    return;
  }

  error.textContent = "Email коректний ";
});
