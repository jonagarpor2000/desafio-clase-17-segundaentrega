import {Router, query} from 'express'
import { prodMg } from '../../dao/prodMg_db.js'

const router = Router()

const prodService = new prodMg()
router.get('/',async(req,res)=>{
    let prods = await prodService.getProducts()
    console.log(prods)
    res.send({status:"success",products: prods})
})
router.get('/:pid',async(req,res)=>{
    const {pid} = req.params
    Number(pid)
    console.log(`Numerito: ${pid}`)
    let prod = await prodService.getProductById(pid)
    res.send({status:"success",products: prod})
})
router.get('/products',async(req,res)=>{
    let {numPage,limit,query,sort} = req.query
    numPage = numPage ?? 1
    limit = limit ?? 10
    console.log(`Pag: ${numPage} y limit: ${limit}`)
    const {docs,pages,totalDocs,totalPages,hasPrevPage,hasNextPage,prevPage,nextPage} = await prodService.getProducts(numPage,'',limit)
    res.render('products',{
        products: docs,
        page: Number(numPage),
        limit: Number(limit) ?? 10,
        pages,
        totalDocs,
        totalPages,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
        totalPages
    })
})

router.post('/',async (req,res)=>{
    const {body} = req
    const result = await prodService.addProduct(body)
    if(result.status='error'){
        res.send(result)
    }else{
        res.send({status:'Success',payload:result})
    }
})
/*router.get('/:uid',async(req,res)=>{
    res.send('get de productos')
})
router.put('/:uid',async(req,res)=>{
    res.send('update de productos')
})
router.delete('/:uid', async(req,res)=>{
    res.send('delete de productos')
})
*/

export default router