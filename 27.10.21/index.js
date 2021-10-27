const express = require("express");
const server = require("./server/routes/server");

const app = express();
app.set("views", "./server/views") // указываем расположение шаблонов (подключаем)
app.set("view engine", "hbs") // подключаем препроцессор (hbs, pug....)
app.use(express.static("./public"));
app.use("/", server);

app.listen(7009, e => e ? "" : console.log("Succes"));