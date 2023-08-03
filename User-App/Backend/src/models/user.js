// #C3 

const mongoose = require('mongoose');
const bcrypt =require('bcrypt');
 
const userSchema = new mongoose.Schema({ // it takes an object 

    firstName : {
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 20
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 20
    },
    userName : {
        type : String,
        required : true,
        trim : true,
        unique : true, // has to be unique 
        index : true, // indexing also required so that we can query based on username also
        lowercase : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true, 
        lowercase : true  
    },
    hash_password : { 
        type : String,
        required : true
    },
    role : { 
        type : String,
        enum : ['user','admin'],
        default : 'user'
    },
    contactNumber : {
        type : String
    },
    profilePicture :  {
        type : String 
    }

} , { timestamps : true }  ); // pass second object --> timestamps true 


// this is sync function and is not recommended !!
// #X1 
// creating virtual fields 
// userSchema.virtual('password')
// .set( function(password) {
//     // this.hash_password =  // we have to install a library 
//     this.hash_password = bcrypt.hashSync(password , 10); // 10 is the salt 

// }); // takes a regular function

userSchema.virtual('fullName')
.get ( function() {
    return `${this.firstName} ${this.lastName}`;
});
 
// lets write some methods also 
userSchema.methods = {
    // authenticate : function(password) { // X1 
    authenticate : async function(password) {
        // return bcrypt.compareSync(password, this.hash_password); // this is sync // X1 
        return await bcrypt.compare(password,this.hash_password);
        // this returns a promise 
        // so we can handle a promise  using  --> either  (await)   or   (then and catch)
        // but one problm with async function is that   when you return from async  it is also a promise 
        // say you return 10  --> you will return a promise   when you resolve a promise   then  you will get 10
        // so we have to use   await keyword in our controller 
    }
}

module.exports = mongoose.model('User' , userSchema ); // creating a model --> give it a name 

