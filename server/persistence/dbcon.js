const mysql = require('mysql2')

const DB_CONF = {
    HOST: "localhost",
    USER: "root",
    PW: "eoghks0014",
    DB: "pizza_alvolo",
};

var pool;
function createPool() {
    pool = mysql.createPool({
        host: DB_CONF.HOST,
        user: DB_CONF.USER,
        database: DB_CONF.DB,
        password: DB_CONF.PW
    });
}
function getPool() {
    return pool;
}

module.exports.createPool = createPool;
module.exports.getPool = getPool;