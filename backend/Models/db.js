const mongoose = require("mongoose")

//user schema
mongoose.connect('mongodb://localhost:27017')

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
})

const projectSchema=new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },

    amount:{
        type: Number,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },

    createdAt:{
        type:Date,
        default: Date.now()
    },
})

const User=mongoose.model("User",userSchema)
const Project=mongoose.model("Project",projectSchema)

module.exports={
    User,
    Project
};
