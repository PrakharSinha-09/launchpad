const express = require('express');
const router = express.Router();
const { User } = require("../Models/db");
const jwt = require("jsonwebtoken");

router.post('/signup',async(req,res)=>{

    const {email,password}=req.body;

    const UserExists=await User.findOne({
        email:email
    })

    if(UserExists){
        return res.status(411).json({
            msg:"already Exists"
        })
    }

    const newUser=await User.create({
        username:req.body.username,
        password:req.body.password
    })

    const userId=newUser._id

    await Account.create({
        userId:userId,
    })

    return res.json({ 
        msg:"user created successfully!"
    })
})


router.post('/signin',async(req,res)=>{
    
    const {email,password}=req.body;

    const UserExists=await User.findOne({
        email:email
    })

    if(UserExists){
        const token=jwt.sign({
            id:UserExists._id
        },jwt_secret)

        return res.json({token:"Bearer "+token})
    }

    return res.status(411).json({err:"User Doesn't exists!"})
})