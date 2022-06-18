const { Schema, model } = require("mongoose");

const cartSchema= new Schema({
    image:String,
    title:String,
    desc:String,
    price:String,
    id:String,
    qty:Number
})

const Cart = model("cart",cartSchema)
module.exports= Cart;