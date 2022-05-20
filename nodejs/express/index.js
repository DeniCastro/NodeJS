const express = require('express')
const { send } = require('express/lib/response')
const app = express()
const path = require('path')
const { engine } = require('express-handlebars')
const helpers = require('./helpers/handlebar')

app.use(express.static('public'))

app.set('view engine', 'handlebars')

app.engine('handlebars', engine({
    helpers:helpers
}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/sobre', (req, res) => {
    res.render('sobre')
})

app.get('/users', (req, res) => {
    let usuario = {
        nome: "Deni",
        email: "denicastro.oliveira@gmail.com"
    }

    res.render('users', {
        user: usuario,
        auth: true
    })
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    console.log(userId)

    res.render('user', {
        userId: userId
    })

})



app.listen(8080, () => {
    console.log("Servidor Iniciado")
})