import http from "http"
import nodemon from "nodemon";
import mongoose from "mongoose";

const url="mongodb+srv://abdullah:123@cluster0.qfbdxft.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url).then(()=>{console.log("databaseConnected")}).catch(()=>{console.log("database not Connected")});





// const server=http.createServer((req,res)=>{
//   if(req.url==="/"){
//     res.write("Loading home page");
//     res.end();
//   }
//   if(req.url==="/Products"){
//     res.write("Loading Products page");
//     res.end();
//   }
//   if(req.url==="/Services"){
//     res.write("Loading Services page");
//     res.end();
//   }
// })

// server.listen(8000)