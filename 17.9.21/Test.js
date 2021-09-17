const fs = require("fs");
let tab = fs.readFileSync("ppl.csv", "utf-8");
// let arr = [...tab];
let arr = tab.split(";");
for (var in arr) {
    let example = arr.slice([i], 4);
}

console.log(example);


// 2)  Наполнить массив людей на основании файла (с использованием класса);
// 3)  Показать имя для документов в порядке приближения даты рождения
//     3v-lite Вывести имя для документов всех представителей одного пола