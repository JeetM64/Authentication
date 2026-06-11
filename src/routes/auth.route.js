const express = require("express")

const router = express.Router()

const {register,getMe} = require("../controllers/auth.controller.js")


// POST/api/auth/register
router.post("/register",register)

// post/api/auth/get-me
router.post("/get-me",getMe)

module.exports = router
