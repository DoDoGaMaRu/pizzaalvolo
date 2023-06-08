const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");

// node_modules 에 있는 express 관련 파일을 가져온다.
// express 는 함수이므로, 반환값을 변수에 저장한다.
const express = require('express');
const cors = require("cors");
const app = express();
const hostname = "127.0.0.1";
const port = 8080;

const test = require("./routers/test");

const server = async () => {
    try {
        //DB connection
        app.use(cors({ origin: "http://localhost:3000" }));
        app.use(express.json());
        app.use(test);
        app.listen(port, hostname, function () {
            console.log("server is running");
        });
    }
    catch (err) {
        console.log(err);
    }
}

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

server();