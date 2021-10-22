const router = require("express").Router();

router.get("/personal", (rq,rs) => {
    const name = rq.query.name;
    const img = rq.query.img;
    console.log(rq.query); // - получение данных от клиента, переданных при помощи get-запроса (в адресной строке браузера)
    rs.send(`
     <div>
     <img src="${img}" alt= "${name}" >
     <h1>${name}</h1>
     </div>
    `);
});

module.exports = router;