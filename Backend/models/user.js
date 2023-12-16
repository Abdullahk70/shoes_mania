import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
   email: String,
   password: String,
   phoneNumber: String,
   
});
userSchema.pre("save",async function(next){
   console.log(this.password);
   this.password=await bcrypt.hash(this.password,10);
   console.log(this.password);
   next();
})

export const userModel = mongoose.model("user", userSchema);