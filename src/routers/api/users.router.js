const {Router} = require('express')
const { usersModel } = require('../../models/users.model')
const router = Router()

router.get('/',async(req,res)=>{
    const users = await usersModel.find({})
    res.send({status:"success",users})
})
router.get('/:uid',async(req,res)=>{
    res.send('get de users')
})
router.put('/:uid',async(req,res)=>{
    res.send('get de users')
})
router.delete('/:uid', async(req,res)=>{
    res.send('get de users')
})
router.post('/',async (req,res)=>{
    const {body} = req
    const result = await usersModel.create(body)
    res.send({status:'Success',payload:result})
})

module.exports = router