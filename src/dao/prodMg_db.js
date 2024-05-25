import { json } from "express";
import { productModel } from "./models/products.models.js";
class prodMg {
    constructor() {
        this.model = productModel
    }
getProducts = async (page,sort,limit,query) => {
  page = page != undefined ? page : 1;
  limit = limit != undefined ? limit : 10;
  console.log (`Ordenado recibido: ${sort}`)
  sort = sort === "asc" ? 1 : sort === "desc" ? -1 : 0;
  let sortsentence = {} 
  if (sort===0){
    sortsentence = ""
  }else{
    sortsentence = {price: sort}
  }
 

 

  console.log (`Ordenado por: ${sort} y con limite ${limit}, page: ${page}, \n sortsent: ${JSON.stringify(sortsentence)}`)
  try {
    let products = await this.model.paginate({},{limit:limit,page:page,sort:sortsentence,lean:true})    
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

  deleteProduct = async (id)=>{
    const product = await this.getProductById(id)
    if(!product){
        return ({status:'error',payload:'Product not found'})
    }else{
        return await this.model.findByIdAndDelete(id)
    }
  }

  updateProduct = async (id,...prod)=>{
    const {title,description,price,status,thumbnail,code,stock} = prod
    console.log(prod)
    try {
      const updatedProduct = await this.model.findByIdAndUpdate( {_id:id},{title,description,price,status,thumbnail,thumbnail,code,stock},{new: true});
      if (!updatedProduct) {
        return { status:'error',payload:'Product not found' };
      }
      return updatedProduct; 
    } catch (err) {
      console.error(err);
      return { status:'error',payload:'Error updating product' };
    }
  }

}

export {prodMg}