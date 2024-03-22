import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router()


router.post("/upload-book",async(req,res)=>{
    console.log(req.body)
    const {title,author,genre,language,synopsis,publisher,publication_date,url,price} = req.body
    try {
        if(!title || !author || !price){
            return res.status(402).send("Please give required fileds")
        }
        const book = await Book.create(req.body)
        return res.status(201).json(book)
    } catch (error) {
        return res.status(402).json({message:error.message})
    }
})

router.get("/all-books", async(req,res)=>{
    try {
        const books = await Book.find({})
        if (!books){
            return res.json("Books not found")
        }
        return res.status(200).send(books)
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
})

router.get("/book/:id",async(req,res)=>{
    const {id} = req.params
    try {
        const book = await Book.findById(id)
        if (!book){
            return res.status(400).send("book not found")
        }
        return res.status(200).send(book)
    } catch (error) {
        return res.status(403).json({message:error.message})
    }
})

router.delete("/book/:id",async(req,res)=>{
    const {id} = req.params
    try {
        const result = await Book.findByIdAndDelete(id)
        if(!result){
            return res.status(400).send("Book not deleted and not found")
        }
        return res.status(200).send("book deleted success")
    } catch (error) {
        return res.json({message:error.message})
    }
})

router.get("/all-books",async(req,res)=>{
    console.log(req)
    const query = {}
    if(req.query?.genre){
        query = {genre : req.query.genre}
    }
    const result = await Book.find(query)
    return res.send(result)
})
export default router  