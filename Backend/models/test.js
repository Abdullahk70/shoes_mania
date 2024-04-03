import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    
});

export const testModel = mongoose.model("test", testSchema);