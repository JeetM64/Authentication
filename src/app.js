const express = require("express")
const morgan = require("morgan")

const app = express();

const authRoutes = require("./routes/auth.route.js")

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/auth", authRoutes)

module.exports = app;
