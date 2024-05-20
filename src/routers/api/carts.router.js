import {Router} from 'express'
import { CartMgDb } from '../../dao/cartMg_db.js'
const router = Router()

const CartService = new CartMgDb()
router.get('/',async(req,res)=>{
    const carts = await CartService.getCarts()
    res.send({status:"success",payload:carts})
})
router.get('/:uid',async(req,res)=>{
    const {body} = req
    await CartService.createCart()
})  
router.post('/',async (req,res)=>{
    const {body} = req
    const {cid,pid,quantity} = body
    let result = await CartService.addProductToCart(cid,pid,quantity)
    res.send({status:'Success',payload:result})
})
router.put('/:uid',async(req,res)=>{
    res.send('update de cart')
})
router.delete('/:cid/products/:pid', async(req,res)=>{
    const {cid,pid} = req.params
    let result = await CartService.deleteProductOnCart(cid,pid)
    if(result instanceof Error){
        res.status(404).send({status:'Error',payload:result.message})
    }else{
        res.send({status:'Success',payload:result})
    }
    
    
})


export default router