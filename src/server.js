//módulos pré existentes
const express = require('express')
const cors = require('cors')

//módulos criados
const db = require('./database/db')
const routes = require('./routes/routes')


const app = express()


//conexão com o banco de dados
db.connect()

const allowedOrigins = [
    'http://127.0.0.1.5500',
    'http://www.app.com.br',
]

// habilita CORS
app.use(cors({

    origin: function(origin, callback) {
        let allowed = true

        //mobile app
        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }


})) // dessa forma a api fica publica, sem restrição.


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