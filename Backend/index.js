import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/shoesMania.js";
import { shoeModel } from "./models/shoes.js";
import { testimonialModel } from "./models/testimonial.js";
const app = express();

 app.use(cors());
 app.use(bodyparser.json({extends:true}));
 app.use(bodyparser.urlencoded({extends:true}));
 app.use("/shoesMania",router);
 app.use("/shoesManiaView",router);
//  app.use("/shoesManiaDelete",router);












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