//módulos pré existentes
const express = require('express')
const path = require('path')

//módulos criados
const db = require('./database/db')
const routes = require('./routes/routes')


const app = express()


//conexão com o banco de dados
db.connect()


/* =========
definindo o template engine - foi removido por que não usaremos as views apenas as APIs

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))


//definindo os arquivos públicos
app.use(express.static(path.join(__dirname,'public')))
========= */ 

// habilita server para receber dados no formato json
app.use (express.json())

/*========
//No API-Restful não receberemos dados vindos de um formulário, receberemos diretamente no corpo da requisição.


//habilita server para receber dados via post (formulário)
app.use (express.urlencoded({ extended: true }))
=========*/


//definindo as rotas
app.use('/api', routes)

/*
Não será necessário por que teremos apenas endpoints específicos
//404 error (not found)
app.use((req, res) => { //middleware
    res.send('Página não encontrada!')
})
*/

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))