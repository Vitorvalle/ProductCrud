import { Schema, model } from "mongoose";


const ProductSchema = new Schema({
  name:{
    required: true,
    type: String
  },
  quant: {
    required: true,
    type: Number
  },
  price: {
    required:true,
    type: Number
  }
},{
    timestamps:true
})

export default model('product', ProductSchema)