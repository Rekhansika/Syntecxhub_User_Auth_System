const express = require("express");
const mongoose = require("mongoose");
const dotenv =require("dotenv");
dotenv.config();

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Backend is running");
})

mongoose
.connect(process.env.MONGOURL)
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((error)=>{
    console.log("Error connecting MongoDB",error.message);
    process.exit(1);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});