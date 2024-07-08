const express = require ('express')
const router = express.Router()
const register = require ("../Controller/authController");
router.post('/register',register.UserRegister)

module.exports=router;