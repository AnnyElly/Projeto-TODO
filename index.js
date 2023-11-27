const express = require("express")
const exphbs = require("express-handlebars")


const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (requisição, resposta)=>{
    resposta.send("Ola, mundo! ")
})

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000!")
})