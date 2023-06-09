const mysql = require('mysql2')
const dbcon = require('./dbcon')


class Dao {
    exec_query = (req, res, next, query, pram) => {
        dbcon.createPool();

        let con = dbcon.getPool();
        con.getConnection(function (err, connection){
            if (err) {
                console.error("err : " + err);
                return next(err);
            }
            connection.query(query, pram, function (err, rows) {
                if (err) {
                    console.error("err : " + err);
                    return next(err);
                }
                req.db_result = rows;
                connection.release();

                next();
            });
        });
    }
}

module.exports = Dao

function selectAll(req,res,next) {
    var con = dbcon.getPool();
    con.getConnection(function (err, connection){
        if (err) {
            console.error("err : " + err);
            return next(err);
        }
        connection.query('select * from member', function (err, rows) {
            if (err) {
                console.error("err : " + err);
                return next(err);
            }
            console.log("rows : " + JSON.stringify(rows));

            req.db_result = rows;
            connection.release();

            next();
        });
    });
}