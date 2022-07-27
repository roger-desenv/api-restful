const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

        res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body


    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'sucess'
    }) // deveolve uma resposta para API.

}


async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, {new: true})

    res.send({
        message: 'sucess',
        product,
    })  

}


async function remove(req, res) { // nesse caso não podemos usar a palavra "delete" pois ela é reservada, utilizaremos "remove"

    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })


    // o código abaixo poderá ser utilizado também com if ternário => const message = remove.ok ? 'success' : 'error'
    if (!remove.ok) {
        message = 'error'
    }

    res.send({
        message: 'success' // caso utilizasse o if ternário, a escrita ficaria apenas "message,"
    })

}



/* 
Outra forma de fazer

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOne({_id: id})

    await product.update(req.body)

    res.send({
        message: 'sucess',
        product,
    })  
*/



module.exports = {
    get,
    post,
    put,
    remove,
}

