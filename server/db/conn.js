const mongoose = require("mongoose");

const DB = "mongodb+srv://aastha_5662:aastha_5662@cluster0.o1hahp3.mongodb.net/AuthProject?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})