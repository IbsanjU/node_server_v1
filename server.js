const express = require("express")
const app = express()

const config = require("./config")

const db = require("./models")

db.sequelize.sync().then((req) => {
    app.listen(3001, () => console.log("server is running...!"))
})

/* 
* Commands:
npm i express mysql2 sequelize sequelize-cli
sequelize init
npm i path fs
*/