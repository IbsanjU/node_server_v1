const express = require("express")
const app = express()

const config = require("./config")

const mysql = require("mysql")

const db = mysql.createConnection(config)

db.connect(err => {
    if (err) throw err
    console.log("db is connected...!")
})

app.listen(3001, () => console.log("server is running...!"))