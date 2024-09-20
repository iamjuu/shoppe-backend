const express = require('express')
const Router = express.Router()

const Signup =  require('../../Controller/SignupController')
const Login  = require('../../Controller/LoginController')
Router.post('/signup',Signup.SignupPost)
Router.post('/login',Login.LoginPost)





module.exports = Router

