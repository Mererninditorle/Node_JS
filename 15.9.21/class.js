let fs = require("fs");

// const cb = function(err, data) {
//     console.log(err);
//     console.log(data);
// }
// cb();
// console.log(cb)

// // function_name() - вызов функции
// fs.readFile("info.csv", {encoding: "utf8"}, cb);


let text;
fs.readFile("info.csv", {encoding: "utf8"}, 
    function(err, data) {
        if (err) {
            throw new Error(err);
        } else {
            text = data
            console.log(data);
        }   
    }
); //Замена вышестоящего 
console.log(text);
setTimeout(() => console.log(text), 2000);



// Дз: Подготовиться к работе
// выучить работу 