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

let tasks = 5;
if (tasks === 0) {
  console.log("Список пуст");
} else if (tasks <= 3) {
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