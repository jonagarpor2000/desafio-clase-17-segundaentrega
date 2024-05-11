import { productModel } from "./models/products.models.js";
class prodMg {
    constructor() {
        this.model = productModel
    }
getProducts = async (page,sort,limit) => {
    const products = await this.model.paginate({},{limit:limit ?? 10,page:page ?? 1,lean:true})
    return products;
  };

  getProductById = async(id) => {
    const products = await this.model.findById(id)
    return products;
  }
  
  addProduct = async(product) =>{
    const {title,description,price,status,thumbnail,code,stock} = product
    if(!title || !description || !price || !status || !thumbnail || !code || !stock){
        return ({status:'error',payload:'Error: campos incompletos'})
    }else{
        return await this.model.create(product)
    }
    
    
  }

  deleteProduct = async (id)=>{}

  updateProduct = async (id,title, description, price, thumbnail,code,stock)=>{}

}

export {prodMg}