const jwt = require('jsonwebtoken'); // #C6

exports.requireSignin = ( req , res , next ) => {

    console.log(req.body);
    console.log(req.headers);

    if (req.headers.authorization) {
        
        // now we have to decode the jwt token and verify the user 
        // when we will call this request --> we will send the token in the header 
        // we will add the header --> authentication which will be -->  "Bearer token" format (this Bearer is the standard)

        // const token = req.headers.authorization; // this is Bearer <token>
        const token = req.headers.authorization.split(' ')[1];

        // for testing
        console.log(token);
        // next(); // so that it can execute the next fuction 
        // // jwt.verify()

        const user = jwt.verify(token , process.env.JWT_SECRET ); // this will return the payload which we have attached during forming the token 
        // this will have the   user id , token issue time , token expiry time 
        // we will attach this to the request and call the next function 
        req.user = user; // new property created so that we can use it later
        // if you change the token or the times expires then it will given error 
        console.log(req.user);

        // next();

    }
    else {
        return res.status(400).json( { message : "user login/token required !" } );
    }

    next();

} 

exports.userMiddleware = (req,res,next) => {
    if (req.user.role !== 'user') {
        return res.status(400).json( { message : "user login required !" } );
    }
    console.log("Hii from userMiddleware");
    next();
}

exports.adminMiddleware = (req,res,next) => {
    if (req.user.role !== 'admin') {
        return res.status(400).json( { message : "admin login required !" } );
    }
    next();
}