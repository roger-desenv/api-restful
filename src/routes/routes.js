const router = require ('express').Router()

const ProductController = require('../controllers/products')

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

// nas rotas de put e delete, é obrigatório o id, nesse caso não utilizaremos "?" seguido do id.

module.exports = router