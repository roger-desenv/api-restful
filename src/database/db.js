const mongoose = require('mongoose') // importar o mongoose

//caso apareça algum erro ao iniciar o servidor, deve-se colocar como descrito abaixo.
//mongoose.set('userNewParser', true) Verificar o nome do erro e alterar para true, neste caso foi 'userNewParser'.


function connect() {
    // conexão com o banco de dados
    mongoose.connect('mongodb://localhost:27017/api-restful')

    const db = mongoose.connection // habilitar conexão

    // Verificar se a conexão aconteceu
    db.once('open', () => {
        console.log('Connected to database')
    })
    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}