// console.log("daskfjasdf");
let fs = require("fs"); //подключаем библиотеку 
let syn = fs.readFileSync("Synonyms.txt", "utf8"); //принимает фаил, читает; указываем кодировку
let result = "";
for (let i = 0; i < syn.length; i++) {
    if (syn[i] === "\n" || syn[i] === "\r") {
        result += " ";
    } else {
        result += syn[i];
    }
}
console.log(syn);

// fs.writeFileSync("file.txt", result, "utf8"); создаст фаил, если нет такого
