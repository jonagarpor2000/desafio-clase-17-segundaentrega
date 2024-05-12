import { Router, json } from 'express'
import productsRouter from './api/products.router.js'
import productsview from './products.view.router.js'
import cartsRouter from './api/carts.router.js'
const router = Router()



router.use('/api/products',productsRouter)
router.use('/products',productsview)
router.use('/api/carts',cartsRouter)


export default router