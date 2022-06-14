const express= require("express");
const cors= require("cors")
const {Menu,connection} = require("./db.js");



const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())


app.get("/",(req,res)=>{
    res.send("server started")
})




app.get("/item", async(req,res)=>{
    let query= req.query;
    
    let items=await Menu.find({title:{$regex:req.query.search,$options:/i/}})
    res.json(items)
})

app.get("/menu", async (req,res)=>{
  let query= req.query;
  let items= await Menu.find(query);
  res.json(items);
})

const PORT =process.env.PORT||8080
app.listen(PORT, async ()=>{
    try{
        await connection
    }
    catch(e){
      console.log(e);
    }
})


//kfc data deployed link
//https://kfc-aman.herokuapp.com/