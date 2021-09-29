const http = require("http");  // Hyper Text Transport Protocol
const server = http.createServer((request, response) => {
    // request - запрос от пользователя
    // response - ответ от сервера
    response.write(`<h1 
                        style = "
                        background: #212126;
                        color: greenyellow;
                        text-align: center;"
                    >hello</h1>`);
    response.end();
});
// Методы передачи данных (get / post / put / delete)

server.listen(3000, err => {
    if (err) {
        console.log("Everything is so sad")
    } else {
        console.log("leksa is the best")
    }
    // ^^^^^^^^^^^^^^^^^^^^^^^^^появится в местной консоли(не в google, ЗДЕСЬ)
}); // http://localhost:3000
// 3000, 4000, 5000, 8888,..... - можно использовать различные хосты