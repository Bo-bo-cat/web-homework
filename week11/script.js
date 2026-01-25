let btn = document.getElementById("btn");
let text = document.getElementById("text");
let btntoggle = document.getElementById("btntoggle");

btn.addEventListener("click", function () {
  text.textContent = "Текст змінився!";
  text.classList.toggle("red");
});

btntoggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});