import { Router } from 'express'
import ProductManager from '../ProductManager.js'
const router = Router()

const manager = new ProductManager('./dataBase.txt')

let products = manager.getProducts()

router.get('/', (req, res) => {
    res.render('realTimeProducts', { products })
})


export default router