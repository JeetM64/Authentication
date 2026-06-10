const app = require("./src/app.js")
const connectDB = require("./src/config/db.js")



connectDB().then(()=>{
app.listen(3000,()=>{
    console.log("server running ")
})
})