import  Jwt  from "jsonwebtoken";
export const generateToken=async()=>{
    
const token=await Jwt.sign({_id:"656f6445deaa808695dbfb42"},"secretkey",{expiresIn:"1000d"});
console.log(token)
const user=await Jwt.verify(token,"secretkey");
console.log(user)
}