import { shoeModel } from "../models/shoes.js";
import { testimonialModel } from "../models/testimonial.js";
import { userModel } from "../models/user.js";
import bcrypt from "bcryptjs"

export const shoeGetController = async(req, res) => {
    const shoes=await shoeModel.find();
    res.json(shoes);
    
}
export const testimonialsGetController = async(req, res) => {
  const shoes=await testimonialModel.find();
  res.json(shoes);
  
}
export const UserLoginController = async(req, res) => {
   
  // res.json(shoes);
  const email=req.body.email;
  const password=req.body.password
  const user=await userModel.findOne({email:email});
  //  console.log(password);
  const pass=await user.password;
  const isMatch=await bcrypt.compare(password,pass);
  console.log(isMatch);
}

export const shoeDeleteController = async(req, res) => {
  const id=req.param.id;
  console.log(id);
  // await shoeModel.findOneAndDelete({"id":id});
}
export const shoePostController = (req, res) => {
    
    const model=new shoeModel({
      name:req.body.name,
      id:req.body.id,
      pic:req.body.pic,
      price:req.body.price,
      description:req.body.description,
      category:req.body.category,
      uploadDate:new Date(),
      size:req.body.size,
    });
    model.save();

}


export const userPostController =async (req, res) => {
    
  const model=new userModel({
   email:req.body.email,
   password:req.body.password,
   phoneNumber:req.body.phoneNumber,
  });
  const token=await model.generateAuthToken();

  model.save();

}
export const testimonialsPostController = (req, res) => {
    
  const model=new testimonialModel({
   name:req.body.name,
   description:req.body.description,
   
  });
  model.save();

}