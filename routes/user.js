
const express = require('express')
const router = express.Router();
const userHelper = require('../helper/userHelper');
const verify = require('../middleware/jwt')
const jwt = require('jsonwebtoken');
const userController=require('../controller/userController')


router.post('/signup',userController.signup)
router.post('/login',userController.login)
router.post('/application', verify, userController.application)
router.get('/applicationStatus', verify,userController.applicationStatus)






module.exports = router