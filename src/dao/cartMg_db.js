import { cartModel } from "./models/carts.models.js";
class CartMgDb {
    constructor() {
        this.model = cartModel
    }
    getCarts = async () => {
        return await this.model.find({})
    }

    updateCart = async (cid,...rest) => {
        return await this.model.findByIdAndUpdate({_id:cid},...rest)
    }

    getCartById = async (id) => {
        return await this.model.findOne({_id:id})
    }
    createCart = async () => await this.model.create({products: []})

    addProductToCart = async (cid, pid,quantity) => {
            let cart = await this.getCartById(cid)
            console.log(`Leo: ${cart}`)
        if(!cart?.products||!cid){
            
            cid = (await this.createCart())._id
            console.log(`Carrito ${cid} creado`)
        }
        console.log(`Hay un carrito ${cid} `)
            let result = await this.model.findByIdAndUpdate({_id:cid},{$push:{products:{pid,quantity}}})
            console.log(result)
            //console.log(`Carrito ${cid} creado`)
            //const newProductItem = {pid, quantity };
            //cart.products.push(newProductItem)
        
            return 'Error: no se pudo crear carrito'
        
        
    }
}

export {CartMgDb}