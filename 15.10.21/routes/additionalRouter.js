const router = require("express").Router();

router.get("/", (req,res) => {
    res.send("afghani hat");
});

router.get("/secret", (req,res) => {
    res.send("Leave");
});

module.exports = router // создание модуля, чтобы использовать его