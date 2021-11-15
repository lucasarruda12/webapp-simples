const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({'msg':'Hello World!'})
})

app.get('')

app.listen(8080, () => {
    console.log("Servidor pronto na porta 8080")
})