const express = require("express");
const app = express();
const env = require("dotenv").config().parsed;
const path = require("path")



const host = env.AppHOST
const port = env.AppPORT




express.static.mime.define({
    'application/javascript': ['js'],
    'application/json': ['json']
  });
  app.use("/",express.static(path.join(__dirname, "../public")))
  app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
  
  app.post("/*",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })

app.listen(port, host, ()=> {console.log(`http://${host}:${port}`)});

