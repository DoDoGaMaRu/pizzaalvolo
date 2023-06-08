const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

connection.connect();

app.post("/insert", (req, res) => {
    console.log(req.body.menu);

    const category = req.body.menu.category;
    const url = req.body.menu.url;
    const name = req.body.menu.name;
    const price = req.body.menu.price;
    const time = new Date();

    connection.query(
        "INSERT INTO pizza (category, url, name, price, time) VALUES (?, ?, ?, ?, ?)",
        [category, url, name, price, time],
        (error, results, fields) => {
            if (error) {
                console.error("Error inserting data: ", error);
                res.status(500).send("Error inserting data");
                return;
            }
            res.send("Data inserted successfully");
        }
    );
});

/*
app.post("/insert", (req, res) => {
  const serverId = req.body.id;
  console.log(serverId);

  const sendText = { text: "자퇴해라 백대환" };
  res.send(sendText);
});
*/

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});
