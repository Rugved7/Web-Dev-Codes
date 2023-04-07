const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "signup.html"); // running this project on port 3000
});

app.listen(3000,function(){
  console.log("This is running on server 3000");
});