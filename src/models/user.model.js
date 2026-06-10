const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: (true,"username must be required"),
        unique: (true,"username must be unique")
    },
    email : {
        type: String,
        require: (true,"email must be required"),
        unique: (true,"email must be unique")
    },
    password:{
        type: String,
        require: (true,"password must be required"),
        unique: (true,"password must be unique")
    }
})

const userModel = mongoose.model("user",userSchema)

