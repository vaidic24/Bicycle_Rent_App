const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { deleteBicycle } = require('../controller/deleteBicycle');
const router = express.Router();

router.post('/deleteBicycle' , requireSignin , userMiddleware , deleteBicycle); 

module.exports = router; 
  