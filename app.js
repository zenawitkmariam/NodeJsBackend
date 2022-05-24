
const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");


const app = express();

//middlewares

//app.use("/",(req,res,next)=>
//{
  //  res.send("this is starting app")
//})
app.use("/books",router)

mongoose.connect("mongodb+srv://admin:CvVB2ZowY9pAewE4@cluster0.zhv96.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log("Connected to db")
).then(()=>{
    app.listen(5000)
}).catch((err)=> console.log(err));
