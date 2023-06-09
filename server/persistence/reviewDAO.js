const DAO = require('./DAO');

class ReviewDAO extends DAO {
    insert = (review) => {
        this.exec_query((exec) => {
            exec.query(
                "INSERT INTO review (id, pw, name, authority, address) VALUES (?, ?, ?, ?, ?)",
                [review.star, review.info, review.user_sn, review.detail_id, review.menu_id],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }

    select_by_detail = (detail_id) => {
        this.exec_query((exec) => {
            return exec.query(
                "SELECT * FROM review WHERE detail_id = ?",
                [detail_id],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }

    select_by_menu = (menu_id) => {
        this.exec_query((exec) => {
            return exec.query(
                "SELECT * FROM review WHERE menu_id = ?",
                [menu_id],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }
}

module.exports = new UserDAO();