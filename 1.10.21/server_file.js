const http = require("http");
const fs = require("fs");
const PORT = 5006;
const mime_types = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".jpeg": "image/jpeg"
} 
const server = http.createServer((req,res) => {
    console.log(req.url);
    fs.readFile("./public/Index.html", (err,data) => {
            res.write(!err ? data : "Fail", "utf-8");
            res.end();
    });
});
server.listen(PORT, err => !err && console.log(`Your server is working`));
 
