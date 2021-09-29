const http = require("http");  // Hyper Text Transport Protocol
const fs = require("fs");
const PORT = 8888;
const server = http.createServer((req, res) => {
    // res.write("<h3>Sponge Bob</h3><img src=\"https://i.imgur.com/rnPzj94.jpg\" type=\"image/jpeg\">");
    let img = fs.readFileSync("./Heli.jpg");
    console.log(img);
    res.write(img);
    res.end();
});
server.listen(PORT, err => {
    console.log(`Server is starting on port: ${PORT}`);
});