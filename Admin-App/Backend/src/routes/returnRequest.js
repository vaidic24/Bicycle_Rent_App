const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { returnRequest , getReturnRequest, acceptReturnRequest , declineReturnRequest } = require('../controller/returnRequest');
const router = express.Router();

router.post('/returnRequest' , requireSignin , userMiddleware , returnRequest ); // has to be logged in 

router.get('/getReturnRequest' , getReturnRequest); // no need to be a logged in user 

router.post('/acceptReturnRequest' , requireSignin , userMiddleware , acceptReturnRequest);
router.post('/declineReturnRequest' , requireSignin , userMiddleware , declineReturnRequest);

module.exports = router; // we are exporting the router 

