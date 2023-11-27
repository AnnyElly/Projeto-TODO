const express = require("express")

const app = express()

app.get('/', (requisição, resposta)=>{
    resposta.send("Ola, mundo! ")
})

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000!")
})