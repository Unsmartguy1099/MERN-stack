const mongoose=require("mongoose")

const FoodSchema =new mongoose.Schema({

    foodName:{
        type: String,
        required: true,
    },
    daysSinceIAte:{
        type:Number,
        required:true,
    },
});

const food=mongoose.model("FoodData",FoodSchema)
module.exports=food
