const User = require('../models/user');
const Request = require('../models/request');
const ReturnRequest = require('../models/returnRequest');
const Bicycle = require('../models/bicycle')

exports.getUser = (req,res) => {  
    
    User.find({})
    .exec( ( error , users ) => {
        console.log(users);

        if (error) return res.status(400).json({ error });

        if (users) {
            return res.status(200).json( { users } );
        }
    });
}


exports.deleteUser = (req,res) => {  
    
    User.deleteMany({ _id : req.body.userId })
    .exec( ( error , result ) => {

        if (error) return res.status(400).json({ error });

        // if (result) {
        //     return res.status(200).json( { message : "Deleted Successfully" } );
        // }
    });

    Request.deleteMany({ requestedBy : req.body.userId })
    .exec( ( error , result ) => {

        if (error) return res.status(400).json({ error });

        // if (result) {
        //     return res.status(200).json( { message : "Deleted Successfully" } );
        // }
    });


    ReturnRequest.deleteMany({ requestedBy : req.body.userId })
    .exec( ( error , result ) => {

        if (error) return res.status(400).json({ error });

        // if (result) {
        //     return res.status(200).json( { message : "Deleted Successfully" } );
        // }
    });

    Bicycle.updateMany({ takenBy : req.body.userId } , { isAvailable : true , isTaken : false , isRequested : false,  takenBy :  null , requestedBy : null , requestGrantedBy : null , isRequestResolved : false , isReturnRequested : false , returnRequestGrantedBy : null , isReturnResolved : false} ). 
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );

    Bicycle.updateMany({ requestedBy : req.body.userId } , { isAvailable : true , isTaken : false , isRequested : false,  takenBy :  null , requestedBy : null , requestGrantedBy : null , isRequestResolved : false , isReturnRequested : false , returnRequestGrantedBy : null , isReturnResolved : false} ). 
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );

    return res.status(200).json( { message : "Deleted Successfully" } );

}

