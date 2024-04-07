const sql = require("mysql")

const connection = sql.createConnection({
    host: "localhost",
    user: "root",
    database: "inventory",
    password: "yogesh12"
})

module.exports =  connection