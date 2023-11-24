import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
    title: String,
    id: Number,
    pic: String, 
    price: Number,
    factoryPrice: Number,
    category: Number,
    uploadDate:Date,
    sizes: [],
    availableSizes: [],
});

export const shoeModel = mongoose.model("shoe", shoeSchema);



