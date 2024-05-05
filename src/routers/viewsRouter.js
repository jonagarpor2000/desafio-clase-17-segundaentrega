import { Router, json } from 'express'
const router = Router()
let products = []

function getNextId() {
  let ultimaposicion = 1;
  if(products.length === 0){
      return ultimaposicion;
  }
  ultimaposicion = products.at(-1).id + 1;
  return ultimaposicion;
}

function validatecode(code){
  let encontrado = products.find( prod => prod.code === code )
  if(encontrado){
    return true
  }else{
    return false
  }
}
router.get('/realtimeproducts', async(req, res) => {
    res.render('realTimeProducts', {})
    let io = req.io
    io.on('client:productedited', data => {
      console.log(`Jelou`)
    })
})
router.get('/chat', async(req, res) => {
    res.render('chat', {})
})

router.get('/', (req, res) => {
    res.render('home')
})


function sendclientprod (io,...prod){
    io.on('connection', socket => {
      console.log(`Cliente conectado: ${socket.id}`)
      io.emit('srv:productsended', prod)
  }) 
}


router.post('/realtimeproducts',async (req,res)=>{
  const {title,description,price,stock,code} = req.body
  let io = req.io
  if (validatecode(code)){
    io.emit('srv:codeexist')
    res.redirect('/realtimeproducts')
  }else{
    
    let newProd = {
      id: getNextId(),
      title:title,
      description: description,
      price: price,
      stock:stock,
      status:true,
      code:code
    }
    products.push(newProd)
    sendclientprod(io,products)
    res.redirect('/realtimeproducts')
  }
})

export default router