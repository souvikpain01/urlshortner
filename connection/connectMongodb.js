import mongoose from "mongoose";

function connectMongo(url){
    mongoose.connect(url)
    .then(()=>{console.log(`The DATABASE is connected successfully....`)})
    .catch(err=>{console.log(`DATABASE connection error...${err}`)});
}


export default connectMongo;
