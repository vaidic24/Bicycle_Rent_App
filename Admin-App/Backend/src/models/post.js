// #F1
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    message : {
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
    }
}  , { timestamps : true }  );


module.exports = mongoose.model('Post' , postSchema ); // creating a model --> give it a name 
