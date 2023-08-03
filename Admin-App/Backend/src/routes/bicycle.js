// #F1
const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { createBicycle, getBicycle } = require('../controller/bicycle');
const router = express.Router();

router.post('/createBicycle' , requireSignin , userMiddleware , createBicycle); // has to be logged in 

router.get('/getBicycle' , getBicycle); // no need to be a logged in user 

module.exports = router; // we are exporting the router 
  