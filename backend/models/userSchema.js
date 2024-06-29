import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema= new mongoose.Schema({
    firstName:{
        type: String, 
        required: true,
        minlength:[3,"First Name should contain 3 letter"],
    },
    lastName:{
        type: String, 
        required: true,
        minlength:[3,"Last Name should contain 3 letter"],
    },
    age:{
        type: Number,
        required:true,
       
    },
    gender:{
        type: String,
        required:true,
        enum:['Male','Female'],
    },
    weight:{
        type:String,
        required:[true,"Weight is required"],
        
    },
    email:{
        type: String,
        required: [true, "Email Is Required"],
        validate: [validator.isEmail, "Please Provide A Valid Email!"]
    },
    height:{
        type:String,
        required:true,
        

    },
    dp:{
        type:String,
        required:true,
    },
    alg:{
        type:String,
        required:true,
    },
    hg:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:[5,"Password must contain 5 character"],
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user"]
    }
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
            next();
    }
    this.password= await bcrypt.hash(this.password,10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id:this_id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES,
    })
}
export const User=mongoose.model("User",userSchema);