const DAO = require('./DAO');

class MenuDAO extends DAO {
    insert = (menu) => {
        this.exec_query((exec) => {
            exec.query(
                "INSERT INTO review (img_url, category, name, price, regdate) VALUES (?, ?, ?, ?, ?)",
                [menu.img_url, menu.category, menu.name, menu.price, new Date()],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }

    select_all_date = () => {
        this.exec_query((exec) => {
            return exec.query(
                "SELECT * FROM menu ORDER BY regdate",
                [],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }

    select_all_high_price = () => {
        this.exec_query((exec) => {
            return exec.query(
                "SELECT * FROM menu ORDER BY price",
                [],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }

    select_all_low_price = () => {
        this.exec_query((exec) => {
            return exec.query(
                "SELECT * FROM menu ORDER BY price DESC",
                [],
                (err) => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    }
}

module.exports = new MenuDAO();