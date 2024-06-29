import {catchAsyncError} from "../middlewares/catchAsyncError.js"
import ErrorHandler from "../middlewares/errorMiddlewares.js"
import { User } from "../models/userSchema.js";

export const UserReg=catchAsyncError(async(req,res,next)=>{
    const {
            firstName,
            lastName,
            age,
            gender,
            weight,
            height,
            dp,
            alg,
            hg,
            role,
            email,
            password,
        }= req.body;
        if(
            !firstName,
            !lastName,
            !age,
            !gender,
            !weight,
            !height,
            !dp,
            !alg,
            !hg,
            !role,
            !email,
            !password 
        ){
            return next(new ErrorHandler("Please Fill the form",400));
        }
        let user = await User.findOne({email});
        if(user){
            return next(new ErrorHandler("User already exist",400));
        }
        user = await User.create({
            firstName,
            lastName,
            age,
            gender,
            weight,
            height,
            dp,
            alg,
            hg,
            role,
            email,
            password,
        }); 
        res.status(200).json({
            success:true,
            message: "User Registered!!"
        });
})

