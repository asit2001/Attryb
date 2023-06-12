import mongoose from "mongoose";

export default async function con(){
    try{
        await mongoose.connect(process.env.MONGODB_URI||"mongodb://127.0.0.1:27017/buyc")
        console.log("connected to db");
    }catch (e){
        console.log(e.message);
    }
}