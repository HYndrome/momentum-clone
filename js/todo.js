// daily
const dailyTodoForm = document.querySelector("#daily-todo-form");
const dailyTodoInput = dailyTodoForm.querySelector("input");
const dailyTodo = document.querySelector("#daily-todo-list");

let dailyTodos = [];

function saveDailyTodos() {
  localStorage.setItem("dailyTodos", JSON.stringify(dailyTodos));
}

function deleteDailyTodo(event) {
  const li = event.target.parentElement;
  dailyTodos = dailyTodos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveDailyTodos();
}

function paintDailyTodo(newDailyTodoObj) {
  const li = document.createElement("li");
  li.id = newDailyTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newDailyTodoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "✅";
  btn.addEventListener("click", deleteDailyTodo);
  li.appendChild(btn);
  li.appendChild(span);
  dailyTodo.appendChild(li);
}

function dailyTodoSumitHandler(event) {
  event.preventDefault();
  const newDailyTodo = dailyTodoInput.value;
  dailyTodoInput.value = "";
  const newDailyTodoObj = {
    id: Date.now(),
    text: newDailyTodo,
  };
  dailyTodos.push(newDailyTodoObj);
  paintDailyTodo(newDailyTodoObj);
  saveDailyTodos();
}

dailyTodoForm.addEventListener("submit", dailyTodoSumitHandler);

const savedDailyTodos = localStorage.getItem("dailyTodos");

if (savedDailyTodos !== null) {
  const parsedDailyTodos = JSON.parse(savedDailyTodos);
  dailyTodos = parsedDailyTodos;
  dailyTodos.forEach((item) => paintDailyTodo(item));
}

// weekly
const weeklyTodoForm = document.querySelector("#weekly-todo-form");
const weeklyTodoInput = weeklyTodoForm.querySelector("input");
const weeklyTodo = document.querySelector("#weekly-todo-list");

let weeklyTodos = [];

function saveWeeklyTodos() {
  localStorage.setItem("weeklyTodos", JSON.stringify(weeklyTodos));
}

function deleteWeeklyTodo(event) {
  const li = event.target.parentElement;
  weeklyTodos = weeklyTodos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveWeeklyTodos();
}

function paintWeeklyTodo(newWeeklyTodoObj) {
  const li = document.createElement("li");
  li.id = newWeeklyTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newWeeklyTodoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "✅";
  btn.addEventListener("click", deleteWeeklyTodo);
  li.appendChild(btn);
  li.appendChild(span);
  weeklyTodo.appendChild(li);
}

function weeklyTodoSumitHandler(event) {
  event.preventDefault();
  const newWeeklyTodo = weeklyTodoInput.value;
  weeklyTodoInput.value = "";
  const newWeeklyTodoObj = {
    id: Date.now(),
    text: newWeeklyTodo,
  };
  weeklyTodos.push(newWeeklyTodoObj);
  paintWeeklyTodo(newWeeklyTodoObj);
  saveWeeklyTodos();
}

weeklyTodoForm.addEventListener("submit", weeklyTodoSumitHandler);

const savedWeeklyTodos = localStorage.getItem("weeklyTodos");

if (savedWeeklyTodos !== null) {
  const parsedWeeklyTodos = JSON.parse(savedWeeklyTodos);
  weeklyTodos = parsedWeeklyTodos;
  weeklyTodos.forEach((item) => paintWeeklyTodo(item));
}
