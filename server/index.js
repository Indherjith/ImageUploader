const express = require("express");
const app = express();
const cors = require('cors');
const {connection} = require("./db");
const {ImageModel} = require("./Image.model");
const PORT = process.env.PORT || 8500;

app.use(express.json({limit:"10mb"}));
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Hey People, This is a Image Saving Server");
})

app.get("/images",async(req,res)=>{
    let data = await ImageModel.find();
    res.status(200).send(data)
})

app.post("/uploadimg",async(req,res)=>{
    const {img} = req.body;
        try{
            const images = new ImageModel({img:img})
            await images.save();
            res.send({"msg":"Image Uploaded Successfully!"})
        }
        catch(err){
            console.log(err);
            res.send({"msg":"Something went wrong"})
        }
})

app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("DataBase Connected Successfully!");
    }
    catch(err){
        console.log(err);
    }
    console.log(`Server Listerning on port ${PORT}`);
})