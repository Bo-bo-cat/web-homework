// const btn = document.getElementById("toggle");

// const savedTheme = localStorage.getItem("theme"); // "light" або "dark"
// if (savedTheme === "dark") {
//   document.body.classList.remove("light");
//   document.body.classList.add("dark");
// } else {
//   document.body.classList.remove("dark");
//   document.body.classList.add("light");
// }

// //перемкнути тему і зберегти
// btn.addEventListener("click", function () {
//   const isDark = document.body.classList.contains("dark");

//   if (isDark) {
//     document.body.classList.remove("dark");
//     document.body.classList.add("light");
//     localStorage.setItem("theme", "light");
//   } else {
//     document.body.classList.remove("light");
//     document.body.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   }
// });

const form = document.getElementById("noteForm");
const textarea = document.getElementById("message");
const notesList = document.getElementById("notesList");
const clearBtn = document.getElementById("clearBtn");

// 1) завантажили масив або зробили порожній
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// 2) показали одразу при старті
showNotes();

function showNotes() {
  notesList.innerHTML = "";
  for (let note of notes) {
    notesList.innerHTML += `<li>${note}</li>`;
  } 
}

// 3) додавання нотатки
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let text = textarea.value.trim();
  if (text === "") return;

  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));

  textarea.value = "";
  showNotes();
});

// 4) видалити всі
clearBtn.addEventListener("click", function () {
  notes = [];
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
});
