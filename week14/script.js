const STORAGE_KEY = "tasks";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

let tasks = [];

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}


function loadTasks() {
  tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}


function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    checkbox.addEventListener("change", function () {
      tasks[index].done = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.done) {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
    }

    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";

    editBtn.addEventListener("click", function () {
      const newText = prompt("Відредагуйте завдання:", task.text);

      if (newText === null) return;

      const trimmed = newText.trim();
      if (trimmed === "") {
        alert("Завдання не може бути порожнім!");
        return;
      }

      tasks[index].text = trimmed;
      saveTasks();
      renderTasks();
    });

    
    const delBtn = document.createElement("button");
    delBtn.textContent = "Видалити";

    delBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}


addBtn.addEventListener("click", function () {

  const text = input.value.trim();

  if (text === "") {
    alert("Введіть завдання!");
    return;
  }

  tasks.push({
    text: text,
    done: false
  });

  input.value = "";

  saveTasks();
  renderTasks();
});


input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addBtn.click();
  }
});


clearBtn.addEventListener("click", function () {

  const confirmDelete = confirm("Видалити всі завдання?");

  if (!confirmDelete) return;

  tasks = [];
  saveTasks();
  renderTasks();
});


loadTasks();
renderTasks();

