const DAO = require('./DAO');

class DetailDAO extends DAO {
    insert = (detail) => {
        this.exec_query((exec) => {
            exec.query(
                "INSERT INTO detail (count, regdate, menu_id, total_order_id) VALUES (?, ?, ?, ?)",
                [detail.count, detail.regdate, detail.menu_id, detail.total_order_id],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }

    select_all_total_order = (total_order_id) => {
        this.exec_query((exec) => {
            return exec.query(
                "SELECT * FROM detail WHERE total_order_id = ?",
                [total_order_id],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }
}

module.exports = new DetailDAO();