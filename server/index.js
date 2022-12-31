const express = require("express");
const app = express();
app.use(express.json())
const cors = require('cors')
const joi = require("joi")
app.use(cors())
const mysql = require('mysql');
const db = mysql.createConnection({
    user:"root",
    password:"root1234",
    host:"localhost",
    database:"crud"
})

const schema = joi.object({
    name:joi.string().required().min(3).max(20),
    country:joi.string().required().min(4).max(20),
    city:joi.string().min(4).required()
}); 


app.get("/",(req,res)=>{
    
db.query("SELECT * FROM crudd",(err,result)=>{
if(err) return res.send(err);

res.send(result)
})
  
})


app.post("/",(req,res)=>{
   

name=req.body.name;
country=req.body.country;
city=req.body.city;
const { error } =   schema.validate(req.body,{abortEarly:false})
if(error) return res.send(error).statusCode(400)
db.query("INSERT INTO crudd (name,country,city) VALUES (?,?,?)",[name,country,city],(err,result)=>{

if(err) return res.send(err).status(500)   


    res.send(result)


    
  
})

})

app.delete("/:id",async(req,res)=>{

    id=req.params.id
    db.query("DELETE FROM crudd WHERE id = ?",id,(err,result)=>{
if(err) return res.send(err).status(400)

res.send(result)
    })
})
app.listen(3001,()=>{
    console.log("server up and running ");
})