const express=require('express');
const cors=require('cors');
const app=express();



//middlewares:----------------------------------------
app.use(express.json()); //allowes information to listen from front-end in json format
app.use(cors());


const foodTable =require("./routes/foodTable");
app.use("/food",foodTable);

const Table =require("./routes/table");
app.use("/table",Table);

app.listen(4000,()=>{
    console.log("server listening on port 4000")
});