const express = require('express')

const app = express()
const port = 8081;

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    console.log(req)
    res.render('home', {method: 'get', path: 'some', randomNumber:'thing'})
})

app.all('*', (req, res) => {
    res.send('There aint no page here')
})

app.listen(port, console.log(`listening at port: ${port}`))
