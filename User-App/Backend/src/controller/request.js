const Request = require('../models/request');
const Bicycle = require('../models/bicycle');

exports.createRequest = async (req,res) => { 
    
    console.log(req.body);

    // const { 
    //     title,
    //     message,
    //     tags
    // } = req.body; // destructuring the request body
 
    // else we will register the user 
    const _userRequested = req.user.fullName;
    const _bicycleRequested = await Bicycle.findOne( { _id : req.body.bicycleId } , {
        name : 1
    });
    // const users = await UserModel.find({}, {
    //     email: 1
    //  });

    Bicycle.findByIdAndUpdate( { _id : req.body.bicycleId } , { isRequested : true , requestedBy : req.user._id } , function(err , result){
        if (err)
        {
            console.log(err);

            return res.status(400).json({
                message : "Something went wrong !"
            });
        }
        console.log(result);
    })
 
    const _request = new Request({
        userRequested : _userRequested,
        bicycleRequested : _bicycleRequested,
        requestedBy : req.user._id ,
        requestedBicycle : req.body.bicycleId
        // userName : Math.random().toString()   // for now we are assigning this randomly 
    }); // this takes an object 

    _request.save( ( error , data) => {

        if (error) {
            
            console.log(error);

            return res.status(400).json({
                message : "Something went wrong !"
            });
        }
 
        if (data) {
            console.log(data);

            return res.status(200).json({
                message : "Request created successfully !"
                // user : data
            });
        }

    });


}


exports.getRequest = (req,res) => {  
    
    Request.find({})
    .exec( ( error , requests ) => {

        if (error) return res.status(400).json({ error });

        if (requests) {
            return res.status(200).json( { requests } );
        }
    }); 
}

exports.acceptRequest = (req,res) => {
    console.log(req.body);

    // find and update 
    Request.findByIdAndUpdate( { _id : req.body.requestId } , { requestGrantedBy : req.user._id , requestGrantedAt : new Date() , isResolved : true } ). 
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );

    Bicycle.findByIdAndUpdate( { _id : req.body.bicycleId } , { isAvailable : false , isTaken : true , takenBy : req.body.userId , requestGrantedBy : req.user._id , takenAt : new Date() , isRequested : false , requestedBy : null , requestGrantedBy : null , isRequestResolved : true} ).  
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );
    
    return res.status(200).json({
        message : "Request accepted successfully !"
    });

}

exports.declineRequest = (req , res) => {
    console.log(req.body);

    // delete and update 
    // find and update 
    Request.findByIdAndDelete( { _id : req.body.requestId } ). 
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );

    Bicycle.findByIdAndUpdate( { _id : req.body.bicycleId } , { isRequested : false , requestedBy : null} ). 
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );
    
    return res.status(200).json({
        message : "Request declined successfully !"
    });

}


