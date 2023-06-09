const DAO = require('./DAO');

class TotalOrderDAO extends DAO {
    insert = (total_order) => {
        this.exec_query((exec) => {
            exec.query(
                "INSERT INTO total_order (regdate, user_sn) VALUES (?, ?)",
                [new Date(), total_order.user_sn],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }

    select_all_user = (user_sn) => {
        this.exec_query((exec) => {
            return exec.query(
                "SELECT * FROM total_order WHERE user_sn = ?",
                [user_sn],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }
}

module.exports = new TotalOrderDAO();