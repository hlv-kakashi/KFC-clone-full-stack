const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://amanjaiswal:aman0612@cluster0.fpuxu.mongodb.net/KFC");

const menuSchema= new mongoose.Schema({
    image:String,
    title:String,
    desc:String,
    price:String,
    type:String
})

const Menu= mongoose.model("menu",menuSchema)


module.exports= {Menu,connection}
