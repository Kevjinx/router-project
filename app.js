const express = require('express')

const app = express()
const port = 8081;

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    // console.log(req)
    res.send("Hello from Express!")
    // res.render('home', {method: 'get', path: 'some', randomNumber:'thing'})
})

app.get(/(xyz)$/, (req,res) => {
    res.send("That's all I wrote.");
});


app.get(/(capital-letters)/, (req, res) => {
    const letters = req.url
    const capLetters = letters.split('/capital-letters/')[1].toUpperCase()
    res.send(capLetters)
})










app.all('*', (req, res) => {
    res.send('There aint no page here')
})

app.listen(port, console.log(`listening at port: ${port}`))
