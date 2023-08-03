const Post = require('../models/post');

exports.postClicked = (req,res) => {  
    
    console.log(req.body);
 
    Post.findOne( { _id : req.body.postId } )
    .exec( ( error , post ) => {

        if (error) return res.status(400).json({ error });

        if (post) {
            return res.status(200).json( { post } );
        }
    });
}

