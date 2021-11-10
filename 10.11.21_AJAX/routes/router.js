const router = require("express").Router(); 

router.get("/", (rq, rs) => {
    rs.render("index", {
        list: ["John", "Anna", "Thomas", "Jean"]
    });
});

router.get("/add", (rq,rs) => {
    console.log(rq.query);
    rs.send({msg: "Succes"});
})

router.get("/new", (rq, rs) => {
    rs.render("form");
});

module.exports = router;