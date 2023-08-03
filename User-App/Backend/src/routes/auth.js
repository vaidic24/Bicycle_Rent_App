const express = require('express');
const { requireSignin } = require('../common-middleware');

const { signup, signin, signout } = require('../controller/auth');
const router = express.Router(); // this is a function 

// #D1
// // API request validator 
// const { check } = require( 'express-validator' );
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../validators/auth');

// attaching some functions with the router 

// #C4
// lets import the model user here and write the logic 
// const User = require('../models/user');

// router.post('/signin', () => {

// });

// #C6
// router.post('/signin', signin);

// router.post('/signup', signup ); // lets call that signup 

// #D1
// making another file 
// router.post('/signup', [
//     check('firstName')
//     .notEmpty()
//     .withMessage('firstName is required'),

//     check('LastName')
//     .notEmpty()
//     .withMessage('lastName is required'),
    
//     check('email')
//     .isEmail()
//     .withMessage('valid Email is required'),
    
//     check('password')
//     .isLength( { min : 2 } )
//     .withMessage('Password lenght of more then 2 required'),
    
// ] , signup );
// after the middleware validation 
// the result is sent in the   request of the signup controller 

// router.post('/signin', signin);

 
// #D2 
router.post('/signup', validateSignupRequest , isRequestValidated, signup);
// isRequestValidated is a function which acts as a middleware ( my logic --> as the errors array is send to the next coming function written here )

router.post('/signin',validateSigninRequest , isRequestValidated,  signin ); // lets call that signup 


// #G1
router.post('/signout' , requireSignin , signout ); // this token will expire in some time   so we will handle   requireSignin later 
// router.post('/signout' , signout ); // this token will expire in some time   so we will handle   requireSignin later 
 

// router.post('/signup', ( req, res ) => {

    // console.log(req.body);

    // // #C4
    // // lets create the user first 
    // // if user already exists then we will not alloe to register 
    // User.findOne( { email : req.body.email } )
    // .exec( (error , user ) => {

    //     if (user) return res.status(400).json({
    //         message : "User already registered !"
    //     });
        
    //     const { 
    //         firstName,
    //         lastName,
    //         email,
    //         password 
    //      } = req.body; // destructuring the request body

    //     // else we will register the user 
    //     const _user = new User({
    //         firstName,
    //         lastName,
    //         email,
    //         password,
    //         userName : Math.random().toString()   // for now we are assigning this randomly 
    //     }); // this takes an object 

    //     _user.save( ( error , data) => {

    //         if (error) {
                
    //             console.log(error);

    //             return res.status(400).json({
    //                 message : "Something went wrong !"
    //             });
    //         }

    //         if (data) {
    //             console.log(data);

    //             return res.status(201).json({
    //                 message : "User created successfully !"
    //                 // user : data
    //             });
    //         }

    //     });

    // });

    // //#C4 end 
    // //#C5 we move to controller 
    // // move all this to controller 

    // and once this executes we will use a callback function 
// });


// #C7 
// now lets say that user has successfully loged in
// how will we allow the user to access private routes which only logged in users can use 
router.post('/profile' , requireSignin , (req,res) => {
    res.status(200).json({
        user : 'profile'

        // user : req.user
        // yes found this 
        // {
        //     "user": {
        //       "_id": "6297491297c56c9a64dee0fd",
        //       "iat": 1654087826,
        //       "exp": 1654091426
        //     }
        //  }
    });
})
// but here there is no verification of the user 
// so we will add a middleware --> function #C7


module.exports = router; // we are exporting the router 

