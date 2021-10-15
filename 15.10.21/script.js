/*  
    CRUD
    Create          Read Update           Delete
    POST(создать)   GET  PUT(обновить)    DELETE

    RESTfull-API 

    Rest-API
    Create Read Update Delete
    POST   GET  POST   GET/POST
*/

const express = require("express");
const PORT = 8008;

const rout1 = require("./routes/mainRouter");
const rout2 = require("./routes/additionalRouter");

const server = express();
server.get("/", (req,res) => {
    res.send("Hey!");
});

server.use("/main", rout1);
server.use("/add", rout2);

server.listen(PORT, err => {
    console.log("saved");
});
