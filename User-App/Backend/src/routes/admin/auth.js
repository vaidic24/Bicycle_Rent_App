// #C8 copied from user  routes auth.js and removed comments 

const express = require('express');
const { signup, signin } = require('../../controller/admin/auth');
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../../validators/auth');

const router = express.Router(); 

// router.post('/admin/signin', signin);
// router.post('/admin/signup', signup ); 

// #D3 
router.post('/admin/signin', validateSigninRequest , isRequestValidated , signin);
router.post('/admin/signup', validateSignupRequest, isRequestValidated , signup ); 

module.exports = router; 