const express = require("express");
const API = express();
const env = require("dotenv").config().parsed;
const router = require("./routes/index")



const host = env.APIHOST
const port = env.APIPORT

API.use("/", router);


API.listen(port, host, ()=> {console.log(`http://${host}:${port}`)});