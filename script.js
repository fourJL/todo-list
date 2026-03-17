let tasks = [];
let filter = "all";

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return;

  tasks.push({ text, completed: false });
  input.value = "";

  render();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  render();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

function setFilter(type) {
  filter = type;
  render();
}

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let filtered = tasks;

  if (filter === "done") {
    filtered = tasks.filter(t => t.completed);
  } else if (filter === "pending") {
    filtered = tasks.filter(t => !t.completed);
  }

  filtered.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <div class="actions">
        <button class="done" onclick="toggleTask(${index})">✔</button>
        <button class="delete" onclick="deleteTask(${index})">🗑</button>
      </div>
    `;

    list.appendChild(li);
  });
}