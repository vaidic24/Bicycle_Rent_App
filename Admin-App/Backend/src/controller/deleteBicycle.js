const Bicycle = require('../models/bicycle');
const Request = require('../models/request');
const ReturnRequest = require('../models/returnRequest');

exports.deleteBicycle = (req,res) => {  
    
    Bicycle.deleteMany({ _id : req.body.bicycleId })
    .exec( ( error , result ) => {

        if (error) return res.status(400).json({ error });

        // if (result) {
        //     return res.status(200).json( { message : "Deleted Successfully" } );
        // }
    });

    Request.deleteMany({ requestedBicycle : req.body.bicycleId })
    .exec( ( error , result ) => {

        if (error) return res.status(400).json({ error });

        // if (result) {
        //     return res.status(200).json( { message : "Deleted Successfully" } );
        // }
    });

    ReturnRequest.deleteMany({ requestedBicycle : req.body.bicycleId })
    .exec( ( error , result ) => {

        if (error) return res.status(400).json({ error });

        // if (result) {
        //     return res.status(200).json( { message : "Deleted Successfully" } );
        // }
    });

    return res.status(200).json( { message : "Deleted Successfully" } );

}

