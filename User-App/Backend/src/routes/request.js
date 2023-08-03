const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { createRequest, getRequest,acceptRequest , declineRequest } = require('../controller/request');
const router = express.Router();

router.post('/createRequest' , requireSignin , userMiddleware , createRequest); // has to be logged in 

router.get('/getRequest' , getRequest); // no need to be a logged in user 

router.post('/acceptRequest' , requireSignin , userMiddleware , acceptRequest);
router.post('/declineRequest' , requireSignin , userMiddleware , declineRequest);

module.exports = router; // we are exporting the router 

