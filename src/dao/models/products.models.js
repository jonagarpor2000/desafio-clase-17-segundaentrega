import {Schema,model} from "mongoose";

const productsCollection = 'products'

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    status: Boolean,
    thumbnail: String,
    code: {
        type: String,
        required: true,
        unique: true
    },
    stock: Number
})

export const productModel = model(productsCollection,productSchema)