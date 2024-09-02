const express = require("express");
const app = express();

app.get("/abc", (req,res) => {res.status(400).json({data : "Hello world"})});
app.get("/home", (req,res) => {res.send("Hello from home")});
app.get("/Contact", (req,res) => {res.send("Hello from Contact")});
app.get("/about", (req,res) => {res.send("Hello from about")});
app.use((req,res) =>{
    res.sendFile(__dirname+"/public/404.html")
})

app.listen(3000 , ()=> console.log("server running at port 3000"));