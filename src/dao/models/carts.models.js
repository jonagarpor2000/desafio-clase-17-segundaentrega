import {Schema,model} from "mongoose";

const cartsCollection = 'carts'

const cartsSchema = new Schema({
    products: [
      {
        pid: { type: String, required: true }, 
        quantity: { type: Number, min: 1, required: true },
      },
    ],
  });

export const cartModel = model(cartsCollection,cartsSchema)