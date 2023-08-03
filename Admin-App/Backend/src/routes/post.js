// #F1
const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { createPost, getPost } = require('../controller/post');
const router = express.Router();
 
router.post('/createPost' , requireSignin , userMiddleware , createPost); // has to be logged in 

router.get('/getPost' , getPost); // no need to be a logged in user 

module.exports = router; // we are exporting the router 
 