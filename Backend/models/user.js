import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import  Jwt  from "jsonwebtoken";
const userSchema = new mongoose.Schema({
   email: String,
   password: String,
   phoneNumber: String,
   tokens:[
      {
         token:{
            type:String,
            required:true,
         }
      }
   ],
});
userSchema.methods.generateAuthToken=async function(){
  try{
   const token=Jwt.sign({_id:this._id.toString()},"secretkey");
   this.tokens=this.tokens.concat({token:token});
   await this.save();
   console.log(token);
   return(token);
  }catch(e){
     res.send("the error is "+e);
     console.log(e.toString());
  }
}
userSchema.pre("save",async function(next){
   this.password=await bcrypt.hash(this.password,10);
   next();
})

export const userModel = mongoose.model("user", userSchema);