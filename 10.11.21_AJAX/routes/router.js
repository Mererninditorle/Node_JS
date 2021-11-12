const router = require("express").Router(); 
const fs = require("fs");

let names = fs.readFileSync("./file.txt", "utf-8").split("\n"); // задаем место, где хранятся имена file.txt |||||
console.log(names);
// OR
// let names = fs.readFileSync("./file.txt", "utf-8");
// names = names.split("\n");


router.get("/", (rq, rs) => {
    rs.render("index", {
        list: names // показываем массив данных, откуда будут браться имена^^^^^^^^
    });
});

router.get("/add", (rq,rs) => {
    console.log(rq.query);
    if(rq.query.name) {
        names.push(rq.query.name); // добавляем значение в массив names
        fs.writeFileSync("./file.txt", names.join("\n"), "utf-8", (err, data) => {} ); // добавляем значение в file.txt
        // rs.redirect("/");
        rs.send({msg: "Succes"});
    } else {
        rs.send({msg: "Error, something is wrong"});
    };
});

router.delete("/del", (rq, rs) => {

});


router.get("/new", (rq, rs) => {
    rs.render("form"); // запускаем шаблон form.hbs по адресу /new
});

module.exports = router;