import {Router} from 'express'
import { cartModel } from '../../dao/models/carts.models.js'
const router = Router()

router.get('/',async(req,res)=>{
    const users = await cartModel.find({})
    res.send({status:"success",users})
})
router.get('/:uid',async(req,res)=>{
    res.send('get de carts')
})
router.put('/:uid',async(req,res)=>{
    res.send('update de cart')
})
router.delete('/:uid', async(req,res)=>{
    res.send('delete de users')
})
router.post('/',async (req,res)=>{
    const {body} = req
    const result = await cartModel.create(body)
    res.send({status:'Success',payload:result})
})

export default router