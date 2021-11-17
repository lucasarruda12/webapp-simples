const express = require('express')
const port = process.env.PORT || 8080

const app = express()
app.set('view engine', 'ejs')
app.use(express.json())

///A SER REMOVIDO:
const participantes = []


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/admin', (req, res) => {
    
    let contador  = 0
    participantes.forEach((participantes)=>{
        if(participantes.convidado){
            contador = contador+2
        } else{
            contador = contador+1
        }
    })

    res.render('admin', {participantes, contador})
})

app.get('/funcionario', (req, res) =>{
    res.render('funcionario')
})


///A SER MODIFICADO:
app.post('/funcionario', (req, res)=>{
    participantes.push(req.body)
    
    res.json({
        'status':'success'
    })
})

app.listen(port, () => {
    console.log(`Servidor pronto na porta ${port}`)
})