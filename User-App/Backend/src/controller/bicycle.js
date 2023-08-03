 // #F1

const Bicycle = require('../models/bicycle');

exports.createBicycle = (req,res) => { 
    
    console.log(req.body);

    const { 
        name,
        description,
        pricePerHour
    } = req.body; // destructuring the request body
 
    // else we will register the user 
    const _bicycle = new Bicycle({
        name,
        description,
        creator : req.user._id, 
        pricePerHour
        // userName : Math.random().toString()   // for now we are assigning this randomly 
    }); // this takes an object 

    _bicycle.save( ( error , data) => {

        if (error) {
            
            console.log(error);

            return res.status(400).json({
                message : "Something went wrong !"
            });
        }
 
        if (data) {
            console.log(data);

            return res.status(200).json({
                message : "Bicycle created successfully !"
                // user : data
            });
        }

    });


}


exports.getBicycle = (req,res) => {  
    
    Bicycle.find({ isRequested : false })
    .exec( ( error , bicycles ) => {
        console.log(bicycles);

        if (error) return res.status(400).json({ error });

        if (bicycles) {
            return res.status(200).json( { bicycles } );
        }
    });
}

exports.getRequestedBicycle = (req,res) => {  
    
    Bicycle.find({ requestedBy : req.user._id })
    .exec( ( error , requestedBicycles ) => {
        console.log(requestedBicycles);

        if (error) return res.status(400).json({ error });

        if (requestedBicycles) {
            return res.status(200).json( { requestedBicycles } );
        }
    });
}

