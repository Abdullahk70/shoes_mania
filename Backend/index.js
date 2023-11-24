import express from "express";
import { shoeController } from "./controllers/shoe.js";
import  cors from "cors";
import bodyparser from "body-parser";

const app = express();

app.apply(cors);
app.apply(bodyparser.json,({extends:true}));
app.apply(bodyparser.urlencoded,({extends:true}));

app.get("/", (req, res) => {
    res.write("home page loading. ")
    res.end();
});

app.get("/shoes", shoeController )


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