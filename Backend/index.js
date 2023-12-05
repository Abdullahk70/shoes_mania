import express from "express";
import  cors from "cors";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/shoesMania.js";
import { shoeModel } from "./models/shoes.js";

const app = express();

 app.use(cors());
 app.use(bodyparser.json({extends:true}));
 app.use(bodyparser.urlencoded({extends:true}));
 app.use("/shoesMania",router);
 app.use("/shoesManiaView",router);
//  app.use("/shoesManiaDelete",router);

 app.delete("/shoesManiaDelete/:id",async (req,res)=>{

const id=req.params.id.slice(1);
console.log(id);
 shoeModel.findOneAndDelete(id);
 });
 
const url="mongodb+srv://abdullah:123@cluster0.qfbdxft.mongodb.net/";
mongoose.connect(url).then(()=>{console.log("connected")});




// app.get("/shoes", shoeController )


app.listen(5000);










// // import http from "http"
// // import nodemon from "nodemon";
// // import mongoose from "mongoose";

// // const url="mongodb+srv://abdullah:123@cluster0.qfbdxft.mongodb.net/?retryWrites=true&w=majority";
// // mongoose.connect(url).then(()=>{console.log("databaseConnected")}).catch(()=>{console.log("database not Connected")});

// import http from "http";

// const server = http.createServer((req, res) => {
    
//     if (req.url === "/"){
//         console.log("Request from React received.")
//     }

//     if (req.url === "/products"){
//         res.write("Loading products page...");
//         res.end();
//     }

//     if (req.url === "/services"){
//         res.write("Loading services page...");
//         res.end();
//     }
    
// });

// server.listen(8000);




// // const server=http.createServer((req,res)=>{
// //   if(req.url==="/"){
// //     res.write("Loading home page");
// //     res.end();
// //   }
// //   if(req.url==="/Products"){
// //     res.write("Loading Products page");
// //     res.end();
// //   }
// //   if(req.url==="/Services"){
// //     res.write("Loading Services page");
// //     res.end();
// //   }
// // })

// // server.listen(8000)