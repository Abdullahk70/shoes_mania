import http from "http"
import nodemon from "nodemon";
const server=http.createServer((req,res)=>{
  if(req.url==="/"){
    res.write("Loading home page");
    res.end();
  }
  if(req.url==="/Products"){
    res.write("Loading Products page");
    res.end();
  }
  if(req.url==="/Services"){
    res.write("Loading Services page");
    res.end();
  }
})

server.listen(8000)