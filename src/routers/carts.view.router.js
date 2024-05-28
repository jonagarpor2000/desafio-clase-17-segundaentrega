import {Router} from 'express'
import { CartMgDb } from '../dao/cartMg_db.js'

const router = Router()

const CartService = new CartMgDb()
router.get('/',async(req,res)=>{
    const carts = await CartService.getCarts()
    res.send({status:"success",payload:carts})
})
router.get('/:cid',async(req,res)=>{
    const {cid} = req.params
    let result = await CartService.getCartById(cid)
    res.send({status:"success",payload:result})
})
router.put('/:cid',async(req,res)=>{
    res.send('update de cart')
})
router.delete('/:cid', async(req,res)=>{
    res.send('delete de users')
})


export default router