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
    //let cartcreation = await CartService.createCart()
    console.log(`Tengo: ${body.cid}`)
    let result = await CartService.addProductToCart(cid,pid,quantity)
    //console.log(`post: ${result}`)
    res.send({status:'Success',payload:result})
})
router.put('/:uid',async(req,res)=>{
    res.send('update de cart')
})
router.delete('/:uid', async(req,res)=>{
    res.send('delete de users')
})


export default router