const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username must be required"],
        unique: true
    },
    email : {
        type: String,
        required: [true, "email must be required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "password must be required"]
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel;