const router = require("express").Router();

router.get("/", (rq,rs) => {
    // rs.send("<h1>Hello!</h1>")
    // rs.render("index"); // - указываем фаил, который нужно открыть, расширение можно не указывать
    rs.render("page", {caption: "Hello!"})
});

router.get("/page", (rq,rs) => {
    // rs.render("page");
    rs.render("page", {caption: "Dilly Page"});
});

module.exports = router;