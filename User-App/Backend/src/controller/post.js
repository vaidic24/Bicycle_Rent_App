// #F1

const Post = require('../models/post'); 

exports.createPost = (req,res) => { 
    
    console.log(req.body);

    const { 
        title,
        message,
        tags
    } = req.body; // destructuring the request body
 
    // else we will register the user 
    const _post = new Post({
        title,
        message,
        tags,
        creator : req.user._id 
        // userName : Math.random().toString()   // for now we are assigning this randomly 
    }); // this takes an object 

    _post.save( ( error , data) => {

        if (error) {
            
            console.log(error);

            return res.status(400).json({
                message : "Something went wrong !"
            });
        }
 
        if (data) {
            console.log(data);

            return res.status(200).json({
                message : "Post created successfully !"
                // user : data
            });
        }

    });


}


exports.getPost = (req,res) => {  
    
    Post.find({})
    .exec( ( error , posts ) => {

        if (error) return res.status(400).json({ error });

        if (posts) {
            return res.status(200).json( { posts } );
        }
    });
}

