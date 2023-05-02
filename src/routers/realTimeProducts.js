import { Router } from 'express'
import ProductManager from '../ProductManager.js'
const router = Router()

const manager = new ProductManager('./dataBase.txt')


router.get('/', (req, res) => {
    try {
        const products = manager.getProducts()
        res.render('index', { products: products })
    } catch (err) {
        res.status(500).send('Ocurrió un error al leer el archivo de productos')
    }
})

router.get('/', (req, res) => {
    try {
        const products = manager.getProducts();
        io.emit('products', products)
        res.render('realTimeProducts', { products: products })
    } catch (err) {
        res.status(500).send('Ocurrió un error al leer el archivo de productos')
    }
})



export default router