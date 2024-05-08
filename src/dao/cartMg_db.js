import { cartModel } from "./models/carts.models.js";
class CartMgDb {
    constructor() {
        this.model = cartModel
    }
    getCarts = async () => {
        return await this.model.find({})
    }
    createCart = async () => await this.model.create({products: []})

    addProductToCart = async (cid, pid) => {
        const carts = await this.model.findOne({_id:cid})
        carts.products.push({product: pid})
        const resp = await cartModel.findByIdAndUpdate({_id:cid},carts)
    }
}

export {CartMgDb}