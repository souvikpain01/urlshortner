import mongoose from "mongoose";

const urlSchema=new mongoose.Schema({
    shortUrlId:{
        type:String,
        required:true,
        unique:true,
    },
    originalUrl:{
        type:String,
        required:true,
    },
    visitHistory:[{ type:Date}]

})


const URL=mongoose.model("url",urlSchema);

export default URL;
