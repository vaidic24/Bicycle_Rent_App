// #F1
const mongoose = require('mongoose');

const bicycleSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    creator : { // creator id 
        // type : String,
        // required : true,
        // trim : true
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    // tags: [String],
    createdAt: {
        type: Date,
        default: new Date() 
    }, 
    pricePerHour: {
        type: Number,
        default: 50,
        required: true
    },
    isAvailable : {
        type: Boolean,
        default: true
    },
    isTaken: {
        type: Boolean,
        default: false
    },

    isRequested : {
        type: Boolean, 
        default: false
    },
    requestedBy : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    requestGrantedBy : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    takenBy : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    takenAt : { 
        type : Date
    },
    isRequestResolved : {
        type: Boolean, 
        default: false
    },

    isReturnRequested : {
        type: Boolean, 
        default: false
    },
    // returnRequestedBy : {
    //     type : mongoose.Schema.Types.ObjectId, ref : 'User'
    // }, // same as the person who requested 
    returnRequestGrantedBy : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    isReturnResolved : {
        type : Boolean,
        default : false
    }

}  , { timestamps : true }  );


module.exports = mongoose.model('Bicycle' , bicycleSchema ); // creating a model --> give it a name 
