const { model } = require("mongoose");
const userModel = require("../models/user.model.js")
const crypto = require("crypto");
const jwt = require("jsonwebtoken")
const config = require("../config/config.js")


async function register(req,res){
    const {username,email,password} = req.body;

    const isAlreadyRegister = await userModel.findOne({
        $or:[
            { username },
            { email }
        ]
    })

    if(isAlreadyRegister){
        // already in db
        return res.status(409).json({
            message : "username or email already exist"
        })
    }
    // for not in db
    const hashPassword = crypto.createHash("sha256").update(password).digest("hex");

    const user = await userModel.create({
        username,
        email,
        password: hashPassword
    })
    
    
    const token = jwt.sign({
        id :user._id
    },config.JWT_SECRET,
    {
        expiresIn :"1d"
    }
    )

    res.status(201).json({
        message : "user register sucessfully",
        user:{
            username : user.username,
            email:user.email,
        },
        token 
    })


}

async function getMe(req,res){

    const token = req.headers.authorizations?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message : "token not found"
        })
    }

    const decoded = jwt.verify(token.config.JWT_SECRET)

    const user = await userModel.findById(decoded.id)

    res.json({
        message :"user fetch sucessfully",
        user:{
            username,
            email
        }
    })

}



module.exports = {register,getMe};