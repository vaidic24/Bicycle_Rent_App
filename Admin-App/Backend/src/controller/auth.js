// #C5 start 
const User = require('../models/user');
const jwt = require('jsonwebtoken'); // #C6

// #D1
// const { validationResult } = require('express-validator'); // this is a function 
 
// #X1 --> bcrpt 
const bcrypt =require('bcrypt');
const shortid = require('shortid');

exports.signup = (req,res) => { // attach a function with export so that we can call  signup

    // #D1 but this we have to write again and again --> so make a reperate function
    // that array again and again 
    // so make other file 
    // const errors = validationResult(req);
    // // this returns an array of errors 
    // return res.status(400).json({ errors : errors.array() });
    // #D2(A)
    

    console.log(req.body);

    // #C4
    // lets create the user first 
    // if user already exists then we will not alloe to register 
    User.findOne( { email : req.body.email } )
    .exec(  async  (error , user ) => { // X1 make it async 

        if (user) return res.status(400).json({
            message : "User already registered !"
        });
        
        const { 
            firstName,
            lastName,
            email,
            password 
        } = req.body; // destructuring the request body

        // #X1
        // const hash_password = bcrypt.hash(password , 10 , function(error , hash)  {

        // });

        const hash_password = await bcrypt.hash(password , 10 );

        // else we will register the user 
        const _user = new User({
            firstName,
            lastName,
            email,
            // password, // X1 
            hash_password,
            // userName : Math.random().toString()   // for now we are assigning this randomly // #y1
            userName : shortid.generate()   // for now we are assigning this randomly 
        }); // this takes an object 

        _user.save( ( error , data) => {

            if (error) {
                
                console.log(error);

                return res.status(400).json({
                    message : "Something went wrong !"
                });
            }

            if (data) {
                console.log(data);

                return res.status(200).json({
                    message : "User created successfully !"
                    // user : data
                });
            }

        });


    });

    //#C4 end 
    //#C5 we move to controller 
    // move all this to controller
    
    // #C5 end 
}

// #C6 
exports.signin = (req,res) => {

    // console.log(req.body);

    User.findOne( { email : req.body.email } )
    // .exec( ( error , user ) => { // we get the user from this callback function 
    .exec( async  ( error , user ) => { // we get the user from this callback function  // k1 

        // console.log(error);
        // console.log(user);

        if (error) return res.status(400).json({ error });

        if (user) {
            
            // we have found the user --> with the same email 
            // lets verify the password 
            // //w1 

            // this authenticate returns a promise which is evaluated to true 
            // therefore wrng password works 
 
            // k1
            const userPromise = await user.authenticate(req.body.password);
            // if (user.authenticate(req.body.password)) {
            if (userPromise) { // now will be correct  true of false // not a promise 
                // if password is also correct 
                // we will return a token from the backend(here) which will manage the user session 

                // // so lets create the token 
                // const token = jwt.sign( { _id : user._id } , process.env.JWT_SECRET , { expiresIn : '1h' } ); // first payload   // second private key 
                // // secret can be anything 
                
                // if we want some other data later ---> we will add that to the payload 
                const token = jwt.sign( { _id : user._id , firstName : user.firstName , lastName : user.lastName ,  email : user.email  , fullName : user.fullName ,  role : user.role  } , process.env.JWT_SECRET , { expiresIn : '1h' } ); // first payload   // second private key 
                

                // now token is generated 
                // now you can send the response 
                // const { firstName , lastName , email , role , fullName }  = user; // destructure the user  --> we want the id also 
                const { _id , firstName , lastName , email , role , fullName }  = user; // destructure the user 

                res.cookie('token' , token , {expiresIn : '1h'} ); // name of the cookie , value 
                res.status(200).json({
                    token,
                    user : {
                        _id , firstName , lastName , email , role , fullName
                    }
                });
                // when in an obj we write token it means  token : token

            }   
            else {
                return res.status(400).json({ message : 'Invalid Password !' });
            }

        }
        else {
            return res.status(400).json({ message : 'Something went wrong 1!' });
        }
    })
}

// common so send there  in commmon middleware 
// #C7
// exports.requireSignin = ( req , res , next ) => {
//     // now we have to decode the jwt token and verify the user 
//     // when we will call this request --> we will send the token in the header 
//     // we will add the header --> authentication which will be -->  "Bearer token" format (this Bearer is the standard)

//     // const token = req.headers.authorization; // this is Bearer <token>
//     const token = req.headers.authorization.split(' ')[1];

//     // for testing
//     // console.log(token);
//     // next(); // so that it can execute the next fuction 
//     // // jwt.verify()

//     const user = jwt.verify(token , process.env.JWT_SECRET ); // this will return the payload which we have attached during forming the token 
//     // this will have the   user id , token issue time , token expiry time 
//     // we will attach this to the request and call the next function 
//     req.user = user; // new property created so that we can use it later
//     // if you change the token or the times expires then it will given error 

//     next();
// }


exports.signout = (req,res) => {
    res.clearCookie('token');
    res.status(200).json({
        message : 'Signout Successfully !!'
    })
}
