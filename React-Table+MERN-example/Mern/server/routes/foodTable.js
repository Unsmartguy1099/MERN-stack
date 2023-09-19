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

//Main------------------------------------------------
router.post('/insert',async(req,res)=>{

    const foodName=req.body.foodName
    const days=req.body.days
    console.log(foodName+" "+days)
    const food=new FoodModel({
        foodName:foodName,
        daysSinceIAte:days
    });
        await food.save();
        console.log("saved")
});

router.put('/update',async(req,res)=>{
    const newFoodName=req.body.newFoodName
    const id=req.body.id
    await FoodModel.findByIdAndUpdate(
            id,
			{foodName:newFoodName},
			{ new: true },
    )
});


router.delete('/delete/:id',async(req,res)=>{
const id=req.params.id;
await FoodModel.findByIdAndRemove(id).exec();
res.send("deleted")

console.log("deleted");
});


router.get('/read',(req,res)=>{
    FoodModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})

module.exports = router;