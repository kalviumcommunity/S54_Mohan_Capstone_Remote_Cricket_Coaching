import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
const app=express()



import router from './route.js'

dotenv.config()
app.use(cors());
app.use(router);
mongoose.connect("mongodb+srv://mohantheboss1432:mohan01012005@cluster0.prkm0wp.mongodb.net/Capstone")
.then(()=>{
  console.log('Database connected successfully');
  
})
.catch(error=>{
  console.log(error);
  
})
app.get("/",(req,res)=>{
  res.send({message:"Hello"})
})
app.listen(3001,()=>{
  console.log(`http://localhost:3001/`);
  console.log('Server running on port 3001');
  
})