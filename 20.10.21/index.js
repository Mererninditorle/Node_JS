const express = require("express");
const port = 8008;

const app = express();

const router = require("./server/routes/server");

app.use("/", router);
app.use(express.static("./public"))
app.listen(port, err => {
    console.log("succes");
});