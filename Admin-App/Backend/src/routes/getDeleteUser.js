const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { getUser , deleteUser } = require('../controller/getDeleteUser');
const router = express.Router();

router.get('/getUser' , requireSignin , userMiddleware , getUser ); // no need to be a logged in user 

router.post('/deleteUser' , requireSignin , userMiddleware , deleteUser);

module.exports = router; // we are exporting the router 
  