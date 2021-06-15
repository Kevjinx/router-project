const express = require('express')

const app = express()
const port = 8081;

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.send('Ahhh suhhhh from Express!')
})

app.all('*', (req, res) => {
    res.send('There aint no page here')
})

app.listen(port, console.log(`listening at port: ${port}`))