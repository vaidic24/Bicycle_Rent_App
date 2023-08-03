const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { postClicked } = require('../controller/postClicked');
const router = express.Router();

router.post('/postClicked' , requireSignin , userMiddleware , postClicked); // has to be logged in 

module.exports = router; // we are exporting the router 
