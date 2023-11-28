import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
    name: String,
    id: String,
    pic: String, 
    price: String,
    description:String,
    category: String,
    uploadDate:Date,
    size: String,
    
});

export const shoeModel = mongoose.model("shoe", shoeSchema);



