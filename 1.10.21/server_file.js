const http = require("http");
const fs = require("fs");
const url = require("url");
const PORT = 5006;
const mime_types = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".jpeg": "image/jpeg",
    ".png": "image/png"
} 
const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === "/") {
        fs.readFile("./public/Index.html", (err,data) => {
                res.write(!err ? data : "Fail", "utf-8");
                res.end();
        });
    } else {
        let fileExt = req.url.split(".");
        fileExt = "." + fileExt[fileExt.length - 1];
        console.log(fileExt);
        // if (fileExt !== ".ico") {res.writeHead(200, {"Content-Type": mime_types[fileExt]});};
        if (fileExt === ".png" || fileExt === ".jpg") {
            fs.readFile("./public" + req.url, (err,data) => {
                res.write(data, "binary");
                res.end();
            });
        } else {
            fs.readFile("./public" + req.url, (err,data) => {
                res.write(data, "utf-8");
                res.end();
            });
        }
    }
});
server.listen(PORT, err => !err && console.log("Your server is working"));