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
