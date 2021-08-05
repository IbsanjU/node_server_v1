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
})

app.get('/insert', (req, res) => {
  User.create({
    firstName: 'Bharath',
    age: 26,
  }).catch((err, result) => {
    if (err) res.send('err : ' + err)
    res.send(result)
  })
})

app.get('/update', async (req, res) => {
  const id = 1
  const { firstName, age } = { firstName: 'Bharath Kumar R', age: 26 }

  const user = await User.findOne({
    where: { id: id },
  })

  if (!user) {
    return res.status(400).send({
      message: `No user found with the id ${id}`,
    })
  }

  try {
    if (firstName) {
      user.firstName = firstName
    }
    if (age) {
      user.age = age
    }

    user.save()
    return res.send({
      message: `User ${id} has been updated!`,
    })
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    })
  }
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
