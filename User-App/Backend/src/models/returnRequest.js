const mongoose = require('mongoose');

const returnRequestSchema = new mongoose.Schema({
    userRequested : {
        type : String,
        trim : true
    },
    bicycleRequested : {
        type : String, 
        trim : true
    },
    requestedBy : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    requestGrantedBy : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    requestCreatedAt: {
        type: Date,
        default: new Date() 
    },
    requestedBicycle : {
        type : mongoose.Schema.Types.ObjectId, ref : 'Bicycle'
    },
    requestGrantedAt : {
        type : Date
    },
    isResolved : {
        type: Boolean,
        default: false
    }
}  , { timestamps : true }  );


module.exports = mongoose.model('ReturnRequest' , returnRequestSchema ); // creating a model --> give it a name 
