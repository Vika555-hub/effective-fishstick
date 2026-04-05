let a = 5;
let b = 6;


let sum = a + b;
let dif = a - b;


console.log(sum, dif)

let title = "";
if (title === "") {
  console.log("Название задач не указано");
} else {
  console.log("Задача:", title)
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

let task = {
  id: 1,
  title: "Купить молоко",
  status: "активна"
};
console.log(task.id);     // 1
console.log(task.title);  // "Купить молоко"
console.log(task.status); // "активна"

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
