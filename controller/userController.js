import expressAsyncHandler from "express-async-handler";

import bcrypt from 'bcrypt'
import User from "../model/userModel.js";

const register = expressAsyncHandler(async(req,res)=>{

    
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(400).send("All fields are required")
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    }).catch(error => {
        console.error('Error creating user:', error);
    });

   
    if(newUser){
        res.status(201).json({message:"User Created Successfully",email:newUser.email})

    }
    else{
        res.status(400);
    }


})

const login = expressAsyncHandler(async(req,res)=>{

    
})


export {register,login};