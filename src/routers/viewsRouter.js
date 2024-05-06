import { Router, json } from 'express'
import { uploader } from '../utils/multer.js'
import prodctsRouter from './api/products.router.js'
import cartsRouter from './api/carts.router.js'
import chatsRouter from './api/chats.router.js'
const router = Router()



router.use('/api/products',prodctsRouter)
router.use('/api/carts',cartsRouter)
router.use('/chat',chatsRouter)

router.get('/', async(req, res) => {
  res.render('home')
})
router.post('/upload-file', uploader.single('myfile'),(req, res)=>{
  //Hacer con fetch
  res.render('successFile')
})

export default router