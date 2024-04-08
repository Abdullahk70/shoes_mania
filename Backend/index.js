import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/shoesMania.js";
import { shoeModel } from "./models/shoes.js";
import { testimonialModel } from "./models/testimonial.js";
import passport from "passport";
import { testModel } from "./models/test.js";
const app = express();

app.use(cors({
  origin: "*",
  methods: ["POST", "GET", "DELETE"]
}));


//  app.use(cors({
//   origin:["https://shoes-mania-frontend.vercel.app"],
//   methods:["POST","GET","DELETE"] , 
  
//               }));
//  app.use(cors());
 app.use(bodyparser.json({extends:true}));
 app.use(bodyparser.urlencoded({extends:true}));
 app.use("/shoesMania",router);
 app.use("/shoesManiaView",router);


 app.post('',async (req,res)=>{
  const test=req.body.data;
 const mdl=new testModel({
  firstName:test.first_name,
  lastName:test.last_name,
 })
 await mdl.save();
 res.json(mdl);
 });
//  createToken();

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});



 app.delete("/shoesManiaDelete/:id",async (req,res)=>{
const id=req.params.id.slice(1);
await shoeModel.findByIdAndDelete(id);
 });
 app.delete("/shoesManiaDeleteTestimonials/:id",async (req,res)=>{

     const id=req.params.id.slice(1);
    await testimonialModel.findByIdAndDelete(id);
     });
 
const url="mongodb+srv://abdullah:123@cluster0.qfbdxft.mongodb.net/";
mongoose.connect(url).then(()=>{console.log("connected")});
app.listen(5000);