const http = require("http");
const fs = require("fs");
const PORT = 7009;
const mime_types = {
    ".jpeg": "image/jpeg",
};

let coffe = fs.readFileSync("./public/path.csv").toString().split(",");
// path_1 = [];
// for (i = 1; i <= coffe.length; i++) {
//     path_1.push(new path(coffe.toString().split(",").slice(0,[i])));
// }
const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === "/") {
        fs.readFile("./public/coffe.html", (err,data) => {
            res.write(!err ? data : "Fail", "utf-8");
            res.end();
        });
    } else {}
});
server.listen(PORT, err => !err && console.log(`${coffe}`));