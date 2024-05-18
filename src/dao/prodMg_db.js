import { productModel } from "./models/products.models.js";
class prodMg {
    constructor() {
        this.model = productModel
    }
getProducts = async (page,sort,limit,query) => {
  page = page ?? 1
  limit = limit ?? 10
  try {
    let products = await this.model.paginate({}).sort(
      sort ? { price: sort === 'asc' ? 1 : -1 } :
      {limit:limit,page:page,lean:true})
    
    
    products.prevLink = `/products?numPage=${products.prevPage}&limit=${products.limit}`
    products.nextLink = `/products?numPage=${products.nextPage}&limit=${products.limit}`      
    return products;
  } catch (error) {
    console.log(`Error al cargar desde DB: ${error.message}`)
  }  
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

  updateProduct = async (id,...prod)=>{
    const {title,description,price,thumbnail,code,stock} = prod
    console.log(prod)
    try {
      const updatedProduct = await this.model.findByIdAndUpdate( {_id:id},{title,description,price,thumbnail,code,stock},{new: true}); // Options explained below
      if (!updatedProduct) {
        return { error: 'Product not found' }; // Handle product not found case
      }
      return updatedProduct; // Return the updated product object
    } catch (err) {
      console.error(err);
      return { error: 'Error updating product' }; // Handle errors
    }
  }

}

export {prodMg}