const DAO = require('./DAO');

class UserDAO extends DAO {
    insert = (req, res, next) => {
        var user = req.body.user;
        this.exec_query(req, res, next,
            "INSERT INTO user (id, pw, name, authority, address) VALUES (?, ?, ?, ?, ?)",
            [user.id, user.pw, user.name, user.authority, user.address]
        )
    }

    update = (user) => {
        this.exec_query((exec) => {
            exec.query(
                "UPDATE user SET address = ? WHERE sn = ?",
                [user.address, user.sn],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }

    select_one = (req, res, next) => {
        var user = req.body.user;

        this.exec_query(req, res, next,
            "SELECT * FROM user WHERE sn = ?",
            [user.sn]
        )
    }
}

module.exports = new UserDAO();