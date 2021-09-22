const f = require("./functions.js");

function Auto(a, b, c) { // Функция - конструктор
    this.model = a;
    this.color = b;
    this.year = c;
}

Auto.prototype.changeColor = function() {
    this.color = `rgb(${f.getNumber(256)},${f.getNumber(256)},${f.getNumber(256)})`;
}

let cnt = 10, park = [];
while (cnt--) {
    park.push(new Auto("Tesla", "rgb(34,9,34)", 2020));
}

for (let i = 0; i < park.length; i++) {
    park[i].changeColor();
}
park.sort((a,b) => {
    return a.color > b.color ? 1 : -1
} )
console.log(park);



function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.show = function() {
    
}