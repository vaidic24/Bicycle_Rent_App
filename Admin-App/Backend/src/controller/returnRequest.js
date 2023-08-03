const ReturnRequest = require('../models/returnRequest');
const Bicycle = require('../models/bicycle');

exports.returnRequest = async (req,res) => { 
    
    // return res.status(200).json({
    //     message : "Return Request created successfully !"
    //     // user : data
    // });

    // console.log( "Hi!!");
    // console.log("Hello !!" + req.body);

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

    // Bicycle.findByIdAndUpdate( { _id : req.body.bicycleId } , { isRequested : true , requestedBy : req.user._id } , function(err , result){
    //     if (err) {
    //         console.log(err);

    //         return res.status(400).json({
    //             message : "Something went wrong !"
    //         });
    //     }
    //     console.log(result);
    // })
 
    const _returnRequest = new ReturnRequest({
        userRequested : _userRequested,
        bicycleRequested : _bicycleRequested,
        requestedBy : req.user._id ,
        requestedBicycle : req.body.bicycleId
    }); // this takes an object 

    _returnRequest.save( ( error , data) => {

        if (error) {
            
            console.log(error);

            return res.status(400).json({
                message : "Something went wrong !"
            });
        }
 
        if (data) {
            console.log(data);

            // return res.status(200).json({
            //     message : "Return Request created successfully !"
            //     // user : data
            // });
        }

    });

    Bicycle.findByIdAndUpdate( { _id : req.body.bicycleId } , { isReturnRequested : true } ). 
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );

    return res.status(200).json({
        message : "Return Request created successfully !"
        // user : data
    });

}


exports.getReturnRequest = (req,res) => {  
    
    ReturnRequest.find({ isResolved : false })
    .exec( ( error , returnRequests ) => {

        if (error) return res.status(400).json({ error });

        if (returnRequests) {
            return res.status(200).json( { returnRequests } );
        }
    }); 
}


exports.acceptReturnRequest = (req,res) => {
    console.log(req.body);

    // find and update 
    ReturnRequest.findByIdAndUpdate( { _id : req.body.requestId } , { requestGrantedBy : req.user._id , requestGrantedAt : new Date() , isResolved : true } ). 
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );

    Bicycle.findByIdAndUpdate( { _id : req.body.bicycleId } , { isAvailable : true , isTaken : false , isRequested : false,  takenBy :  null , requestedBy : null , requestGrantedBy : null , isRequestResolved : false , isReturnRequested : false , returnRequestGrantedBy : null , isReturnResolved : false} ). 
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );
    
    return res.status(200).json({
        message : "Return Request accepted successfully(Bicycle returned) !"
    });

}

exports.declineReturnRequest = (req , res) => {
    console.log(req.body);

    // delete and update 
    // find and update 
    ReturnRequest.findByIdAndDelete( { _id : req.body.requestId } ). 
    exec( (error , result) => {
        if (error) return res.status(400).json({ error });

        if (result) {
            console.log(result);
        }
    } );

    // Bicycle.findByIdAndUpdate( { _id : req.body.bicycleId } , { isRequested : false , requestedBy : null} ). 
    // exec( (error , result) => {
    //     if (error) return res.status(400).json({ error });

    //     if (result) {
    //         console.log(result);
    //     }
    // } );
    
    return res.status(200).json({
        message : "Return Request declined successfully !"
    });

}

