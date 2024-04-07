const express = require("express")
const dbconnection = require("../DB/db")

class Model {
    connect() {
        dbconnection.connect((err) => {
            if (err) {
                console.log("error while connecting to DB");
                return false
            }
            console.log("DB connected successfully")
            return true
        })
    }
    uploadDataToDB = async (data) => {
        let connected = this.connect
        if (connected()) {
            console.log("exited")
            return connected
        }
        let query = "insert into inventory (catalogue_id, amount, price) values (?,?,?)"
        console.log(data)
        await dbconnection.query(query, data, (error, result, fields) => {
            console.log(query,result)
            if (error) {
                console.log("error is there", error)
            }
        })

        await dbconnection.query("select * from inventory", (error, result, fields) => {
            console.log(JSON.parse(JSON.stringify(result)))
        })
    }
}

module.exports = Model