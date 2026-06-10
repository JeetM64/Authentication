const mongoose = require("mongoose")
const config = require("./config.js")



async function connectDB(){
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("DB connect")
    }
    catch(error){
        console.log("message : cananot connect")
    }

}

module.exports = connectDB;