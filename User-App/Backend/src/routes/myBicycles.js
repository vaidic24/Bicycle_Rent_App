const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { myBicycles } = require('../controller/myBicycles');
const router = express.Router();
 
router.get('/myBicycles' , requireSignin , userMiddleware , myBicycles); // has to be logged in 

module.exports = router; // we are exporting the router 
 