const router = require("express").Router();

router.get("/", (req,res) => {
    res.send("main Page");
});

router.get("/2", (req,res) => {
    res.send("second main Page");
});

module.exports = router // создание модуля, чтобы использовать его