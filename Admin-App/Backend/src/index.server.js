const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');

// #C1  
// importing the routes here 
// routes 
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth'); // #C8
const postRoutes = require('./routes/post'); // #C8 

const bicycleRoutes = require('./routes/bicycle');
const postClickedRoutes = require('./routes/postClicked');

const requestRoutes = require('./routes/request');

const myBicyclesRoutes = require('./routes/myBicycles');

const returnRequestRoutes = require('./routes/returnRequest');

const deleteBicycleRoutes = require('./routes/deleteBicycle');

const getDeleteUserRoutes = require('./routes/getDeleteUser');

const env = require('dotenv');

// #B
// const bodyParser = require('body-parser');

// environment variable or you can say constant 
env.config();


// MongoDb connection string 
// user - root  
// password - root 
// mongodb+srv://root:<password>@cluster0.vwseq.mongodb.net/?retryWrites=true&w=majority
// mongoose.connect('mongodb://localhost:27017/test');
mongoose.connect(
    // `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.vwseq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
    `mongodb://localhost:27017/${process.env.MONGO_DB_DATABASE}`
    // `mongodb+srv://root:root@cluster0.vwseq.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
    console.log('Database connected !!');
});
// it returns a promise 
// so you can use .then 

app.use(cors()); // add the middleware cors 

// this is the middleware for parsing the data #A
app.use(express.json()); // works 
// will use a library specially for this --> body-parser #B
// app.use(bodyParser());

// app.get('/' , (req,res,next) => {
//     // when someone will call this 
//     // we have to send a response 
    
//     res.status(200).json({
//         message : 'Hello from server'
//     });

//     // status --> 404 not found ; 200 ok ; 400,500 bad request 
// }); 
// // get is a method 
// // takes 2 arguments --> '/' and second is a callback function --> which takes 3 parameters --> req res next

// app.post('/data' , (req,res,next) => {

//     res.status(200).json({
//         'message' : req.body
//     });

// }); 
// // 1. nodemon install --> because we have to start server again and again to apply the new changes
// // 2. we got empty response in the thunder client --> we have to use bodyparser 
// //    add a middleware #A


// #C2
// lets create some middlewares --> 
// when you are making a request from postmen/thunder-client 
// and in the backend you are handing the request 
// so in between we have  middleware --> in between if we are manipulating the data based on your request --> thats middleware 
// these functions are middleware 
app.use('/api' , authRoutes); // userRoutes is a function // --> every request will be prefixed with /api for the userRoutes --> then this userRoutes will be called 
// #C3 --> models user 
 
app.use('/api' , adminRoutes); // #C8

app.use('/api' , postRoutes); // #F1

app.use('/api' , bicycleRoutes); 

app.use('/api' , postClickedRoutes);

app.use('/api' , requestRoutes);

app.use('/api' , myBicyclesRoutes);

app.use('/api' , returnRequestRoutes);

app.use('/api' , deleteBicycleRoutes);

app.use('/api' , getDeleteUserRoutes);

app.listen(process.env.PORT , () => {
    console.log(`Server is running on Port ${process.env.PORT}`);
});

// models --> we will write our models here 
// route --> we will write our api's here 
// controllers --> we will our logic here 

