const express = require('express')

const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/admin', (req, res) => {
    res.render('admin')
})

app.get('/funcionario', (req, res) =>{
    res.render('funcionario')
})

app.listen(8080, () => {
    console.log("Servidor pronto na porta 8080")
})