import mongoose from "mongoose";
mongoose.set('debug', true);

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName:"Dietary"
    })
    .then(()=>{
            console.log("Connected Successfully to Database");
    })
    .catch((err)=>{
        console.log(`Error in connecting to DB:${err}`);
    });
};