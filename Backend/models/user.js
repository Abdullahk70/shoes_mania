import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   email: String,
   password: String,
   phoneNumber: String,
   
});

export const userModel = mongoose.model("user", userSchema);