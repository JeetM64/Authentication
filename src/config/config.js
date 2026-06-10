const dotenv = require("dotenv")

// one layer for the access the env
dotenv.config()

// check
if(!process.env.MONGO_URI){
    throw new Error ("MONGO_URI is not defined int he envernomental variable")
}

const config = {
    MONGO_URI: process.env.MONGO_URI
}

module.exports = config;