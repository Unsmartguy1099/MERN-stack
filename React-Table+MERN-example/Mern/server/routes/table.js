const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const FoodModel=require("../models/food");

const router =express.Router();

//middlewares:----------------------------------------
app.use(express.json()); //allowes information to listen from front-end in json format
app.use(cors());

//Mongoose connection:--------------------------------
mongoose.connect("mongodb+srv://sk_saif:EsC$TeuB9@cluster0.diva8t1.mongodb.net/?retryWrites=true&w=majority");
//----------------------------------------------------



//----------------------------------------------------
module.exports = router;