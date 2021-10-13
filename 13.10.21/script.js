const express = require("express");

const app = express();
const port = 8008;

app.use(express.static("./public"));
// app.get("/",(req,res) => {
//     res.send(`
//     <h1>Hello</h1>
//     <ul>
//     <li><a href="/lop">Page 1</a></li>
//     <li><a href="/active">Page 2</a></li>
//     </ul>
//       `);
// }); 
//.get() - прочтение 

app.get("/lop",(req,res) => {
    res.send("<h1>Lop</h1>");
}); 

app.get("/active",(req,res) => {
    res.send("<h1>active</h1>");
}); 
app.listen(port, err => {
    console.log("Fail");
});
// npm run назание команды

