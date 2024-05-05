import {Router} from 'express'
import { productModel } from '../../dao/models/products.models.js';
const router = Router()

router.get('/',async(req,res)=>{
    const products = await productModel.find({})
    console.log(`Tengo productos: ${products}`)
    res.send({status:"success",products: products})
})
router.get('/:uid',async(req,res)=>{
    res.send('get de productos')
})
router.put('/:uid',async(req,res)=>{
    res.send('update de productos')
})
router.delete('/:uid', async(req,res)=>{
    res.send('delete de productos')
})
router.post('/',async (req,res)=>{
    const {body} = req
    const result = await productModel.create(body)
    res.send({status:'Success',payload:result})
})

export default router