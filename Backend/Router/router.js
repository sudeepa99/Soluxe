const express = require ('express')
const router = express.Router()
const register = require ("../Controller/authController");
//const { UserRegister, UserLogin, getUserDetails } = require('../Controller/authController');
//const authenticateToken = require('../middleware/authMiddleware'); // Import the middleware
const { authenticateToken, verifyUser } = require('../auth/verifyToken');
const getUser= require('../Controller/getUser');


router.post('/register',register.UserRegister)
router.post('/login' , register.UserLogin)
//router.get('/user', authenticateToken, getUserDetails);
router.get('/getUser', getUser.getUserFunction);

router.get('/user',authenticateToken, verifyUser);

module.exports=router;
