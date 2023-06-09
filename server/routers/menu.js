const express = require("express");
const router = express.Router();

router.get("/insert", function (req, res){
    const menu = req.body.menu;
    console.log(req.body.menu);

    const img_url = menu.url;
    const category = menu.category;
    const name = menu.name;
    const price = menu.price;
    const regdate = new Date();

    connection.query(
        "INSERT INTO menu (img_url, category, name, price, regdate) VALUES (?, ?, ?, ?, ?)",
        [category, img_url, name, price, regdate],
        (err) => {
            if (err) {
                console.error("Error inserting data: ", err);
                res.status(500).send("Error inserting data");
            }
        }
    );
})

router.post("/", async (req, res) => {

})

module.exports = router;