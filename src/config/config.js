const dotenv = require("dotenv")

// one layer for the access the env
dotenv.config()

// check
if(!process.env.MONGO_URI){
    throw new Error ("MONGO_URI is not defined in the envernomental variable")
}
if(!process.env.JWT_SECRET){
    throw new Error ("JWT secreete is not defined in environemntal varibale")
}


const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}

module.exports = config;
