import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { MONGOURI,PORT } from "./config.js";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/bookRoute.js"




const app = express();


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


//Database connectionvv
mongoose.connect(MONGOURI)
.then(()=>{
    console.log("Database Connected")
})
.catch((error)=>{
    console.log(error)
})


//Routes
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Book Store")
})

app.use("/books",bookRoute)

// Run Server


app.listen(PORT,()=>{ 
    console.log("server started")
})  