// #D2
const { check } = require( 'express-validator' );
const { validationResult } = require('express-validator');

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),

    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    
    check('email')
    .isEmail()
    .withMessage('valid Email is required'),
    
    check('password')
    .isLength( { min : 2 } )
    .withMessage('Password lenght of more then 2 required'),
    
];

// this is common so moving to common middle ware 
// #E1 
// // #D2(A)
// exports.isRequestValidated = ( req, res , next) => {
//     const errors = validationResult(req);
//     if (errors.array().length > 0) {
//         return res.status(400).json({ error : errors.array()[0].msg });
//         // sending message 1 by 1
//         // {
//         //     "errors": [
//         //       {
//         //         "msg": "firstName is required",
//         //         "param": "firstName",
//         //         "location": "body"
//         //       },
//         //       {
//         //         "msg": "lastName is required",
//         //         "param": "LastName",
//         //         "location": "body"
//         //       },
//         //       {
//         //         "msg": "valid Email is required",
//         //         "param": "email",
//         //         "location": "body"
//         //       },
//         //       {
//         //         "msg": "Password lenght of more then 2 required",
//         //         "param": "password",
//         //         "location": "body"
//         //       }
//         //     ]
//         //   }

//     }

//     next(); // this is the middleware so once we are done here we will forward the request to the next function 
//     // which is signup controller here 
//     // so have to include next()

// }


// #D4
exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('valid Email is required'),
    
    check('password')
    .isLength( { min : 2 } )
    .withMessage('Password lenght of more then 2 required'),
    
];



exports.isRequestValidated = ( req, res , next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ error : errors.array()[0].msg });
        
    }

    next(); // this is the middleware so once we are done here we will forward the request to the next function 
    // which is signup controller here 
    // so have to include next()

}
