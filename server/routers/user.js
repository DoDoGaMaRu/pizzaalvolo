const express = require("express");
const userDAO = require("../persistence/userDAO")
const router = express.Router();

router.get("/", userDAO.select_one);

router.get("/", function (req, res, next){
    res.send({ data: req.db_result });
});

router.post("/insert", userDAO.insert)

router.post("/update", async (req, res) => {
    const user = req.body.user;
    userDAO.update(user);
})

module.exports = router;