const express = require('express')
const app = express()

const db = require('./models')

const { User } = require('./models') // get user from models

app.get('/select', (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users)
    })
    .catch((err) => {
      if (err) res.send(err)
    })
  res.send('select')
})

app.get('/insert', (req, res) => {
  User.create({
    firstName: 'Bharath',
    aga: 26,
  }).then((err, res) => {
    if (err) res.send('err : ' + err)
    res.send(err)
  })
})

app.get('/delete', (req, res) => {
  User.destroy({ where: { id: 01 } })
  res.send('delete')
})

db.sequelize.sync().then((req) => {
  app.listen(3001, () => console.log('server is running...!'))
})

/* 
* Commands:
npm i express mysql2 sequelize sequelize-cli
sequelize init
npm i path fs
*/
