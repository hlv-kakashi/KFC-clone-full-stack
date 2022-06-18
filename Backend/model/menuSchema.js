const { Schema, model } = require("mongoose");

const menuSchema= new Schema({
    image:String,
    title:String,
    desc:String,
    price:String,
    type:String
})

const Menu= model("menu",menuSchema)
module.exports= Menu;