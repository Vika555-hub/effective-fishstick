let a = 5;
let b = 6;


let sum = a + b;
let dif = a - b;


console.log(sum, dif)

let titlee = "";
if (titlee === "") {
  console.log("Название задач не указано");
} else {
  console.log("Задача:", titlee)
}

let taskss = 5;
if (taskss === 0) {
  console.log("Список пуст");
} else if (taskss <= 3) {
  console.log("Немного задач");
} else {
  console.log("Много задач");
}
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4)); //7
console.log(sum(10, 5)); //15
function isTaskDone(status) {
  return status === "выполнена";
}
console.log(isTaskDone("выполнена")); //true
console.log(isTaskDone("активна")); //false
function taskSummary(total, done) {
  let active = total - done;
  return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
}
console.log(taskSummary(5,3));
console.log(taskSummary(10,4));

let amount = 5500;
if (amount === 0) {
  console.log("Корзина пуста");
} else if (amount < 1000) {
  console.log("Скидка не принимается");
} else if (amount >= 1000 && amount <= 5000) {
  console.log("Скидка 5%");
} else if (amount >= 5000) {
  console.log("Скидка 10%");
}

let cities = ["Москва", "Париж", "Берлин", "Токио"];
cities[2] = "Лондон";
console.log(cities);
// ["Москва", "Париж", "Лондон", "Токио"]

let task6 = {
  id: 1,
  title: "Купить молоко",
  status: "активна"
};
console.log(task6.id);     // 1
console.log(task6.title);  // "Купить молоко"
console.log(task6.status); // "активна"

let tasks = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки", status: "активна" }
];
console.log(tasks[0].title);  // "Купить молоко"
console.log(tasks[1].status); // "выполнена"

tasks[0].status = "выполнена";
console.log(tasks[0]); 
// { id: 1, title: "Купить молоко", status: "выполнена" }

tasks.push({ id: 4, title: "Прогулка", status: "активна" });
console.log(tasks);

let user = {
  name: "Вика",
  tasks: tasks
};

console.log(user.name);         // "Вика"
console.log(user.tasks.length); // 4

function filterByStatus(tasks, status) {
  return tasks.filter(function (task) {
    return task.status === status;
  });
}
// Пример
let tasks1 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки",  status: "активна" }
];

console.log(filterByStatus(tasks1, "активна"));
// => [{ id:1, ...}, { id:3, ...}]

function sortByTitleAsc(tasks) {
  tasks.sort(function (a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });

  return tasks;
}
// Пример
let tasks2 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки",  status: "активна" }
];

console.log(sortByTitleAsc(tasks2));
/*
[
  { id: 3, title: "Сделать уроки",  status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 1, title: "Купить молоко",   status: "активна" }
]
*/

function searchByTitle(tasks, query) {
  const q = query.toLowerCase();
  return tasks.filter(function (task) {
    return task.title.toLowerCase().indexOf(q) !== -1;
  });
}
// Пример
let tasks3 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки",  status: "активна" }
];
console.log(searchByTitle(tasks3, "куп"));
/*
[{ id:1, title:"Купить молоко", status:"активна" }]
*/

function removeTaskById(tasks, id) {
  return tasks.filter(function (task) {
    return task.id !== id;
  });
}
// Пример
let tasks4 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки",  status: "активна" }
];

console.log(removeTaskById(tasks4, 2));
// => [{ id:1, ...}, { id:3, ...}]

function toggleTaskStatus(tasks, id) {
  return tasks.map(function (task) {
    if (task.id === id) {
      const newStatus =
        task.status === "выполнена" ? "активна" : "выполнена";

      return {
        id: task.id,
        title: task.title,
        status: newStatus,
      };
    }

    return task;
  });
}
// Пример
let tasks5 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" }
];
console.log(toggleTaskStatus(tasks5, 1));
// => [{ id:1, title:"Купить молоко", status:"выполнена" }, { id:2, ...}]
 
function findTaskByTitle(tasks, title) {
  const Taskk = tasks.find(task => task.title === title);
  return Taskk || "Задача не найдена";
}
console.log(findTaskByTitle(tasks, "Купить молоко"));
// { id: 1, title: "Купить молоко", status: "выполнена" }
console.log(findTaskByTitle(tasks, "Выбросить мусор"));
// "Задача не найдена"

let tasks = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Сходить в спортзал", status: "выполнена" },
  { id: 3, title: "Позвонить другу", status: "активна" },
  { id: 4, title: "Прочитать книгу", status: "выполнена" },
  { id: 5, title: "Сделать проект", status: "активна" }
];

for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].id + ":", tasks[i].title);
}

for (let task of tasks) {
  console.log(task.id + ":", task.title);
}

let i = 0;
let total = 0;
let done = 0;
let active = 0;

while (i < tasks.length) {
  total++;
  if (tasks[i].status === "выполнена") {
    done++;
  } else {
    active++;
  }
  i++;
}
console.log("Всего:", total, "| Выполнено:", done, "| Активных:", active);

for (let task of tasks) {
  if (task.status === "активна") {
    console.log("Активная задача:", task.title);
  }
}

tasks.forEach(task => {
  console.log("#" + task.id + " " + task.title + " (" + task.status + ")");
});

let searchTitle = "Купить молоко";
let found = null;
for (let task of tasks) {
  if (task.title === searchTitle) {
    found = task;
    break;
  }
}
if (found) {
  console.log("Найдена задача:", found);
} else {
  console.log("Задача не найдена");
}

let activeTasks = [];
for (let task of tasks) {
  if (task.status === "активна") {
    activeTasks.push(task);
  }
}
console.log("Активные задачи:", activeTasks);

const input = document.querySelector('.form-add__input');
const addButton = document.querySelector('.form-add__button');
const container = document.querySelector('.tasks');
//html, вместо задачи
<div class="tasks"></div>

// создаём обёртку карточки
  const task = document.createElement('div');
  task.classList.add('task');

  const content = document.createElement('div');
  content.classList.add('task__content');
  task.append(content);

  const title = document.createElement('div');
  title.classList.add('task__title');

  const meta = document.createElement('div');
  meta.classList.add('task__meta');

  content.append(title, meta);

  const actions = document.createElement('div');
  actions.classList.add('task__actions');
  task.append(actions);

function findTaskByKeyword(tasks, keyword) {
  const tasks = tasks.find(task => task.title.tollowerCase().includes(LowerKeyword));
  return tasks || "Задача не найдена";
}
console.log(findTaskByKeyword(tasks, "молоко"));
// { id: 1, title: "Купить молоко", status: "выполнена" }
console.log(findTaskByKeyword(tasks, "мусор"));
// "Задача не найдена"