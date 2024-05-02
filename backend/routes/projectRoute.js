const express = require('express');
const router = express.Router();
const { User, Project } = require("../Models/db");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require('../middleware');

router.post('/create',authMiddleware,async(req,res)=>{

    const userId=req.id;
    const {title,description,amount}=req.body;

    const newProject=Project.create({
        title:title,
        description:description,
        amount:amount,
        user:userId
    })

    return res.json({
        msg: "Project created successfully!"
    })
})

router.post('/donate',authMiddleware,async(req,res)=>{

    const userId=req.id;
    const {amount}=req.body;

    const newProject=donateProject.create({
        title:title,
        description:description,
        amount:amount,
        user:userId
    })

    return res.json({
        msg: "Project created successfully!"
    })
})



