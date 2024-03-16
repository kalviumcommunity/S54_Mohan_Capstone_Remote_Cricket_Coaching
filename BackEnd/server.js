import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log('Database connected successfully');
  
})
.catch(error=>{
  console.log(error);
  
})
const app=express()

app.listen(3001,()=>{
  console.log('Server running on port 3001');
  
})