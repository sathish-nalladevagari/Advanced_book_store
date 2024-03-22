import mongoose from "mongoose";

const StringType = {
    type : String,
    required : true,
}
const bookSchema = mongoose.Schema({
    title:StringType,
    author:StringType,
    genre:StringType,
    language:StringType,
    synopsis:StringType,
    publisher:StringType,
    publication_date:StringType,
    url:StringType,
    price:{
        type:Number,
        required :true
    },
},

)

export const Book = mongoose.model("Books",bookSchema)