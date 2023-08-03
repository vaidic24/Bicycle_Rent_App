
const Bicycle = require('../models/bicycle');

exports.myBicycles = (req,res) => {  
    
    Bicycle.find({ takenBy : req.user._id })
    .exec( ( error , myBicyles ) => {

        if (error) return res.status(400).json({ error });

        if (myBicyles) {
            return res.status(200).json( { myBicyles } );
        }
    });
}

