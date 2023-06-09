// node_modules 에 있는 express 관련 파일을 가져온다.
// express 는 함수이므로, 반환값을 변수에 저장한다.
const express = require('express');
const cors = require("cors");

const app = express();
const hostname = "127.0.0.1";
const port = 8080;

const image = require("./routers/image");
const menu = require("./routers/menu");
const user = require("./routers/user");

// INIT SERVER
const server = async () => {
    try {
        //DB connection
        app.use(cors({ origin: "http://localhost:3000" }));
        app.use(express.json());
        app.use('/image', image);
        app.use('/menu', menu);
        app.use('/user', user)
        app.listen(port, hostname, function () {
            console.log("server is running");
        });
    }
    catch (err) {
        console.log(err);
    }
}

server();